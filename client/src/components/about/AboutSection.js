import React, { Component } from 'react';
import AboutTitle from './AboutTitle';
import AboutPersonalDetails from './AboutPersonalDetails';
import AboutSuccess from './AboutSuccess';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section">
                <AboutTitle />
                <AboutPersonalDetails />
                <AboutSuccess />
            </div>
        );
    }
}

export default AboutSection;