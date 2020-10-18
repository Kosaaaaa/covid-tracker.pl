import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Emoji from '../../components/Emoji';
import './NotFound.css';
const NotFoundPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="notFound">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="notfound__container">
        <h1>Error 404 </h1>
        <h4>nie ma takiej podstrony</h4>
        <Emoji symbol="🦦" label="Otter emoji" />
      </div>

    </div>
  )
}

export default NotFoundPage;
