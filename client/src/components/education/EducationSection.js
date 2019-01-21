import React, { Component } from 'react';
import EducationAccordianContent from './EducationAccordianContent';
import EducationTitleSection from './EducationTitleSection';

class EducationSection extends Component {
    render() {
        return (
            <div className="education-section">
                <EducationTitleSection />
                <EducationAccordianContent />
            </div>
        );
    }
}

export default EducationSection;