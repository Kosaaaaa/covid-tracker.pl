import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import './About.css';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="about">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="about__container">
        <Card className="about__card">
          <CardHeader title="O Projekcie" className="about__title" />
          <CardContent>
            <Typography className="about__typo">
              Projekt powstał na potrzeby konkursu Hackheros. Projekt ma na celu informowanie o aktualnym przebiegu pandemii koronawirusa w Polsce i w reszcie świata w postaci statystyk.
              </Typography>
            <Typography className="about__typo">Strona ma również sekcję informacyjną w której można się dowiedzieć więcej na temat koronawirusa i jak sobie z nim radzić. Można się tam równiez dowiedzieć o tym jak dbać o swoje zdrowie psychiczne oraz innych.</Typography>
            <Typography>Źródła danych: <a href="https://disease.sh/">disease.sh</a> <a href="https://www.who.int/">who.int</a></Typography>
            <Typography>Wykonanie: <a href="https://github.com/kosaaaaa" className="about__authorLink">Oskar Kosobucki</a></Typography>
            <Typography style={{ "textAlign": "center" }}>Wszystkie Prawa Zastrzeżone © {new Date().getFullYear()}</Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage;
