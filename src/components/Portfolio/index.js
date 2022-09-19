import React from 'react';

import PG1 from '../../assets/images/Boozy-Books.png'
import PG2 from '../../assets/images/fictional-guacamole.png'
import cat from '../../assets/images/Cute.jpg'

function Portfolio() {
  
  return (
    <div className="flex-row">
    <img alt='A book and drink pairing app' src={PG1} className="img-thumbnail mx-1" style={{ width: "50%" }} onClick={event =>  window.location.href='https://github.com/NickSchenck/Book-Nook'}></img>
    <img alt='A pet boarding app' src={PG2} className="img-thumbnail mx-1" style={{ width: "50%" }} onClick={event =>  window.location.href='https://github.com/NickSchenck/fictional-guacamole'}></img>
    <img alt='A cute cat' src={cat} className="img-thumbnail mx-1" style={{ width: "30%" }} onClick={event =>  window.location.href='https://github.com/NickSchenck/Project1placeholder'}></img>
    </div>
  );
}
export default Portfolio;
