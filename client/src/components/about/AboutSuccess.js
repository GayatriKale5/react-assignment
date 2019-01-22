import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AboutSuccess extends Component {
    render() {
        return (
            <Router>
                <div className="success">
                    <div className="success-child-left">
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                        <p>
                            Over Ten Year In The Game With 550+ Projects Successfuly Done!
                    </p>
                    </div>
                    <div className="success-child-right">
                        <Link to="/" className="hire-me">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i> hire me
                        </Link>
                    </div>
                </div>
            </Router>
        );
    }
}

export default AboutSuccess;