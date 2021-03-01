import React, { useState, useEffect } from 'react';

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
import { Dropdown } from 'primereact/dropdown';

import axios from "axios";

import ThemeButton from '../../utils/control/ThemeButton'
import IconThemeButton from '../../utils/control/IconThemeButton'
import IconSearchButton from '../../utils/control/IconSearchButton'



export default function AssignTeacherSection() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [customers, setCustomers] = useState([]);

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

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
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
                        <div className="p-col-12 p-md-6 p-md-6">
                            <PanelControl header="TEACHER LIST" icon="teacherListIcon">
                                <div className="p-grid p-fluid p-align-center">
                                    <div className="p-col-12 p-md-6 p-md-2">
                                        <Dropdown clas value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select section"
                                            valueTemplate={selectedCountryTemplate} />
                                    </div>
                                    <div className="p-col-12 p-md-6 p-md-6">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Search by" />
                                            <IconSearchButton icon="searchIcon" theme="primary" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="box">
                                    <br />
                                    <div className="p-grid  p-justify-end vertical-container">
                                        <DataTable value={customers} paginator pageLinkSize={2}
                                            rows={5}
                                        >
                                            <Column selectionMode="multiple" style={{ width: '3em' }} />
                                            <Column field="id" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                            <Column field="title" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                            <Column body={actionBodyTemplate} header="ACTION" style={{ textAlign: 'center' }}></Column>
                                        </DataTable>
                                        <br />


                                    </div>
                                    <div className="p-grid p-fluid p-justify-end">
                                        <div className="p-col-offset-12, p-col-offset-6 ">
                                            <ThemeButton type="submit" theme="primary" icon="assignIcon" text="Assign" size="medium" />
                                        </div>

                                    </div>
                                </div>
                            </PanelControl>
                        </div>
                        <div className="p-col-12 p-md-6 p-md-6">
                            <PanelControl header="SECTION LIST" icon="subjectIcon">
                                <div className="p-grid p-fluid  p-justify-end">
                                    <div className="p-col-12 p-md-6 p-md-6">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Search by" />
                                            <IconSearchButton icon="searchIcon" theme="primary" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="card">
                                    <DataTable value={customers} paginator pageLinkSize={2}
                                        rows={5}
                                    >
                                        <Column selectionMode="multiple" style={{ width: '3em' }} />
                                        <Column field="title" header="TITLE"></Column>
                                        <Column body={actionBodyTemplate}></Column>
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

