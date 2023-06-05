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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { MySelect } from "../../Register/select/select";

const EventModal = ({ style }) => {
    // Create the necessary state variables and functions to handle form inputs
    const {
        closeModal,
        setEventList,
        setSuccess,
        setError,
        monitor_id,
        responsible_id,
    } = useContext(ModalContext);

    const [monitorSelected, setMonitorSelected] = useState("");
    const [responsibleSelected, setResponsibleSelected] = useState("");

    let eventName = useRef();
    let eventDesc = useRef();
    let eventDate = useRef();
    let eventTags = useRef();
    let eventImage = useRef();
    let eventLocation = useRef();
    let eventImageAlt = useRef();

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        let payload = {
            title: eventName.current.value,
            description: eventDesc.current.value,
            tages: eventTags.current.value,
            date: eventDate.current.value,
            location: eventLocation.current.value,
            monitor_id: monitorSelected,
            responsible_id: responsibleSelected,
        };

        axiosClient
            .post("/events/add", payload)
            .then((res) => {
                setSuccess("Event Added Successfully");
                console.log(res.data);
                setEventList((prev) => {
                    return [res.data, ...prev];
                });
            })
            .catch((err) => {
                console.log(err.response.data.message);
                setError(err.response.data.message);
            });
        closeModal();
    };

    return (
        <div style={style}>
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
                        Monitor ID:
                        <div className="mt-1"></div>
                        <MySelect
                            options={{
                                fields: monitor_id.map((monitor) => {
                                    return {
                                        label: monitor.full_name,
                                        value: monitor.id,
                                    };
                                }),
                            }}
                            title="Montior ID"
                            setState={setMonitorSelected}
                        ></MySelect>
                        <div className="mt-4"></div>
                        Responsible ID:
                        <div className="mt-1"></div>
                        <MySelect
                            options={{
                                fields: responsible_id.map((responsible) => {
                                    return {
                                        label: responsible.full_name,
                                        value: responsible.id,
                                    };
                                }),
                            }}
                            title="Responsible ID"
                            setState={setResponsibleSelected}
                        ></MySelect>
                        <div className="mt-4"></div>
                        <MDBInput
                            className="mb-1"
                            label="Description"
                            id="typeText"
                            ref={eventDesc}
                            wrapperClass="mb-4"
                            required
                        />
                        <div className="text-center pt-1 mb-5 pb-1 flex-column">
                            <MDBBtn
                                className=" gradient-custom-2 mb-3"
                                type="submit"
                            >
                                Add Event
                            </MDBBtn>
                        </div>
                    </div>
                </MDBCard>
            </form>
        </div>
    );
};

export default EventModal;
