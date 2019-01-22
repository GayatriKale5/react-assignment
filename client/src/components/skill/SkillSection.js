import React, { Component } from 'react';
import SkillTitle from './SkillTitle';
import SkillProfessional from './SkillProfessional';
import SkillLanguage from './SkillLanguage';

class SkillSection extends Component {
    render() {
        return (
            <div className="skill-section">
                <SkillTitle />
                <SkillProfessional />
                <SkillLanguage />
            </div>
        );
    }
}

export default SkillSection;