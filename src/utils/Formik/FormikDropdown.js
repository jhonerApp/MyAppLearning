import React, { useState, useEffect, useRef, Fragment } from 'react'
import TextError from './TextError';
import {
    Field,
    ErrorMessage,

}
from "formik";
import { Dropdown } from 'primereact/dropdown';


function DropdownSelect(props) {
    const [selectedArray, setSelectedArray] = useState();
    const { label, name, array, filteryBy, ...rest } = props;

    const onArrayChange = (e, setFieldValue) => {
        setFieldValue('selectSection', e.value.name);
        setSelectedArray(e.value);

    }


    const selectedTemplate = (option, props) => {
        if (option) {
            return (
                <div className=" country-item country-item-value">
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


    return (
        <div>

            <Field as='select' name={name} value={selectedArray}>
                {({ field, form: { setFieldValue } }) => {
                    return (
                        <Dropdown id={name} value={selectedArray} options={array} onChange={(e) => onArrayChange(e, setFieldValue)} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                            valueTemplate={selectedTemplate}{...props} />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DropdownSelect
