import React from "react";

import about from "../assets/img/about.jpg";
import about2 from "../assets/img/about2.png";

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <div className="aboutMe__inner">
                <h2 className="aboutMe__title">About Me <em> 나에 대해서</em></h2>
                <div className="aboutMe__wrap">
                    <article className="aboutMe__item s1">
                        <div class = "content-box1">
                            <img src={about} alt="어바웃미"/>
                        </div>
                    </article>
                    <article className="aboutMe__item s2">
                    <div class = "content-box2">
                            <img src={about2} alt="어바웃미2"/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};
 
export default AboutMe;
