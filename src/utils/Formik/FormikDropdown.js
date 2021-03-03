import React, { useState, useEffect, useRef, Fragment } from 'react'
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



    const onArrayChange = (e, { value }, setFieldValue) => {
        setFieldValue('selectSection', e.value);
        setSelectedArray(e.value);
        console.log("onArrayChange", e.value);

    }

 


    const selectedTemplate = (option, props) => {
        console.log("selectedTemplate props", props);
        console.log("selectedTemplate option", option);

        if (option) {
            return (
                <div className=" country-item country-item-value" >
                    <div >{option.name}</div>
                </div>
            )
        }


        return (
            <span>
                {props.placeholder}
            </span>
        );

     


    }
    const onArrayChange1 = (e, setFieldValue) => {
        setFieldValue('selectSection', e.value.name);
        setSelectedArray(e.value);

        console.log("onArrayChange", e.value);

    }

    return (
        <div>

            <Field as='select' name={name} value={selectedArray}>
                {({ field, form: { setFieldValue } }) => {


                    console.log("field", field);
                    // console.log("DropdownSelect", field.value.name);
                    return (
                        <Dropdown id={name} value={selectedArray} options={array} onChange={(e) => onArrayChange1(e, setFieldValue)} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                            valueTemplate={selectedTemplate}{...props} />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
         
        </div>
    )
}

export default DropdownSelect
