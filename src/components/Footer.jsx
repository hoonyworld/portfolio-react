import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">contact</a>
                        </div>
                        <p className="desc">CP. 010-4056-1688</p>
                    </div>
                    <div className="right">
                        <h3>SOCIAL</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.dsec}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 고급웹프로그래밍 포트폴리오<br />
                    Made By DongHoon Lee
                </div>
            </div>
        </footer>
    )
}

export default Footer;