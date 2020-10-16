import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import LineGraph from '../../components/LineGraph';
import InfoBox from '../../components/InfoBox';
import Map from '../../components/Map';
import Table from '../../components/Table';
import DropdownButton from '../../components/DropdownButton';
import { sortData, prettyPrintStat } from '../../util';
import numeral from "numeral";
import './home.css';
import iso_countries from "i18n-iso-countries";
import {
  MenuItem,
  FormControl,
  Select,
  CardContent,
  Card,
  Typography,
  InputLabel
} from "@material-ui/core";
import { animateScroll } from 'react-scroll';
const Home = () => {
  iso_countries.registerLocale(require("i18n-iso-countries/langs/pl.json"));

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const worldwideMapCenter = { lat: 54, lng: 18 };
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: worldwideMapCenter.lat, lng: worldwideMapCenter.lng });
  const [mapZoom, setMapZoom] = useState(3);
  const [timePeriod, setTimePeriod] = useState(7);
  const [isTableExpand, setTableExpand] = useState(false);


  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso3,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const tableExpandToggle = (e) => {
    setTableExpand(!isTableExpand);
    animateScroll.scrollToBottom();
  };

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);

        if (countryCode === "worldwide") {
          setMapCenter([worldwideMapCenter.lat, worldwideMapCenter.lng])
        } else {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        }

        setMapZoom(4);
      });
  };
  const onCasesTypeChange = (e) => {
    const type = e.target.value;
    setCasesType(type);
  };

  const onTimePeriodChange = (e) => {
    const timePeriod = e.target.value;
    setTimePeriod(timePeriod);
  }
  const translateToPolishCaseTypes = (casesType) => {
    let polishCaseType;
    switch (casesType) {
      case 'cases':
        polishCaseType = 'Zakażenia';
        break;
      case 'deaths':
        polishCaseType = 'Zgony';
        break;

      case 'recovered':
        polishCaseType = 'Wyleczeni';
        break;

      default:
        polishCaseType = '';
        break;
    }
    return polishCaseType;
  }
  return (
    <div className="home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="home__container">
        <div className="home__left_1">
          <div className="home__header">
            <h1>Wybierz Obszar</h1>
            <div className="home__selects">
              <FormControl className="home__dropdown">
                <InputLabel id="countryLabel">Kraj</InputLabel>
                <Select
                  labelId="countryLabel"
                  variant="outlined"
                  value={country}
                  onChange={onCountryChange}
                >
                  <MenuItem value="worldwide">Cały Świat</MenuItem>
                  <MenuItem value="POL">Polska</MenuItem>
                  {countries.map((country) => (
                    <MenuItem value={country.value}>{iso_countries.getName(country.value, "pl")}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="home__dropdown">
                <InputLabel id="casesTypeLabel">Typ Danych</InputLabel>
                <Select labelId="casesTypeLabel" variant="outlined" value={casesType} onChange={onCasesTypeChange}>
                  <MenuItem value="cases">Zakażenia</MenuItem>
                  <MenuItem value="recovered">Wyleczeni</MenuItem>
                  <MenuItem value="deaths">Zgony</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>
          <Card className="home__changeGraph">
            <FormControl className="home__range" fullWidth={true}>
              <h3>{translateToPolishCaseTypes(casesType)} w ciągu </h3>
              <Select className="home__timeSelect" variant="outlined" value={timePeriod} onChange={onTimePeriodChange}>
                <MenuItem value="7">1 tyg</MenuItem>
                <MenuItem value="14">2 tyg</MenuItem>
                <MenuItem value="30">30 dni</MenuItem>
                <MenuItem value="120">120 dni</MenuItem>
              </Select>
            </FormControl>
            <LineGraph casesType={casesType} countryCode={country} timePeriod={timePeriod} />
          </Card>
        </div>
        <div className="home__stats home__left_2">
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Zakażenia Dzisiaj"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")} />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Wyleczeni Dzisiaj"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Zgony Dzisiaj"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>
        <div className="home__right_1">
          <Map
            countries={mapCountries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
        <Card className="home__right_2" isExpand={isTableExpand}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Aktywne Przypdaki według kraju</Typography>
            <Table countries={tableData} isExpand={isTableExpand} />
            <DropdownButton toggle={tableExpandToggle} />
          </CardContent>
        </Card>
      </div>
    </div >
  )
}

export default Home;
