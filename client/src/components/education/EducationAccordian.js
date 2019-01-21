import React, { Component } from 'react';

class EducationAccordian extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.handleClick();
    }

    handleClick() {
        const acc = this.acc.children;
        for (let i = 0; i < acc.length; i++) {
            let a = acc[i];
            a.onclick = () => a.classList.toggle("active" + i);
        }
    }

    render() {
        return (
            <div
                ref={a => this.acc = a}
                onClick={this.handleClick}>
                {this.props.children}
            </div>
        )
    }
}

export default EducationAccordian;