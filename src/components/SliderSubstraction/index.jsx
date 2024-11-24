import { useState } from "react";
import { Slider } from "antd";

const SliderSubstraction = ({ setPremiumSubstraction=199, disabled }) => {
    const [value, setValue] = useState();

    const handleChange = (val) => {
        setValue(val); 
        setPremiumSubstraction(val);
    };

    return (
        <>
            <Slider 
                defaultValue={199} 
                disabled={disabled} 
                value={value}
                onChange={handleChange}
                min={149}
                max={399}
                step={1}
                tooltip={{
                    open: true,
                    formatter: (value) => `${value} ₽`, 
                }}
            />
        </>
    );
};

export default SliderSubstraction;
