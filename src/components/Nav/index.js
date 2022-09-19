<<<<<<< HEAD
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
=======
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [
    { name: 'Portfolio', description: 'Photos of apps which I have worked on' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
>>>>>>> 8322d0aefcbccfa5e917c0328de7333be3df8c42
          <span role="img" aria-label="camera"> Nick Schenck</span> 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
<<<<<<< HEAD
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
=======
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
>>>>>>> 8322d0aefcbccfa5e917c0328de7333be3df8c42
        </ul>
      </nav>
    </header>
  );
}

<<<<<<< HEAD
export default Nav;
=======
export default Nav;
>>>>>>> 8322d0aefcbccfa5e917c0328de7333be3df8c42
