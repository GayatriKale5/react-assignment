import React, { Component } from 'react';
import EducationAccordian from './EducationAccordian';

class EducationAccordianContent extends Component {
    render() {
        return (
            <div className="education-accordian-section">
                <EducationAccordian>
                    <div className="accordian">
                        <div className="head blue-icon">
                            <span className="icon">
                                <i className="fa fa-pencil blue-pencil" aria-hidden="true"></i>
                            </span>
                            <p>
                                <strong>Master Degree of design</strong> - Abc University of Los Angeles , 2015 - 2016
                        </p>
                        </div>
                        <div className="body">
                            <span>
                                Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                        </div>
                    </div>

                    <div className="accordian">
                        <div className="head green-icon">
                            <span className="icon">
                                <i className="fa fa-pencil green-pencil" aria-hidden="true"></i>
                            </span>
                            <p>
                                <strong>Bachelor Degree of C.A.</strong> - Vikarm University of Ujjain , 2014 - 2015
                        </p>
                        </div>
                        <div className="body">
                            <span>
                                Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                        </div>
                    </div>

                    <div className="accordian">
                        <div className="head red-icon">
                            <span className="icon">
                                <i className="fa fa-pencil red-pencil" aria-hidden="true"></i>
                            </span>
                            <p>
                                <strong>Diploma in Computer</strong> - RGCSM , 2013 - 2014
                        </p>
                        </div>
                        <div className="body">
                            <span>
                                Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                        </div>
                    </div>

                    <div className="accordian">
                        <div className="head yellow-icon">
                            <span className="icon">
                                <i className="fa fa-pencil yellow-pencil" aria-hidden="true"></i>
                            </span>
                            <p>
                                <strong>Higher Secondry Education</strong> - M.p. Board Bhopal , 2012 - 2013
                        </p>
                        </div>
                        <div className="body">
                            <span>
                                Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                        </div>
                    </div>

                    <div className="accordian">
                        <div className="head purple-icon">
                            <span className="icon">
                                <i className="fa fa-pencil purple-pencil" aria-hidden="true"></i>
                            </span>
                            <p>
                                <strong>High School Degree</strong> - M.p. Board Bhopal , 2011 - 2014
                        </p>
                        </div>
                        <div className="body">
                            <span>
                                Successfully passed MBA’ on year 2015 - 2016 scoring CGPA 4.00 out of 4.00. The study fields were Cpmputer Architecture, Calculus, Physics Fundamental of Physics, Chemistry, Integral Mathematics. ABC University of los Angeles.
						</span>
                        </div>
                    </div>
                </EducationAccordian>
            </div >
        );
    }
}

export default EducationAccordianContent;