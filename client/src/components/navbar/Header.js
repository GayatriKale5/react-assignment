import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import FixedLeftBlockContent from '../fixed-left-block/FixedLeftBlockContent';
import EducationSection from '../education/EducationSection';
import AboutSection from '../about/AboutSection';
import SkillSection from '../skill/SkillSection';


class Header extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid p-0">
                    <div className="row">
                        {/* content */}

                        <div className="d-none d-xl-block col-xl-3 p-0">
                            <FixedLeftBlockContent />
                        </div>

                        <div className="col-12 col-xl-9 sections-colm p-0">
                            <section id="section-home" className="scrollable-area section1">
                                <div className="Section-title">
                                    <h2>
                                        <i className="fa fa-dashboard" aria-hidden="true"></i>Home
                                    </h2>
                                </div>
                            </section>
                            <section id="section-about" className="scrollable-area section1">
                                <AboutSection />
                            </section>
                            <section id="section-skill" className="scrollable-area section1">
                                <SkillSection />
                            </section>
                            <section id="section-education" className="scrollable-area section1">
                                <EducationSection />
                            </section>
                            <section id="section-portfolio" className="scrollable-area section1">
                                <div className="Section-title">
                                    <h2>
                                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                                        My Portfolio
				                    </h2>
                                </div>
                            </section>
                            <section id="section-testimonial" className="scrollable-area section1">
                                <div className="Section-title">
                                    <h2>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        testomonials
				                    </h2>
                                </div>
                            </section>

                            <section id="section-exprience" className="scrollable-area section1">
                                <div className="Section-title">
                                    <h2>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                        Work Experience
				                    </h2>
                                </div>
                            </section>
                            <section id="section-blog" className="scrollable-area section1">
                                <div className="Section-title">
                                    <h2>
                                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                        Latest News
				                    </h2>
                                </div>
                            </section>
                            <section id="section-contact" className="scrollable-area mb-30 section1">
                                <div className="Section-title">
                                    <h2>
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        contact me
				                    </h2>
                                </div>
                            </section>
                        </div>

                        {/* header */}
                        <Link to="/" className="logo">
                            <img src="../img/logo.png" alt="logo" />
                        </Link>
                        <div className="header-ul">
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
                                    <Link to="/"> <i className="fa fa-search"></i></Link>
                                </li>
                            </Scrollspy>
                        </div>

                    </div>
                </div>
            </Router>
        );
    }
}

export default Header;
