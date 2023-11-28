import React from "react";

import woowacourse from "../assets/img/woowacourse.png";
import codingTest from "../assets/img/codingTest.png";
import naverIntern from "../assets/img/naverIntern.png";
import certificate from "../assets/img/certificate.png";


const Career = () => {
    return (
        <section id="career">
            <div className="career__inner">
                <h2 className="career__title">career<em> 나의 경력</em></h2>
                <div className="career__wrap">
                    <article className="career__item s1">
                        <div class = "content-box1">
                            <img src={woowacourse} alt="우아한테크코스"/>
                            <h3 className="title">우아한테크코스(Woowa Course)</h3>
                        </div>
                        <div className="info">
                            <span>career</span>
                            <span>production period : a week</span>
                            <span>use stack : Java</span>
                        </div>
                    </article>
                    <article className="career__item s2">
                        <div class = "content-box2">
                            <img src={codingTest} alt="코딩테스트"/>
                            <h3 className="title">코딩테스트(Coding Test)</h3>
                        </div>
                        <div className="info">
                            <span>career</span>
                            <span>production period : one day</span>
                            <span>use stack : Java</span>
                        </div>
                    </article>
                    <article className="career__item s3">
                        <div class = "content-box3">
                            <img src={naverIntern} alt="네이버인턴"/>
                            <h3 className="title">네이버 인턴(Naver Intern)</h3>
                        </div>
                        <div className="info">
                            <span>career</span>
                            <span>production period : four months</span>
                            <span>use stack : Java</span>
                        </div>
                    </article>
                    <article className="career__item s4">
                        <div class = "content-box4">
                            <img src={certificate} alt="자격증"/>
                            <h3 className="title">자격증(Certificate)</h3>
                        </div>
                        <div className="info">
                            <span>career</span>
                            <span>production period : a week</span>
                            <span>use stack : Java</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Career;