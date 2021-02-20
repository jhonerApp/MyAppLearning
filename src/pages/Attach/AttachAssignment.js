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

export default function AttachAssignment() {
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


                        <div className="p-col-12">

                            <PanelControl header="ATTACH ASSIGNMENT" icon="assignmodule">
                                <div className="box">
                                    <br />
                                    <div className="p-grid  p-justify-end vertical-container">
                                    <Button type="button" label="FILE" icon="pi pi-folder-open" iconPos="right" className="p-button-sm p-button-help p-mr-2 p-mb-2" onClick={() => onClick('displayBasic')} />
                                        <Button type="button" label="LINK" icon="pi pi-link" iconPos="right" className="p-button-sm p-button-warning p-mb-2" />
                                        <DataTable value={customers} paginator pageLinkSize={2}
                                            rows={5}
                                        >

                                            <Column field="name" header="MODULE NAME" style={{ textAlign: 'center' }}></Column>
                                            <Column field="company" header="TYPE" style={{ textAlign: 'center' }}></Column>
                                            <Column field="status" header="STATUS" style={{ textAlign: 'center' }} body={statusBodyTemplate}></Column>
                                            <Column field="name" header="CLASS/SUBJECT" style={{ textAlign: 'center' }}></Column>
                                            <Column body={actionBodyTemplate} header="ACTION" style={{ textAlign: 'center' }}></Column>
                                        </DataTable>
                                    </div>

                                </div>
                            </PanelControl>


                            <Dialog header="ADD ASSIGNMENT" visible={displayBasic} style={{ width: '30vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                                <div className="p-grid p-fluid p-align-start">
                                    <div className="p-col-12 p-md-6 p-lg-12">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="ASSIGNMENT" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-grid p-fluid p-align-start">
                                    <div className="p-col-12 p-md-6 p-lg-12">
                                        <div className="p-inputgroup">
                                            <InputText placeholder="BROWSER FILE" />
                                            <Button icon="pi pi-folder-open" className="p-button-warning" />
                                        </div>
                                    </div>
                                </div>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

