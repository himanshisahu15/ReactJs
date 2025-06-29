// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import styles from './About.module.css';


const About = () => {

  const [profile, setProfile] = useState(null);

  useEffect(() => {
   fetch('https://api.github.com/users/himanshisahu15')

      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log("Error to fetching data from Github"))
  }, []);

  return (
    <div className={styles.container}>

      <h2>About Me</h2>
      {profile ? (
        <div>
          <img src={profile.avatar_url}
            alt='avatar'
          ></img>
          <h3>{profile.login}</h3>
          <p>{profile.bio}</p>
          <p>📁 Public Repos: {profile.public_repos}</p>
          <p>👥 Followers: {profile.followers}</p>
         </div>
          ):(
          <p>Loading profile...</p>
      )}
    </div>
      );
};

      export default About;
