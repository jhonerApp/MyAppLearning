import React, { useState } from 'react'
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


    const onArrayChange = (e) => {
        setSelectedArray(e.value);
        console.log("onArrayChange", e.value);

    }

    const selectedTemplate = (option, props) => {
        if (option) {
            return (
                <div className=" country-item country-item-value">
                    <div >{option.name}</div>
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
            <Field as='select' id={name} name={name}  {...rest} >
                {/* {({ field, form }) => {
                    console.log("DropdownSelect", form);
                    // console.log("DropdownSelect1", field.value.name);
                    return (
                        <select value={field.value} >
                            {
                                array.map(option => {
                                    return (
                                        <option key={option.name} value={option.name}>
                                            {option.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        < Dropdown value={field.value}  onChange={option => form.value.selectSection(field.name, option)}  options={array} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                            valueTemplate={selectedTemplate} {...props} {...field} className={form.errors[name] && form.touched[name] ? "p-invalid" : null} />
                    )
                }} */}
                {({ field, form }) => {
                    // const s = {...field, { value: '1' }};
                    console.log("selectedArray", field.value.name);
                    console.log("field A", field);

                    // field = ({ ...form }, {
                    //     onBlur: false,
                    //     value: '1',
                    //     name: 'selectSection'
                    // }
                    // )


                    console.log("field", field);
                    return (

                        <Dropdown options={array}
                            optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                            valueTemplate={selectedTemplate}     {...props} {...field} />
                    )
                }}

                {
                    // array.map(option => {
                    //     return (
                    //         <option key={option.name} value={option}>
                    //             {option.name}
                    //         </option>F
                    //     )
                    // })
                    // < Dropdown value={setSelectedArray} onChange={onArrayChange} options={array} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                    //     valueTemplate={selectedTemplate} {...props} />
                }

                {/* < Dropdown value={field.value} onChange={option => form.value.selectSection(field.name, option)} options={array} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                              valueTemplate={selectedTemplate} {...props} {...field} className={form.errors[name] && form.touched[name] ? "p-invalid" : null} />
                        
                } */}
            </Field>
            {/* 
            < Dropdown value={selectedArray} options={array} onChange={onArrayChange} optionLabel={filteryBy} filter showClear filterBy={filteryBy}
                valueTemplate={selectedTemplate} {...props} /> */}
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DropdownSelect
