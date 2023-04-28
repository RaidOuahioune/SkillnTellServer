import { React } from "react";
import logoOnly from "../../assets/sntLogoOnly.png";

import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBValidationItem,
  MDBValidation,
} from "mdb-react-ui-kit";
import { fields } from "./select/feilds";
import { MySelect } from "./select/select";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "../login/login.css";
import { NavBar } from "../../Components/NavBar/navbar";

export function Register() {
  return (
    <div className="no-scroll">
      <NavBar></NavBar>
      <form>
        <MDBContainer className="my-5 gradient-form">
          <MDBCard className="my-5" style={{ borderRadius: "4rem" }}>
            <div className="flex flex-col md:flex-row">
              <MDBCol col="6" className="mb-5">
                <div className="d-flex flex-column ms-5 pr-10">
                  <div className="text-center centeredLogo mt-5">
                    <img
                      src={logoOnly}
                      style={{ width: "auto", height: "100px" }}
                      alt={logoOnly}
                    />
                  </div>

                  <p>Please Enter your information</p>

                  <MDBInput
                    className="mb-1"
                    label="Last Name"
                    id="typeText"
                    type="text"
                    wrapperClass="mb-4"
                  />

                  <MDBInput
                    className="mb-1"
                    label="Last Name"
                    id="typeText"
                    type="text"
                    wrapperClass="mb-4"
                  />
                  <MDBInput
                    className="mb-1"
                    label="Email"
                    id="typeText"
                    type="email"
                    wrapperClass="mb-4"
                  />
                  <MySelect options={fields}></MySelect>
                  <MDBInput
                    className="mb-1"
                    label="Password"
                    id="typeText"
                    type="password"
                    wrapperClass="mb-4 mt-4"
                  />
                  <MDBInput
                    className="mb-1"
                    label="Confirm Password"
                    id="typeText"
                    type="password"
                    wrapperClass="mb-4"
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
                </div>
              </MDBCol>

              <MDBCol col="6" className="w-100">
                <div className="d-flex flex-column  rounded-full justify-content-center gradient-custom-2 h-100 mb-4">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                    <h4 className="mb-4 mx-4">
                      We are more than just a Community
                    </h4>
                    <p className="mb-0 mx-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
