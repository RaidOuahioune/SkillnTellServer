import { React, useEffect, useRef, useState } from "react";
import logoOnly from "../../assets/sntLogoOnly.png";
import {
    MDBBtn,
    MDBContainer,
    MDBCol,
    MDBInput,
    MDBCard,
} from "mdb-react-ui-kit";
import { MySelect } from "./select/select";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "../login/login.css";
import { NavBar } from "../../Components/NavBar/navbar";
import { axiosClient } from "../../utilities/axiosClient";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
export function Register() {
    // states
    let [fields, setFeilds] = useState([]);
    let [branchState, setBranchState] = useState(null);
    let [genderState, genderSetState] = useState("M");
    let [error, setError] = useState(null);
    let usernameRef = useRef();
    let fnameRef = useRef();
    let lnameRef = useRef();
    let emailRef = useRef();
    let universityRef = useRef();
    let passREf = useRef();
    let ConfirmPassRef = useRef();
    let handleSubmit = (event) => {
        event.preventDefault();
        let payload = {
            username: usernameRef.current.value,
            first_name: fnameRef.current.value,
            last_name: lnameRef.current.value,
            email: emailRef.current.value,
            gender: genderState,
            university: universityRef.current.value,
            branch_id: branchState,
            password: passREf.current.value,
            password_confirmation: ConfirmPassRef.current.value,
        };
        //console.log(payload);
        if (payload.branch_id) {
            axiosClient
                .post("/AddAdmin", payload)
                .then((res) => {
                    setError(null);

                    setUser(res.data.user);
                    setToken(res.data.token);
                    navigate("/chat");
                })
                .catch((err) => {
                    if (err.response && err.response.data) {
                        setError(err.response.data.message);
                    } else {
                        setError("Something Wrong Happened");
                    }
                });
        } else {
            setError("Please Choose a Branch !");
        }
    };

    useEffect(() => {
        axiosClient
            .get("/branches")
            .then((res) => {
                setFeilds(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    //context stuff
    let { setUser, setToken } = useUserContext();

    // navigation stuf
    let navigate = useNavigate();

    return (
        <div className="">
            <NavBar></NavBar>
            <form onSubmit={handleSubmit}>
                <MDBContainer className="my-5 gradient-form">
                    <MDBCard className="my-5" style={{ borderRadius: "4rem" }}>
                        <div className="flex flex-col md:flex-row">
                            <MDBCol col="6" className="mb-5">
                                <div className="d-flex flex-column ms-5 pr-10">
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

                                    {!error ? (
                                        <p>Please Enter your information</p>
                                    ) : (
                                        <p className="text-danger">{error}</p>
                                    )}
                                    <MDBInput
                                        required
                                        className="mb-1"
                                        label="username"
                                        id="typeText"
                                        type="text"
                                        wrapperClass="mb-4"
                                        ref={usernameRef}
                                    />

                                    <MDBInput
                                        required
                                        className="mb-1"
                                        label="First Name"
                                        id="typeText"
                                        type="text"
                                        wrapperClass="mb-4"
                                        ref={fnameRef}
                                    />

                                    <MDBInput
                                        required
                                        className="mb-1"
                                        label="Last Name"
                                        id="typeText"
                                        type="text"
                                        wrapperClass="mb-4"
                                        ref={lnameRef}
                                    />
                                    <MDBInput
                                        required
                                        className="mb-1"
                                        label="Email"
                                        id="typeText"
                                        type="email"
                                        wrapperClass="mb-4"
                                        ref={emailRef}
                                    />
                                    <MySelect
                                        setState={genderSetState}
                                        options={{
                                            fields: [
                                                { label: "Male", value: "M" },
                                                { label: "Female", value: "F" },
                                            ],
                                        }}
                                        title="Gender"
                                    ></MySelect>
                                    <div className="m-1"></div>
                                    <MDBInput
                                        required
                                        label="University"
                                        id="typeText"
                                        type="text"
                                        wrapperClass="mb-4 mt-2"
                                        ref={universityRef}
                                    />
                                    <MySelect
                                        setState={setBranchState}
                                        options={{ fields }}
                                        title="Branch"
                                    ></MySelect>
                                    <MDBInput
                                        required
                                        className="mb-1"
                                        label="Password"
                                        id="typeText"
                                        type="password"
                                        wrapperClass="mb-4 mt-4"
                                        ref={passREf}
                                    />
                                    <MDBInput
                                        required
                                        className="mb-1"
                                        label="Confirm Password"
                                        id="typeText"
                                        type="password"
                                        wrapperClass="mb-4"
                                        ref={ConfirmPassRef}
                                    />

                                    <div className="text-center pt-1 mb-5 pb-1 flex-column">
                                        <MDBBtn
                                            className=" gradient-custom-2 mb-3"
                                            type="submit"
                                            name="submit"
                                        >
                                            Register
                                        </MDBBtn>
                                    </div>
                                    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                        <p className="mb-0 mx-4">
                                            Already have an account?
                                        </p>
                                        <button
                                            className="btn"
                                            onClick={() => navigate("/login")}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </MDBCol>

                            <MDBCol col="6" className="w-100">
                                <div className="d-flex flex-column  rounded-full justify-content-center gradient-custom-2 h-100 mb-4">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                                        <h4 className="mb-4 mx-4">
                                            We are more than just a Community
                                        </h4>
                                        <p className="mb-0 mx-4">
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
