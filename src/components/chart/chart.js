import React, { useEffect, useState, useRef} from 'react';
import Chart from "chart.js";
import {chartTypes} from "../../data/chart-types";
import SelectChart from "../select/select-chart";
import {defaultOption} from "./options";
import {lineChart} from "./data";

export const ChartElement = ({type, labels, datasets, options}) => {
    const chartEl = useRef(null);
    const [chart, setChart] = useState({});
    useEffect(() => {
        if(chart && chart.destroy) chart.destroy();
        const chartObj = new Chart(chartEl.current.getContext("2d"), {
            type,
            data: { labels, datasets },
            options
        });
        setChart(chartObj);
    }, [chartEl, type, labels, datasets, options]);
    return <canvas ref={chartEl} />;
};

const ChartContainer = () => {
    const [type, setType] = useState(lineChart.type);
    const [datasets, setDatasets] = useState(lineChart.datasets);
    const [options, setOptions] = useState(defaultOption);
    const [labels, setLabels] = useState(lineChart.labels);
    const onChartTypeChange = key => {
        setType(key);
        const selectedOption = chartTypes.find(type => type.key === key)
        setDatasets(selectedOption.datasets);
        setLabels(selectedOption.labels);
    };
    return (
        <>
            <SelectChart options={chartTypes} onSelectChange={onChartTypeChange} defaultValue={type}/>
            <ChartElement type={type} labels={labels} datasets={datasets} options={options}/>
        </>
    )
};
export default ChartContainer;