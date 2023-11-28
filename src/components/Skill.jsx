import React from "react";

import java from "../assets/img/java.png";
import springboot from "../assets/img/springboot.png";
import cPlusPlus from "../assets/img/cPlusPlus.png";
import js from "../assets/img/js.png";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <br></br>
                <h2 className="skill__title">Skill <em>나의 공부</em></h2>
                <div className="skill__desc">
                    <div>
                        <p></p>
                        <span>JAVA</span>
                        <h3>완성도 높은 객체 지향적인 프로그램을 설계</h3>
                        <div class="img">
                          <img src={java} alt="자바" />
                          <p class="comment"> 완성도 높은 객체 지향적인 프로그램을 만드는 것을 목적으로 공부하고 있습니다. 다양한 자료구조와 알고리즘을 학습해 시간복잡도를 줄이고, 클린코드 및 MVC 패턴을 이용해 가독성 및 클래스 분리 효율성을 높이려고 노력중입니다. 
                        </p>
                        </div>
                    </div>
                    <div>
                        <span>SPRING BOOT</span>
                        <h3>독립형 애플리케이션을 만드는 능력</h3>
                        <div class="img">
                          <img src={springboot} alt="스프링부트" />
                          <p class="comment">Spring Security와 RESTful API에 대해서 학습해왔습니다. 프로젝트 실전 개발을 통해 해당 Framework에 대한 저만의 기술력을 쌓아가고 있습니다. </p>
                        </div>
                        <p>
                        </p>
                    </div>
                    <div>
                        <span>C++</span>
                        <h3>다양한 게임 엔진 개발</h3>
                        <div class="img">
                          <img src={cPlusPlus} alt="씨플플" />
                          <p class="comment">언리얼 엔진, 임베디드 시스템에 대해서 학습해왔습니다. 메모리 관리, Lock과 UnLock, 멀티쓰레드에 대해 학습중이고 어떻게 하면 효율적으로 프로그램을 동작시킬 수 있는지 노력중입니다. </p>
                        </div>
                        <p>
                        </p>
                    </div>
                    <div>
                        <span>JAVASCRIPT</span>
                        <h3>혼자서 온전히 하나의 웹 또는 앱 서비스를 개발할 수 있는 풀스택 개발자</h3>
                        <div class="img">
                          <img src={js} alt="자바스크립트" />
                          <p class="comment">React, Typescript, NextJs에 대해 학습해왔습니다. TailWind, Vercel 등 Framework에 사용법도 현재 공부중에 있으며, 최종적으로 풀스택 개발자가 되어 하나의 웹을 오로지 혼자서 구현해 보는것이 목표입니다.</p>
                        </div>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skill;
