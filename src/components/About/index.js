import React from 'react'
import coverImage from "../../assets/images/Nick.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "60%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hi, my name is Nick Schenck! I'm an aspiring web developer, with a certification from the UofM web development course. 
      </p>
      </div>
    </section>
  )
}

export default About