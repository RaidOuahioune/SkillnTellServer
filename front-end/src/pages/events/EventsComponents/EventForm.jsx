import logoOnly from "../../assets/sntLogoOnly.png";
import React, { useRef, useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCol,
    MDBInput,
    MDBCard,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "./login.css";
import { NavBar } from "../../Components/NavBar/navbar";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utilities/axiosClient";
import { useUserContext } from "../../contexts/UserContextProvider";

export function Login() {
    let { setUser, setToken } = useUserContext();
    let [error, setError] = useState(null);
    const navigate = useNavigate();

    const goToEvents = () => {
        navigate("/events");
    };


    // REFERENCES
    let titleRef = useRef();
    let descRef = useRef();
    let tagsRef = useRef();
    let dateRef = useRef();
    let locationRef = useRef();




    let handleSubmit = (e) => {
        e.preventDefault();
        let payload = {
            email: emailRef.current.value,
            password: passRef.current.value,
        };

        axiosClient
            .post("/event/add", payload)
            .then((res) => {
                setToken(res.data.token);
                setUser(res.data.user);
                navigate("/events");
            })
            .catch((err) => {
                setError("Error While Adding Event !");
            });
    };



    return (
        <div className="no-scroll">
            <NavBar></NavBar>
            <form onSubmit={handleSubmit}>
                <MDBContainer className="mt-5 gradient-form" fluid>
                    <MDBCard className="my-5" style={{ borderRadius: "4rem" }}>
                        <div className="flex flex-col md:flex-row">
                            <MDBCol col="6" className="mb-5">
                                <div className="d-flex flex-column ms-5 px-4">
                                    <div className="text-center centeredLogo mt-5">
                                        <img
                                            src={logoOnly}
                                            style={{
                                                width: "auto",
                                                height: "100px",
                                            }}
                                            alt={logoOnly}
                                        />
                                    </div>

                                    {error && (
                                        <p className="text-danger">{error}</p>
                                    )}

                                    <MDBInput
                                        className="mb-1"
                                        label="Enter The Event's Title"
                                        id="typeText"
                                        type="text"
                                        wrapperClass="mb-4"
                                        ref={titleRef}
                                    />

                                    <MDBInput
                                        className="mb-1"
                                        label="Tags"
                                        id="typeText"
                                        type="text"
                                        wrapperClass="mb-4"
                                        ref={tagsRef}
                                    />


                                    <MDBInput
                                        className="mb-1"
                                        label="Description"
                                        id="typeText"
                                        type="date"
                                        ref={dateRef}
                                        wrapperClass="mb-4"
                                    />


                                    <div className="text-center pt-1 mb-5 pb-1 flex-column">
                                        <MDBBtn className=" gradient-custom-2 mb-3">
                                            Sign in
                                        </MDBBtn>
                                        <div>
                                            <a
                                                id="forget"
                                                className="text-muted"
                                                href="#!"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                        <p className="mb-0">
                                            Don't have an account?
                                        </p>
                                        <button
                                            className="btn"
                                            onClick={goToRegister}
                                        >
                                            Create an account
                                        </button>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol col="6" className="w-100">
                                <div className="d-flex flex-column  rounded-full justify-content-center gradient-custom-2 h-100 mb-4">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                                        <h4 className="mb-4 mx-2">
                                            We are more than just a Community
                                        </h4>
                                        <p className="small mb-0 mx-2">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </MDBCard>
                </MDBContainer>
            </form>
        </div>
    );
}
