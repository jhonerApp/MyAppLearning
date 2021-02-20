import React from 'react'

function Header() {
    return (
        <header className="main-header " id="header">
            <nav className="navbar navbar-static-top navbar-expand-lg">
                <button id="sidebar-toggler" className="sidebar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                </button>
                <div className="search-form d-none d-lg-inline-block">
                    <div className="input-group">

                    </div>
                </div>

                <div className="navbar-right ">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user-menu">
                            <button href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <img alt="" src="./assets/img/user/user.png" className="user-image" />
                                <span className="d-none d-lg-inline-block">Abdus Salam</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-header">
                                    <img alt="" src="./assets/img/user/user.png" className="img-circle" />
                                    <div className="d-inline-block">
                                        Abdus Salam <small className="pt-1">abdus@gmail.com</small>
                                    </div>
                                </li>

                                <li>
                                    <a href="profile.html">
                                        <i className="mdi mdi-account"></i> My Profile
                    </a>
                                </li>
                                <li>
                                    <a href="email-inbox.html">
                                        <i className="mdi mdi-email"></i> Message
                    </a>
                                </li>
                                <li>
                                    <a href="/"> <i className="mdi mdi-diamond-stone"></i> Projects </a>
                                </li>
                                <li>
                                    <a href="/"> <i className="mdi mdi-settings"></i> Account Setting </a>
                                </li>

                                <li className="dropdown-footer">
                                    <a href="signin.html"> <i className="mdi mdi-logout"></i> Log Out </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header
