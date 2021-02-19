import React from "react";

import { avatar, generator } from "../../Components/UI/NavBar/Avatar/Avatar";
import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";

import "./Profiles.css";

const avatar1 = generator.generateRandomAvatar();
const avatar2 = generator.generateRandomAvatar();

const rickroll = () => {
  alert(
    "I am too lazy and uninterested to implement this! \n So... Get Rickrolled Kid!!!"
  );
  window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

const Profiles = () => {
  return (
    <div className="profiles">
      <div className="Netflix__logo">
        <NetflixLogo />
      </div>
      <div className="profiles__body">
        <h1>Who's watching?</h1>
        <div className="profiles__container">
          <div className="profiles__profile ">
            <img
              src={avatar}
              alt="active user avatar"
              onClick={() => alert("This is the same profile BAKA!!")}
            />
            <h3
              className="profile-active"
              onClick={() => alert("This is the same profile BAKA!!")}
            >
              Neo
            </h3>
          </div>
          <div className="profiles__profile  ">
            <img src={avatar1} alt="avatar" onClick={rickroll} />
            <h3 onClick={rickroll}>Neon</h3>
          </div>
          <div className="profiles__profile ">
            <img src={avatar2} alt="avatar" onClick={rickroll} />
            <h3 onClick={rickroll}>Nil</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
