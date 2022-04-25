import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    console.log(dataPointValues);
    return (
        <div className="chart">
            {props.datapoints.map(datapoint => (
                <ChartBar
                    key = {datapoint.label}
                    value = {datapoint.value}
                    maxValue = {totalMaximum}
                    label = {datapoint.label}>
                </ChartBar>
            )
            )}
        </div>
    );
}

export default Chart;