import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AboutPersonalDetails extends Component {
    render() {
        return (
            <Router>
                <div className="personal-details-area">
                    <div className="row">
                        <div className="col">
                            <div className="personal-details-left">
                                <ul className="service-list ul-li">
                                    <li className="logodesign">
                                        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                                        <span className="service-name">logo design</span>
                                        <Link to="/" className="more"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </li>
                                    <li className="website">
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                        <span className="service-name">website</span>
                                        <Link to="/" className="more"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </li>
                                    <li className="softwares">
                                        <i className="fa fa-desktop" aria-hidden="true"></i>
                                        <span className="service-name">softwares</span>
                                        <Link to="/" className="more"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </li>
                                    <li className="applications">
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                        <span className="service-name">applications</span>
                                        <Link to="/" className="more"><i className="fa fa-plus" aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col">
                            <div className="personal-details-right">
                                <h2 className="title">personal details</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="td-w25">Full Name</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">Akshay Handge</td>
                                        </tr>
                                        <tr>
                                            <td className="td-w25">Father's Name</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">Mr. Deepak Handge</td>
                                        </tr>
                                        <tr>
                                            <td className="td-w25">Address</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">Street 110-B Kalani Bag, Dewas, M.P. INDIA</td>
                                        </tr>
                                        <tr>
                                            <td className="td-w25">Zip Code</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">12345</td>
                                        </tr>
                                        <tr>
                                            <td className="td-w25">Phone</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">+0 123456789 , +0 123456789</td>
                                        </tr>
                                        <tr>
                                            <td className="td-w25">Email</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">support@example.com</td>
                                        </tr>
                                        <tr>
                                            <td className="td-w25">Website</td>
                                            <td className="td-w10">:</td>
                                            <td className="td-w65">http://example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default AboutPersonalDetails;