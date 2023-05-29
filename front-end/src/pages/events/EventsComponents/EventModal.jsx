import React, { useRef, useState, useContext, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import logoOnly from "../../../assets/sntLogoOnly.png";
import ModalContext from "../../../contexts/ModalContext";
import { axiosClient } from "../../../utilities/axiosClient";

const EventModal = ({ style }) => {
  // Create the necessary state variables and functions to handle form inputs
  const { closeModal, setEventList, setSuccess, setError } = useContext(ModalContext);


  let eventName = useRef();
  let eventDesc = useRef();
  let eventDate = useRef();
  let eventTags = useRef();
  let eventImage = useRef();
  let eventLocation = useRef();
  let eventImageAlt = useRef();
  let eventMonitorId = useRef();
  let eventResponsibleId = useRef();

  /* useEffect(() => {
    axiosClient.get("/all").then(
      (res) => {
        console.log(res);
      }
    )
  }, []) */


  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();



    let payload = {
      title: eventName.current.value,
      description: eventDesc.current.value,
      tags: eventTags.current.value,
      date: eventDate.current.value,
      location: eventLocation.current.value,
      monitor_id: eventMonitorId.current.value,
      responsible_id: eventResponsibleId.current.value
    }

    setEventList(prev => {
      return [
        ...prev,
        payload
      ]
    })

    axiosClient.post("/events/add", payload).then(
      res => {
        setSuccess(res.message);
      }
    ).catch(
      err => {
        setError("Failed Adding Event");
      }
    )

    // Add logic to handle the form submission and add the event
    // Close the modal after successful submission
    closeModal();
  };

  return (
    <div
      style={style}
    >
      <form onSubmit={handleSubmit}>
        <MDBCard className="my-5" style={{ borderRadius: "4rem" }}>
          <div className="d-flex flex-column px-4">
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
            <div className="text-center">

              <h1>Add An Event</h1>
            </div>


            <MDBInput
              className="mb-1"
              label="Event Title"
              id="typeText"
              type="text"
              wrapperClass="mb-4"
              ref={eventName}
              required
            />

            <MDBInput
              className="mb-1"
              label="Date"
              id="typeText"
              type="date"
              ref={eventDate}
              wrapperClass="mb-4"
              required

            />
            <MDBInput
              className="mb-1"
              label="Tags (Seperate By Comma)"
              id="typeText"
              type="text"
              ref={eventTags}
              wrapperClass="mb-4"
              required

            />

            <MDBInput
              className="mb-1"
              label="Location"
              id="typeText"
              type="text"
              ref={eventLocation}
              wrapperClass="mb-4"
              required

            />

            <MDBFile
              label="Event Poster"
              id="event-image"
              ref={eventImage}
              className="mb-4"
            />

            <MDBInput
              className="mb-1"
              label="ALT for image"
              id="typeText"
              type="text"
              ref={eventImageAlt}
              wrapperClass="mb-4"
              required

            />

            <MDBInput
              className="mb-1"
              label="Monitor ID"
              id="typeText"
              type="text"
              ref={eventMonitorId}
              wrapperClass="mb-4"
            />

            <MDBInput
              className="mb-1"
              label="Responsible ID"
              id="typeText"
              type="text"
              ref={eventResponsibleId}
              wrapperClass="mb-4"

            />

            <MDBInput
              className="mb-1"
              label="Description"
              id="typeText"
              ref={eventDesc}
              wrapperClass="mb-4"
              required
            />


            <div className="text-center pt-1 mb-5 pb-1 flex-column">

              <MDBBtn className=" gradient-custom-2 mb-3" type="submit">
                Add Event
              </MDBBtn>

            </div>
            {/* 
                <div className="text-center pt-1 mb-5 pb-1 flex-column">
                  <MDBBtn className=" gradient-custom-2 mb-3">
                    Add Event
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
                  // onClick={goToRegister}
                  >
                    Create an account
                  </button>
                </div>
              </div> */}
            {/* </MDBCol>

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
              </MDBCol> */}
          </div>

        </MDBCard>
        {/* </MDBContainer> */}

      </form>

    </div>
  );
};

export default EventModal;
