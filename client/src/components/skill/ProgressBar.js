import React, { Component } from 'react';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: this.props.percent
        };
    }

    render() {
        var progress = {
            width: this.state.progress + "%"
        }

        return (
            <div className="progress-container">
                <div className="progress-bar" style={progress}>
                    <span>{this.state.progress + "%"}</span>
                </div>
            </div>
        )
    }
}

export default ProgressBar;