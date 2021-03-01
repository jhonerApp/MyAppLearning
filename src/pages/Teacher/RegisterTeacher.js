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
import axios from "axios";

import ThemeButton from '../../utils/control/ThemeButton'
import IconThemeButton from '../../utils/control/IconThemeButton'
import IconSearchButton from '../../utils/control/IconSearchButton'

export default function RegisterTeacher() {
    const [customers, setCustomers] = useState([]);
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
                            <PanelControl header="REGISTER TEACHER" icon="teachertIcon">
                                <div className="p-grid p-fluid p-align-center">
                                    <div className="p-col-12 p-md-6 p-lg-4">
                                        <label htmlFor="lastname">Lastname</label>
                                        <InputText id="lastname" type="text" />
                                    </div>
                                    <div className="p-col-12 p-md-6 p-lg-4">
                                        <label htmlFor="firstname6">Firstname</label>
                                        <InputText id="firstname6" type="text" />
                                    </div>
                                    <div className="p-col-12 p-md-6 p-lg-4">
                                        <label htmlFor="middlename">Middlename</label>
                                        <InputText id="middlename" type="text" />
                                    </div>
                                </div>
                                <div className="p-grid p-fluid p-align-center">
                                    <div className="p-col-12 p-md-6 p-lg-10">
                                        <label htmlFor="email">Email</label>
                                        <InputText id="email" type="text" />
                                    </div>
                                    <div className="p-col-12 p-md-6 p-lg-2">
                                        <label htmlFor="username">Username</label>
                                        <InputText id="username" type="text" />
                                    </div>

                                </div>
                                <br />
                                <div className="p-grid p-fluid p-justify-end">
                                    <div className="p-col-offset-12, p-col-offset-6  ">
                                        <ThemeButton type="submit" theme="danger" icon="exitIcon" text="DELETE" size="medium" />
                                        <ThemeButton type="submit" theme="primary" icon="addIcon" text="SAVE" size="medium" />
                                    </div>

                                </div>
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

