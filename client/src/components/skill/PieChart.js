import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function degsToRadians(degs) {
    return (degs / 360) * (2 * Math.PI)
}

class PieChart extends Component {

    static defaultProps = {
        colors: ['#042a2b', '#5eb1bf', '#ef7b45', '#d84727'],
        size: 250,
        lineWidth: 25
    };

    componentDidMount() {
        this.draw();
    }

    draw() {
        const canvas = ReactDOM.findDOMNode(this);
        const c = canvas.getContext('2d');
        const center = this.props.size / 2;
        const lineWidth = this.props.lineWidth;
        const radius = center - (lineWidth / 2);
        c.lineWidth = lineWidth;

        const dataTotal = this.props.data.reduce((r, dataPoint) => r + dataPoint, 0);
        let startAngle = degsToRadians(-90);
        let colorIndex = 0;
        this.props.data.forEach((dataPoint, i) => {
            const section = dataPoint / dataTotal * 360;
            const endAngle = startAngle + degsToRadians(section);
            const color = this.props.colors[colorIndex];
            colorIndex++;
            if (colorIndex >= this.props.colors.length) {
                colorIndex = 0;
            }
            c.strokeStyle = color;
            c.beginPath();
            c.arc(center, center, radius, startAngle, endAngle);
            c.stroke();
            startAngle = endAngle;
        });
    }

    render() {
        return (
            <canvas
                height={this.props.size}
                width={this.props.size}
            />
        );
    }
}

export default PieChart;