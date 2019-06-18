import React, { useEffect, useState, useRef} from 'react';
import Chart from "chart.js";
import {chartTypes} from "../../data/chart-types";

export const ChartElement = ({type, labels, datasets, options}) => {
    const chartEl = useRef(null);
    useEffect(() => {
        new Chart(chartEl.current.getContext("2d"), {
            type,
            data: { labels, datasets },
            options
        });
    }, [chartEl, type, labels, datasets, options]);
    return <canvas ref={chartEl} />;
};

const ChartContainer = () => {
    const datasets = [
        {
            label: "Sales",
            data: [86, 67, 91],
        }
    ];
    const [type, setType] = useState('line');
    const [options, setOptions] = useState({});
    const [labels, setLabels] = useState(["Jan", "Feb", "March"]);
    const onChartTypeChange = event => {
        setType(event.target.value);
    };
    return (
        <>
            <SelectChart options={chartTypes} onSelectChange={onChartTypeChange}/>
            <ChartElement type={type} labels={labels} datasets={datasets} options={options}/>
        </>
    )
};
const SelectChart = ({options, onSelectChange}) => {
    return (
        <select onChange={onSelectChange}>
            {
                (options || []).map(opt =>
                    <option value={opt['key']} key={opt['key']}>{opt['value']}</option>)
            }
        </select>
    )
};
export default ChartContainer;