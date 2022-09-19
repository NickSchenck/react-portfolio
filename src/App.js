<<<<<<< HEAD
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Work I have contributed to',
    },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
=======
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {

  return (
    <div>
      <Nav />
      <main>
          <About />        
>>>>>>> 8322d0aefcbccfa5e917c0328de7333be3df8c42
      </main>
    </div>
  );
}

export default App;
