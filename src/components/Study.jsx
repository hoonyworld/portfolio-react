import React from 'react'

import tdd from "../assets/img/tdd.png";
import oracle from "../assets/img/oracle.png";
import react from "../assets/img/react.png";
import docker from "../assets/img/docker.png";

const Study = () => {
  return (
    <section id="study">
            <div className="study__inner">
                <br></br>
                <h2 className="study__title">study <em>나의 공부</em></h2>
                <div className="study__desc">
                    <div>
                        <p></p>
                        <span>TDD</span>
                        <h3>오류에 대해 신속한 파악 및 디버깅 시간 단축</h3>
                        <div class="img">
                          <img src={tdd} alt="티디디" />
                          <p class="comment">테스트코드를 먼저 작성하고, 코드를 개발하여 사전 오류를 방지하도록 개발을 해오고 있습니다. JUnit5와 asserj를 이용해 해당 메서드의 오류검증 테스트를 진행함으로서 효율적인 개발이 가능했습니다. 최근에는 Mockito 라이브리러를 이용해 목업데이터를 능숙하게 다루어보려고 노력중입니다.
                        </p>
                        </div>
                    </div>
                    <div>
                        <span>ORACLE</span>
                        <h3>최고의 멀티 모델 컨버지드 데이터베이스 관리 시스템</h3>
                        <div class="img">
                          <img src={oracle} alt="오라클" />
                          <p class="comment">개념적 설계~물리적 설계 나아가 트랜잭션까지 DB의 구조를 완벽히 이해하도록 꾸준히 공부하고 있습니다. 데이터 모델링과 정규화에 대해서 잘 숙지하고 있으며, SQL에 능숙하여 DB query 관리를 잘할 수 있습니다. 최근에는 Hibernate와 JDBC 같은 ORM 프레임워크에 능숙해지기 위해 노력중입니다. </p>
                        </div>
                        <p>
                        </p>
                    </div>
                    <div>
                        <span>REACT</span>
                        <h3>인터페이스를 만들기 위한 선언적이고 효율적인 방법을 제공하는 라이브러리</h3>
                        <div class="img">
                          <img src={react} alt="리액트" />
                          <p class="comment">사용자가 UI 조작으로 웹사이트와 최적으로 상호작용할 수 있는 동적인 웹사이트를 만들기 위해 공부를 해오고 있습니다. 컴포넌트, 단방향 데이터 흐름, VDOM을 적재적소에 맞게 활용할 수 있도록 노력하고 있으며 추후에 직접 제작한 서버와 api 연결을 시도해 볼 생각입니다. </p>
                        </div>
                        <p>
                        </p>
                    </div>
                    <div>
                        <span>DOCKER</span>
                        <h3>애플리케이션을 신속하게 구축, 테스트 및 배포를 할 수 있는 소프트웨어 플랫폼</h3>
                        <div class="img">
                          <img src={docker} alt="도커" />
                          <p class="comment">최근에 학습을 시작했습니다. 도커 이미지와 도커 컨테이너에 대해 학습중에 있으며, 기본적인 도커 명령어를 아직 학습중에 있습니다. 추후에 쿠버네티스도 학습을 한 후 도입을 하여 지금 런칭중인 서비스에 무중단 배포를 적용시킬 생각입니다.</p>
                        </div>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Study;