import React, { useState, useEffect } from 'react'



import { AttachmentItem } from "../../utils/navbar-item/AttachmentItem";
import { SettingItem } from "../../utils/navbar-item/SettingItem";

import { StudentItem } from "../../utils/navbar-item/StudentItem";
import { TeacherItem } from "../../utils/navbar-item/TeacherItem";

import { NavLink, Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [sidebar, setSidebar] = useState({
        onValueClick: false,
        onValueText: "",
    });

    const location = useLocation();
    const hoverParent = null;

    useEffect(() => {

        if (location.state === "Teacher") {

        }
        console.log("Location path", location.pathname);

    }, [sidebar])
    const showSidebar = (itemText) => {


        setSidebar({ onValueClick: !sidebar.onValueClick, onValueText: itemText });

        console.log(" STATE", sidebar.onValueText);

    };

    return (
        <React.Fragment>
            <aside className="left-sidebar bg-sidebar">
                <div id="sidebar" className="sidebar sidebar-with-footer">
                    <div className="app-brand">
                        <a href="/" title="Sleek Dashboard">
                            <img
                                alt=""
                                src="./assets/img/ssblue.jpg"
                                style={{ width: 30, height: 30 }}
                            />
                            {/* <svg className="brand-icon" xmlns="" preserveAspectRatio="xMidYMid" width="30" height="33" viewBox="0 0 30 33"><g fill="none" fill-rule="evenodd"><path className="logo-fill-blue" fill="#7DBCFF" d="M0 4v25l8 4V0zM22 4v25l8 4V0z"/><path className="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z"/></g></svg> */}
                            <span className="brand-name text-truncate">SHULEPRO V1</span>
                        </a>
                    </div>
                    <div className="sidebar-scrollbar">

                        <ul className="nav sidebar-inner" id="sidebar-menu">

                            <li
                                className={
                                    location.state === "STUDENT"
                                        ? "has-sub active expand"
                                        : "has-sub"
                                }
                            >
                                <a
                                    className="sidenav-item-link"
                                    href="/"
                                    data-toggle="collapse"
                                    data-target="#student"
                                    aria-expanded="false"
                                    aria-controls="student"
                                >
                                    <i className="mdi  mdi-account"></i>
                                    <span className="nav-text">STUDENT</span>{" "}
                                    <b className="caret"></b>
                                </a>

                                <ul
                                    className={
                                        location.state === "STUDENT"
                                            ? "collapse show"
                                            : "collapse"
                                    }
                                    id="student"
                                    data-parent="#sidebar-menu"
                                >
                                    <div className="sub-menu">
                                        {StudentItem.map((item, index) => {
                                            return (
                                                <li key={index} className={location.pathname === item.path
                                                    ? "active"
                                                    : ""}>
                                                    <Link to={{
                                                        pathname: item.path,
                                                        state: "STUDENT"
                                                    }}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </ul>
                            </li>

                            <li
                                className={
                                    location.state === "TEACHER"
                                        ? "has-sub active expand"
                                        : "has-sub"
                                }
                            >
                                <a
                                    className="sidenav-item-link"
                                    href="/"
                                    data-toggle="collapse"
                                    data-target="#teacher"
                                    aria-expanded="false"
                                    aria-controls="teacher"
                                >
                                    <i className="mdi  mdi-account-multiple"></i>
                                    <span className="nav-text">TEACHER</span>{" "}
                                    <b className="caret"></b>
                                </a>
                                <ul
                                    className={
                                        location.state === "TEACHER"
                                            ? "collapse show"
                                            : "collapse"
                                    }
                                    id="teacher"
                                    data-parent="#sidebar-menu"
                                >
                                    <div className="sub-menu">
                                        {TeacherItem.map((item, index) => {
                                            return (
                                                <li key={index} className={location.pathname === item.path
                                                    ? "active"
                                                    : ""}>
                                                    <Link to={{
                                                        pathname: item.path,
                                                        state: "TEACHER"
                                                    }}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </ul>
                            </li>

                            <li
                                className={
                                    location.state === "ATTACHMENT"
                                        ? "has-sub active expand"
                                        : "has-sub"
                                }
                            >
                                <a
                                    className="sidenav-item-link"
                                    href="/"
                                    data-toggle="collapse"
                                    data-target="#attachment"
                                    aria-expanded="false"
                                    aria-controls="attachment"
                                >
                                    <i className="mdi  mdi-attachment"></i>
                                    <span className="nav-text">ATTACHMENT</span>{" "}
                                    <b className="caret"></b>
                                </a>
                                <ul
                                    className={
                                        location.state === "ATTACHMENT"
                                            ? "collapse show"
                                            : "collapse"
                                    }
                                    id="attachment"
                                    data-parent="#sidebar-menu"
                                >
                                    <div className="sub-menu">
                                        {AttachmentItem.map((item, index) => {
                                            return (
                                                <li key={index} className={location.pathname === item.path
                                                    ? "active"
                                                    : ""}>
                                                    <Link to={{
                                                        pathname: item.path,
                                                        state: "ATTACHMENT"
                                                    }}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </ul>
                            </li>

                            <li
                                className={
                                    location.state === "SETTING"
                                        ? "has-sub active expand"
                                        : "has-sub"
                                }
                            >
                                <a
                                    className="sidenav-item-link"
                                    href="/"
                                    data-toggle="collapse"
                                    data-target="#setting"
                                    aria-expanded="false"
                                    aria-controls="setting"
                                >
                                    <i className="mdi  mdi-settings"></i>
                                    <span className="nav-text">SETTING</span>{" "}
                                    <b className="caret"></b>
                                </a>
                                <ul
                                    className={
                                        location.state === "SETTING"
                                            ? "collapse show"
                                            : "collapse"
                                    }
                                    id="setting"
                                    data-parent="#sidebar-menu"
                                >
                                    <div className="sub-menu">
                                        {SettingItem.map((item, index) => {
                                            return (
                                                <li key={index} className={location.pathname === item.path
                                                    ? "active"
                                                    : ""}>
                                                    <Link to={{
                                                        pathname: item.path,
                                                        state: "SETTING"
                                                    }}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <hr className="separator" />
                    <div className="sidebar-footer">
                        <div className="sidebar-footer-content">
                            <h6 className="text-uppercase">
                                Cpu Uses <span className="float-right">40%</span>
                            </h6>
                            <div className="progress progress-xs">
                                <div
                                    className="progress-bar active"
                                    style={{ width: 40 }}
                                    role="progressbar"
                                ></div>
                            </div>
                            <h6 className="text-uppercase">
                                Memory Uses <span className="float-right">65%</span>
                            </h6>
                            <div className="progress progress-xs">
                                <div
                                    className="progress-bar progress-bar-warning"
                                    style={{ width: 60 }}
                                    role="progressbar"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}

export default Navbar
