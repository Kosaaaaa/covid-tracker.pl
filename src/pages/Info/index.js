import React, { useState } from 'react';
import './info.css';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import InfoSection from '../../components/InfoSection';
import Emoji from '../../components/Emoji';
import ButtonScroll from '../../components/ButtonScroll';
import { CardStyled } from '../../components/InfoSection/InfoSectionElements';
import { HealthInfoContent } from '../../components/HealthInfoContent/HealthInfoContentElement';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Typography,
  CardHeader,
  CardContent,
  MenuItem,
  FormControl,
  Select,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core';
import {
  section1,
  section2,
  healthInfoSymptoms,
  healthInfoPrevention,
  healthInfoTreatment,
  accordionsData
} from './data';


const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [healthInfo, setHealthInfo] = useState("symptoms");

  const onChangeHealthInfo = (e) => {
    setHealthInfo(e.target.value);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="info">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="info__container">
        <header>
          <Typography variant="h1">Informacje o COVID-19 </Typography>
          <ButtonScroll variant="contained" text="Dowiedz się więcej" to="info__left_1" color="buttonScroll__primary" />
        </header>

        <div className="info__left_1" id="info__left_1">
          <InfoSection title={section1.title} p1={section1.p1} p2={section1.p2} />
        </div>
        <div className="info__right_1">
          <InfoSection title={section2.title} p1={section2.p1} p2={section2.p2} />
        </div>
        <div className="info__left_2">
          <CardStyled>
            <CardHeader title="Informacje zdrowotne" />
            <FormControl size="small" className="info__formControl">
              <Select variant="outlined" defaultValue="symptoms" onChange={onChangeHealthInfo}>
                <MenuItem value="symptoms">Objawy</MenuItem>
                <MenuItem value="prevention">Profilaktyka</MenuItem>
                <MenuItem value="treatment">Leczenie</MenuItem>
              </Select>
            </FormControl>


            <HealthInfoContent className="info__healthInfo" active={healthInfo === 'symptoms'}>
              <p>{healthInfoSymptoms.p1}</p>

              <h4>{healthInfoSymptoms.subtitle1}</h4>
              <ul>
                {healthInfoSymptoms.ul1.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>

              <h4>{healthInfoSymptoms.subtitle2}</h4>
              <ul>
                {healthInfoSymptoms.ul2.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </HealthInfoContent>

            <HealthInfoContent className="info__healthInfo" active={healthInfo === 'prevention'}>
              <p>{healthInfoPrevention.p2}</p>
              <hr />

              <h4>{healthInfoPrevention.subtitle1}</h4>
              <ul>
                {healthInfoPrevention.ul1.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>

              <p>{healthInfoPrevention.p2}</p>

            </HealthInfoContent>

            <HealthInfoContent className="info__healthInfo" active={healthInfo === 'treatment'}>
              <p>{healthInfoTreatment.p1} <a href="https://www.who.int/">Światowa Organizacja Zdrowia</a></p>
              <hr />

              <h4>{healthInfoTreatment.subtitle1}</h4>
              <p>{healthInfoTreatment.p2}</p>
              <p>{healthInfoTreatment.p3}</p>
              <p>{healthInfoTreatment.p4}</p>
            </HealthInfoContent>
            <Button variant="contained" className="info__btnPrimary"><Emoji symbol="🌎" label="Globe Emoji" /><a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=protect"> Więcej informacji znajdziesz na who.int</a></Button>
          </CardStyled>
        </div>
        <div className="info__right_2">
          <CardStyled>
            <CardHeader title="Radzenie sobie ze stresem" subheader="Dbaj o samopoczucie" />
            <CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography><Emoji symbol="☀️" label="Sun emoji" />{accordionsData.panel1a.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="info__accordionDetails">
                  <Typography >
                    <Typography>{accordionsData.panel1a.p1}</Typography>
                    <br />
                    <Typography>{accordionsData.panel1a.p2}</Typography>
                    <br />
                    <Typography>{accordionsData.panel1a.p3}</Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography><Emoji symbol="🧑‍💻" label="Person infront of laptop emoji" />{accordionsData.panel2a.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="info__accordionDetails">
                  <Typography>
                    {accordionsData.panel2a.p1}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography><Emoji symbol="🧼" label="Soap emoji" />{accordionsData.panel3a.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="info__accordionDetails">
                  <Typography>{accordionsData.panel3a.subtitle1}</Typography>
                  <ul>
                    {accordionsData.panel3a.ul1.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                  <Typography>{accordionsData.panel3a.subtitle2}</Typography>
                  <ul>
                    {accordionsData.panel3a.ul2.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography><Emoji symbol="❤️" label="Love emoji" />{accordionsData.panel4a.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="info__accordionDetails">
                  <Typography>{accordionsData.panel4a.p1}</Typography>
                  <br />
                  <Typography>{accordionsData.panel4a.p2}</Typography>
                  <br />
                  <Typography>{accordionsData.panel4a.p3}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography><Emoji symbol="📞" label="Phone emoji" />{accordionsData.panel5a.title}</Typography>
                </AccordionSummary>
                <AccordionDetails className="info__accordionDetails">
                  <Typography>{accordionsData.panel5a.p1}</Typography>
                </AccordionDetails>

              </Accordion>
            </CardContent>
          </CardStyled>
        </div>
      </div>
    </div >
  )
}

export default AboutPage;
