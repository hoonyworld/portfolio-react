import React from "react";

import donghoonlee from "../assets/img/donghoonlee.jpg";
import arrow from "../assets/img/arrow.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home_left_wrapper">
        <div className="greetings_group">
          <p className="greetings_top">
            안녕하세요
            <br />
            백엔드 개발자
            <br />
            이동훈입니다
          </p>
          <hr className="greetings_under_line" />
          <p className="greetings_bottom">방문해 주셔서 감사합니다</p>
        </div>
      </div>
      <div className="home_right_wrapper">
        <img className="donghoonticon" src={donghoonlee} alt="" />
      </div>
      <div className="arrow">
        <img className="animateDown" src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Home;
