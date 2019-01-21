import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row">
                    {/* content */}

                    <div className="col-3 p-0">
                        <div className="fixed-left-side-block">
                            <div className="profile">
                                <div className="profile-image center-align">
                                    <img src="./img/user.png" alt="person" />
                                </div>


                                <div className="profile-name center-align">
                                    <h1 className="user-name">Akshay Handge</h1>
                                    <p>
                                        <span className="photoshop-color">UI/UX Designer</span> in Dewas
                </p>
                                </div>


                                <ul className="social-btn">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-behance" aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>

                                <div className="discription clearfix">
                                    <h2 className="title mb-30">what's in my mind</h2>
                                    <p>
                                        We can develop and design anything beyond your ima gination. About our work, we don’t say anything bec ause our work speaks. For more, you can ask our clie nts and they will tell you how much satisfied they are with our services. So, what are you waiting for?
                </p>
                                </div>

                                <div className="cv-btn">
                                    <a href="#!" className="custom-btn waves-effect waves-light">
                                        <i className="fa fa-download" aria-hidden="true"></i> download cv
                </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-9 sections-colm p-0">
                        <section id="section-home" className="scrollable-area section1">
                            Home
                    </section>
                        <section id="section-about" className="scrollable-area section1">
                            About
                    </section>
                        <section id="section-skill" className="scrollable-area section1">
                            Skill
                    </section>
                        <section id="section-education" className="scrollable-area section1">
                            Education
                    </section>
                        <section id="section-portfolio" className="scrollable-area section1">
                            Portfolio
                    </section>
                        <section id="section-testimonial" className="scrollable-area section1">
                            Testimonial
                    </section>
                        <section id="section-exprience" className="scrollable-area section1">
                            Exprience
                    </section>
                        <section id="section-blog" className="scrollable-area section1">
                            Blog
                    </section>
                        <section id="section-contact" className="scrollable-area section1">
                            Contact
                    </section>
                    </div>



                    {/* header */}
                    <a href="/" className="logo">
                        <img src="../img/logo.png" alt="logo" />
                    </a>
                    <Scrollspy items={[
                        'section-home',
                        'section-about',
                        'section-skill',
                        'section-education',
                        'section-portfolio',
                        'section-testimonial',
                        'section-exprience',
                        'section-blog',
                        'section-contact'

                    ]}
                        currentClassName="is-current"
                    >
                        <li>
                            <a href="#section-home">Home</a>
                        </li>
                        <li>
                            <a href="#section-about">About</a>
                        </li>
                        <li>
                            <a href="#section-skill">Skill</a>
                        </li>
                        <li>
                            <a href="#section-education">Education</a>
                        </li>
                        <li>
                            <a href="#section-portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#section-testimonial">Testimonial</a>
                        </li>
                        <li>
                            <a href="#section-exprience">Exprience</a>
                        </li>
                        <li>
                            <a href="#section-blog">Blog</a>
                        </li>
                        <li>
                            <a href="#section-contact">Contact</a>
                        </li>
                        <li>
                            <a href="#"> <i className="fas fa-search"></i></a>
                        </li>
                    </Scrollspy>

                </div>
            </div>
        );
    }
}

export default Header;
