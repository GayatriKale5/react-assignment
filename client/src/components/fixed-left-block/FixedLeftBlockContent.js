import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class FixedLeftBlockContent extends Component {
    render() {
        return (
            <Router>
                <div className="fixed-left-side-block">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="./img/user.png" alt="person" />
                        </div>

                        <div className="profile-name">
                            <h1 className="user-name">Akshay Handge</h1>
                            <p>
                                <span className="photoshop-color">UI/UX Designer</span> in Dewas
                        </p>
                        </div>


                        <ul className="social-btn">
                            <li>
                                <Link to="/">
                                    <i className="fa fa-facebook" aria-hidden="true">
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-twitter" aria-hidden="true">
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-behance" aria-hidden="true">
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-instagram" aria-hidden="true">
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-linkedin" aria-hidden="true">
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-dribbble" aria-hidden="true">
                                    </i>
                                </Link>
                            </li>
                        </ul>
                        <div className="discription">
                            <h2 className="title">what's in my mind</h2>
                            <p>
                                We can develop and design anything beyond your ima gination.
                                About our work, we don’t say anything bec ause our work speaks.
                                For more, you can ask our clie nts and they will tell you how much
                                satisfied they are with our services. So, what are you waiting for?
                        </p>
                        </div>

                        <div className="cv-btn">
                            <Link to="/" className="custom-btn">
                                <i className="fa fa-download" aria-hidden="true"></i> Download CV
                        </Link>
                        </div>
                    </div>

                </div>
            </Router>
        );
    }
}

export default FixedLeftBlockContent;
