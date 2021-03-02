import React, { useState } from 'react'
import TextError from './TextError';
import {
    Field,
    ErrorMessage
}
    from "formik";
import { Dropdown } from 'primereact/dropdown';


function DropdownSelect(props) {
    const [selectedArray, setSelectedArray] = useState();

    const { label, name, array, filteryBy, ...rest } = props;


    const onArrayChange = (e) => {
        setSelectedArray(e.value);
        alert("")
        console.log("onArrayChange", e.value);
        console.log("onArrayChange1", selectedArray);
    }

    const selectedTemplate = (option, props) => {
        if (option) {
            return (
                <div className=" country-item country-item-value">
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {props.placeholder}
            </span>
        );
    }

    return (
        <div>
            {/* <Field as='select' id={name} name={name} {...rest} >
                {({ field, form }) => {
                    console.log("DropdownSelect" , selectedArray);
                    return (
                        < Dropdown value={selectedArray} options={array} onChange={onArrayChange} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                            valueTemplate={selectedTemplate} {...field}  {...props} className={form.errors[name] && form.touched[name] ? "p-invalid" : null} />
                    )
                }}
            </Field> */}

            < Dropdown value={selectedArray} options={array} onChange={onArrayChange} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                valueTemplate={selectedTemplate} {...props} />
            {/* <ErrorMessage name={name} component={TextError} /> */}
        </div>
    )
}

export default DropdownSelect
