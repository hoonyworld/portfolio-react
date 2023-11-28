import React from 'react'

import award1 from "../assets/img/award1.png";
import award2 from "../assets/img/award2.png";

const Award = () => {
  return (
    <section id="award">
            <div className="award__inner">
                <h2 className="award__title">Award<em> 나의 수상</em></h2>
                <div className="award__wrap">
                    <article className="award__item s1">
                        <div class = "content-box1">
                            <img src={award1} alt="K-Paas"/>
                            <h3 className="title">콘테스트(Contest)</h3>
                        </div>
                        <div className="info">
                            <span>award</span>
                            <span>production period : two months</span>
                            <span>use stack : Java</span>
                        </div>
                    </article>
                    <article className="award__item s2">
                        <div class = "content-box2">
                            <img src={award2} alt="구름톤"/>
                            <h3 className="title">해커톤(Hackathon)</h3>
                        </div>
                        <div className="info">
                            <span>award</span>
                            <span>production period : one day</span>
                            <span>use stack : Java</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
  )
}

export default Award;