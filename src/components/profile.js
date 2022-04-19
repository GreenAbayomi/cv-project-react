import React from 'react'
import Contact from './contact'
import Images from '../images'
import Skills from './skills'


const ProfileGeneral = () => {

  return (
      <div className="profile-section">

          <div className="profile">
            <Images/>
            <h1>Daniel Jones</h1>
            <p>Front-end Engineer</p>
          </div>
         
          <div className="contactDetails">
            <Contact />
          </div>    
          <div className="skillset">
              <Skills />
          </div>
          <div className="hobbies">
              <h2>HOBBIES</h2>
              <ul>
                  <li>Football </li>
                  <li>Traveling </li>
                  <li>Music </li>
                  <li>Game </li>
                  <li>Photography </li>
                  <li>Skydiving </li>
                  <li>Coding</li>
                </ul>
            </div>  
      </div>

     
     
   
      
  )
}

export default ProfileGeneral