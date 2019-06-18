import {ChartElement} from "../chart/chart";
import React from "react";
import {footerData} from "./data";
import './footer.scss'

const Footer = () => {
    const {type, labels, datasets, options} = footerData;
    return (
        <div className="footer">
            <div className="footer__chart-container">
                <ChartElement type={type} labels={labels} datasets={datasets} options={options}/>
            </div>
        </div>
    )
}

export default Footer