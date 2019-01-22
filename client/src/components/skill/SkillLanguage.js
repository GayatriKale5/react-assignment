import React, { Component } from 'react';
import PieChart from './PieChart';

class SkillLanguage extends Component {
    render() {
        return (
            <div className="languages-skills">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="lang-skill-left">
                            <h2 className="title mb-30">languages skills</h2>

                            <p className="mb-30">
                                Proin gravida nibh vel velit quet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit.
                            </p>

                            <a href="#" className="common-color">https://www.youtube.com</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                        <div className="lang-skill-right">
                            <div className="circle hindi-piechart">
                                <PieChart
                                    data={[100]}
                                    colors={['#2196f3']}
                                    size={120}
                                    lineWidth={9}
                                />
                                <strong>HINDI</strong>
                            </div>

                            <div className="circle english-piechart">
                                <PieChart
                                    data={[35, 12, 26, 12, 15]}
                                    colors={['#26A69A', '#0681C4', '#E5E5E5', '#0681C4', '#26A69A']}
                                    size={120}
                                    lineWidth={9}
                                />
                                <strong>ENGLISH</strong>
                            </div>

                            <div className="circle dutch-piechart">
                                <PieChart
                                    data={[15, 58, 12, 15]}
                                    colors={['#EF5350', '#E5E5E5', '#0681C4', '#EF5350']}
                                    size={120}
                                    lineWidth={9}
                                />
                                <strong>DUTCH</strong>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default SkillLanguage;