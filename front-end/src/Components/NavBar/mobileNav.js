import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdb-react-ui-kit";
import { links } from "./links";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useUserContext } from "../../contexts/UserContextProvider";

export function NavMobile() {
    const [showNavExternal, setShowNavExternal] = useState(false);
    let { user, token } = useUserContext();
    const HandleClick = () => {
        setShowNavExternal(!showNavExternal);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <MDBNavbar
                id="nav"
                sticky={true}
                style={{ zIndex: "100 !important" }}
                className="h-20 mx-0 bg-white"
            >
                <MDBContainer fluid className="z-1">
                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="collapsed"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => HandleClick()}
                    >
                        <FontAwesomeIcon
                            icon={!showNavExternal ? faBars : faX}
                        ></FontAwesomeIcon>
                    </MDBNavbarToggler>
                </MDBContainer>
            </MDBNavbar>
            <MDBCollapse show={showNavExternal} navbar>
                <div className="flex flex-col">
                    {links.map((e) => {
                        if (e.label === "Chat") {
                            return (
                                <>
                                    {user && token && (
                                        <div
                                            className="flex bg-violet my-2 h-14 mx-3 rounded-full border-sec border-4 text-white justify-center align-center hover:bg-sec"
                                            to={e}
                                        >
                                            <Link
                                                className="mt-2 text-white hover:underline hover:text-black f"
                                                to={e.link}
                                            >
                                                <div>{e.label}</div>
                                            </Link>
                                        </div>
                                    )}
                                </>
                            );
                        } else {
                            return (
                                <div
                                    className="flex bg-violet my-2 h-14 mx-3 rounded-full border-sec border-4 text-white justify-center align-center hover:bg-sec"
                                    to={e}
                                >
                                    <Link
                                        className="mt-2 text-white hover:underline hover:text-black f"
                                        to={e.link}
                                    >
                                        <div>{e.label}</div>
                                    </Link>
                                </div>
                            );
                        }
                    })}
                </div>
            </MDBCollapse>
        </>
    );
}
