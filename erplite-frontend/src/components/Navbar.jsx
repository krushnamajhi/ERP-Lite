import React, { useState } from 'react';

function Navbar(props) {

    const [className, setClassName] = useState("nav-link")

    return (
<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/users">Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/item/itemlist">Items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/baseunit/baseunitlist">Unit</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;