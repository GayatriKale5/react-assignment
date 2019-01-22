import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Tabs from './Tabs';

class SkillProfessional extends Component {
    render() {
        return (
            <Router>
                <div className="professional-skills-area">
                    <ul className="tabs skills-tab ul-li">

                        <li className="tag-item tag-icon">
                            <i className="fa fa-tags" aria-hidden="true"></i>
                        </li>

                        <Tabs>
                            <li className="tag-item"><Link to="/">#graphicdesign</Link></li>
                            <span>
                                <div id="graphicdesign mt-4">
                                    <h2 className="title">professional skills</h2>

                                    <div className="skill_progress">

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="single_experties">
                                                    <div className="skilled-tittle">Photoshop</div>
                                                    <div className="photoshop-progress">
                                                        <ProgressBar percent={90} />
                                                    </div>
                                                </div>

                                                <div className="single_experties">
                                                    <div className="skilled-tittle">Jquery</div>
                                                    <div className="jquery-progress">
                                                        <ProgressBar percent={60} />
                                                    </div>
                                                </div>

                                                <div className="single_experties m-0">
                                                    <div className="skilled-tittle">PHP</div>
                                                    <div className="php-progress">
                                                        <ProgressBar percent={75} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6 mt-4 mt-md-0">
                                                <div className="single_experties">
                                                    <div className="skilled-tittle">HTML5</div>
                                                    <div className="html-progress">
                                                        <ProgressBar percent={45} />
                                                    </div>
                                                </div>

                                                <div className="single_experties">
                                                    <div className="skilled-tittle">CSS3</div>
                                                    <div className="css-progress">
                                                        <ProgressBar percent={65} />
                                                    </div>
                                                </div>

                                                <div className="single_experties m-0">
                                                    <div className="skilled-tittle">Marketing</div>
                                                    <div className="marketing-progress">
                                                        <ProgressBar percent={80} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>

                            <li className="tag-item"><Link to="/">#photography</Link></li>
                            <span>photography</span>

                            <li className="tab tag-item"><Link to="/">#technology</Link></li>
                            <span>technology</span>

                            <li className="tab tag-item"><Link to="/">#design</Link></li>
                            <span>design</span>

                            <li className="tab tag-item"><Link to="/">#webdevelopment</Link></li>
                            <span>webdevelopment</span>

                            <li className="tab tag-item"><Link to="/">#application</Link></li>
                            <span>application</span>

                        </Tabs>
                    </ul>
                    {/* <ul className="tabs skills-tab ul-li">
                        <li className="tab tag-item tag-icon">
                            <i className="fa fa-tags" aria-hidden="true"></i>
                        </li>
                        <li className="tab tag-item"><Link to="/">#graphicdesign</Link></li>
                        <li className="tab tag-item"><Link to="/">#photography</Link></li>
                        <li className="tab tag-item"><Link to="/">#technology</Link></li>
                        <li className="tab tag-item"><Link to="/">#design</Link></li>
                        <li className="tab tag-item"><Link to="/">#webdevelopment</Link></li>
                        <li className="tab tag-item"><Link to="/">#application</Link></li>

                        <div className="indicator" style={{ right: '508.922px', left: '161.359px' }}></div></ul> */}
                </div>


            </Router >
        );
    }
}

export default SkillProfessional;