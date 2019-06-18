import React, {useState} from "react";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import './select.scss'

const SelectChart = ({options, onSelectChange, defaultValue}) => {
    const [selectedKey, setSelectedKey] = useState(defaultValue || '');
    const handleChange = event => {
        const selectedOptionKey = event.target.value;
        setSelectedKey(selectedOptionKey);
        onSelectChange(selectedOptionKey);
    };
    return (
        <FormControl>
            <InputLabel htmlFor="chart-type">Chart type</InputLabel>
            <Select value={selectedKey} onChange={handleChange} id="chart-type">
                {
                    (options || []).map(opt =>
                        <MenuItem value={opt['key']} key={opt['key']}>
                            <strong>{opt['value']}</strong><br/>
                            <div className="explanation">{opt['explanation']}</div>
                        </MenuItem>)
                }
            </Select>
        </FormControl>
    )
};

export default SelectChart;