import React, { useState, useEffect, useRef } from 'react';

import '../../pages/index.css'
import { Panel } from 'primereact/panel';
import * as RIIcons from "react-icons/ri";

import PanelControl from '../../utils/control/PanelControl'
import { InputText } from 'primereact/inputtext';

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';

import ThemeButton from '../../utils/control/ThemeButton'
import IconThemeButton from '../../utils/control/IconThemeButton'
import IconSearchButton from '../../utils/control/IconSearchButton'


import { Formik, Form, ErrorMessage, FormControl } from "formik"
import FormikInput from "../../utils/Formik/FormikInput";
import FormikDropdown from "../../utils/Formik/FormikDropdown";
import { Messages } from 'primereact/messages';

import * as Yup from "yup";



export default function RegisterStudent() {


    // const Validator = new Validation({
    //     login: [
    //         {
    //             rule: requiredRule,
    //             message: 'Please fill out the login'
    //         },
    //         {
    //             rule: lengthRule(5),
    //             message: 'Login should be at least 5 characters long'
    //         }
    //     ],
    //     password: [
    //         {
    //             rule: requiredRule,
    //             message: 'Please fill out the password'
    //         },
    //         {
    //             rule: lengthRule(8),
    //             message: 'Password should be at least 8 characters long'
    //         }
    //     ]
    // });

    // const [stateForm, setForm] = useState({
    //     login: '',
    //     password: ''
    // })

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setForm(Validator.validate({ ...name, [name]: value }));
    //     console.log(stateForm)
    // }

    // const errors = Validator.getErrors(stateForm);



    const msgs1 = useRef(null);
    useEffect(() => {
        // msgs1.current.show({
        //     severity: 'error', sticky: true, content: (
        //         <React.Fragment>
        //             <div className="p-grid">
        //                 <div className="p-col p-col-align-start">
        //                     <div className="box"><b>Please fill up the required filed!</b></div>
        //                 </div>
        //             </div>

        //         </React.Fragment>
        //     )

        // });
    }, [])
    const initialValues = {
        lastname: "",
        firstname: "",
        selectSection: ""
    };

    const validationSchema = Yup.object({
        lastname: Yup.string().required("Required!"),
        firstname: Yup.string().required("Required!"),
      selectSection: Yup.string().required("Required!"),
        // selectSection: Yup.object().shape({
        //     name: Yup.string().required("Is required"),
        //     code: Yup.string().required("Is required"),
        //   })

    })

    const [selectedCountry, setSelectedCountry] = useState(null);

    const [customers, setCustomers] = useState([]);

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
        console.log("selectedCountry", selectedCountry)
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


    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'I - SAMPAGUITA JOSE MARIE', code: 'US' }
    ];

    const onSubmit = (values) => {
        console.log("Submit", values);
        alert("Alert");
    }


    const selectedCountryTemplate = (option, props) => {
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

    const getCustomersLarge = () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setCustomers(res.data));
    }

    useEffect(() => {
        getCustomersLarge();
    }, [])


    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <IconThemeButton theme="danger" icon="deleteIcon" fontSize="medium" />
                <IconThemeButton theme="primary" icon="editIcon" size="medium" />
            </React.Fragment>
        );
    }

    return (

        <div>
            <div className="content-wrapper">
                <div className="content">

                    <div className="p-grid">
                        <div className="p-col-12">
                            <PanelControl header="REGISTER STUDENT" icon="studentIcon">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={onSubmit}
                                >
                                    {(formik) => (


                                        <Form>
                                            {/* <Messages ref={msgs1} /> */}
                                            {/* p-col-12 p-md-6 p-lg-4 */}

                                            <div className="p-fluid p-formgrid p-grid">
                                                <div className="p-field p-col-12 p-md-6  p-lg-4">
                                                    <FormikInput type="text" id="lastname" name="lastname" label="Lastname" />
                                                </div>
                                                <div className="p-field p-col-12 p-md-6  p-lg-4">
                                                    <FormikInput type="text" id="firstname" name="firstname" label="Firstname" />
                                                </div>
                                                <div className="p-field p-col-12 p-md-12  p-lg-4">
                                                    <FormikInput type="text" id="middlename" name="middlename" label="Middlename" />
                                                </div>
                                            </div>
                                            <div className="p-fluid p-formgrid p-grid">

                                                <div className="p-field p-col-12 p-md-6   p-lg-4">
                                                    <FormikInput type="text" id="email" name="email" label="email" />
                                                </div>
                                                <div className="p-field p-col-12 p-md-6 p-lg-4 ">
                                                    <FormikInput type="text" id="username" name="username" label="username" />
                                                </div>
                                                <div className="p-field p-col-12 p-md-12  p-lg-4">
                                                    {/* <FormikDropdown array={countries} name="selectSection" filteryBy="name" placeholder="Select section" value={selectedCountry} onChange={onCountryChange} valueTemplate={selectedTemplate} /> */}
                                                    <FormikDropdown array={countries} name="selectSection" filteryBy="name" placeholder="Select section" />
                                                    {/* <Dropdown id="selectSection" name="selectSection" value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select section"
                                                        valueTemplate={selectedCountryTemplate} /> */}
                                                </div>
                                            </div>
                                            <br />
                                            <div className="p-grid p-fluid p-justify-end">
                                                <div className="p-col-offset-12, p-col-offset-6  ">
                                                    <ThemeButton theme="danger" icon="exitIcon" text="DELETE" size="medium" />
                                                    <ThemeButton type="submit" theme="primary" icon="addIcon" text="SAVE" size="medium" />
                                                    <button type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                <hr />
                                <div className="p-grid p-fluid p-justify-end">
                                    <div className="p-col-12 p-md-6  p-lg-4">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Search by" />
                                            <IconSearchButton icon="searchIcon" theme="primary" />
                                        </div>
                                    </div>
                                </div>



                                <div className="card">
                                    <DataTable value={customers} paginator pageLinkSize={2}
                                        rows={10}
                                    >

                                        <Column field="id" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                        <Column field="title" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                        <Column field="body" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                        <Column body={actionBodyTemplate} header="ACTION" style={{ textAlign: 'center' }}></Column>
                                    </DataTable>
                                </div>


                            </PanelControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

