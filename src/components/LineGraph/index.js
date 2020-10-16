import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { casesTypeColors } from '../../util';
import 'moment/locale/pl';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
      title: function (tooltipItem, data) {
        return tooltipItem[0].xLabel
      }
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          unit: "day",
          tooltipFormat: "ll",
          displayFormats: {
            "day": "D MMM"
          },
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineGraph({ casesType, countryCode, timePeriod }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const url = countryCode === "worldwide" ? `https://disease.sh/v3/covid-19/historical/all?lastdays=${timePeriod}` : `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=${timePeriod}`;
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (countryCode !== "worldwide") {
            data = data.timeline;
          }
          const chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType, countryCode, timePeriod]);

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: casesTypeColors[casesType].half_op,
                borderColor: casesTypeColors[casesType].hex,
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
