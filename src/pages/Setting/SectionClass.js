import React, { useState, useEffect } from 'react';

import '../../pages/index.css'
import { Panel } from 'primereact/panel';
import * as RIIcons from "react-icons/ri";

import PanelControl from '../../utils/control/PanelControl'
import { InputText } from 'primereact/inputtext';
import classNames from 'classnames';

import { Button } from 'primereact/button';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import { Dialog } from 'primereact/dialog';

export default function SectionClass() {
    const [customers, setCustomers] = useState([]);
    const getCustomersLarge = () => {
        return axios.get('/SampleDummydata/customer-large.json')
            .then(res => {
                setCustomers(res.data.data)
            }).catch((err) => {
                console.log(err)
            });

    }

    useEffect(() => {
        getCustomersLarge();
    }, [])


    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" />
            </React.Fragment>
        );
    }

    const [displayBasic, setDisplayBasic] = useState(false);
    const [position, setPosition] = useState('center');


    const dialogFuncMap = {
        'displayBasic': setDisplayBasic
    }
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="SAVE" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="content-wrapper">
                <div className="content">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6 p-md-6">

                            <PanelControl header="ADD SECTION" icon="sectionmodule">
                                <div className="p-grid p-fluid p-align-center">
                                    <div className="p-col-12 p-md-6 p-lg-10">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="SECTION" />
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6 p-lg-2">
                                        <Button label="ADD" className="p-button-sm p-button-success" icon="pi pi-save" iconPos="right" />
                                    </div>
                                </div>
                                <hr />
                                <div className="p-grid p-fluid p-justify-end">
                                    <div className="p-col-12 p-md-6  p-md-6">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Search by" />
                                            <Button icon="pi pi-search" className="p-button-warning" />
                                        </div>
                                    </div>
                                </div>



                                <div className="card">
                                    <DataTable value={customers} paginator pageLinkSize={2}
                                        rows={5}
                                    >

                                        <Column field="company" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                        <Column body={actionBodyTemplate} style={{ textAlign: 'center' }}></Column>
                                    </DataTable>
                                </div>
                            </PanelControl>
                        </div>
                        <div className="p-col-12 p-md-6 p-md-6">
                            <PanelControl header="ADD SUBJECT" icon="subjectIcon">
                                <div className="p-grid p-fluid p-align-center">
                                    <div className="p-col-12 p-md-6 p-lg-10">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="SUBJECT" />
                                        </div>
                                    </div>
                                    <div className="p-col-12 p-md-6 p-lg-2">
                                        <Button label="ADD" className="p-button-sm p-button-success" icon="pi pi-save" iconPos="right" />
                                    </div>
                                </div>
                                <hr />
                                <div className="p-grid p-fluid p-justify-end">
                                    <div className="p-col-12 p-md-6  p-md-6">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="Search by" />
                                            <Button icon="pi pi-search" className="p-button-warning" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card" >
                                    <DataTable value={customers} paginator pageLinkSize={2}
                                        rows={5}
                                    >
                                        <Column field="company" header="TITLE" style={{ textAlign: 'center' }}></Column>
                                        <Column body={actionBodyTemplate} style={{ textAlign: 'center' }}></Column>
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

