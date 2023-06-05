import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";
import "./EventCardStyles.css";
import { useUserContext } from "../../../contexts/UserContextProvider";
import { axiosClient } from "../../../utilities/axiosClient";


export function EventCard({ title, date, location, poster, description, id, setEventList }) {

    const { user } = useUserContext();
    return (
        <MDBCard className="event-card" style={{ borderRadius: "4rem" }}>
            <MDBRow className="g-0">
                <MDBCol className="poster-col" md="5">
                    {
                        user.is_admin &&
                        <MDBBtn className="close-btn" onClick={
                            () => {
                                console.log("DELETE CLICKED");
                                axiosClient.delete(
                                    `events/delete/${id}`
                                ).then(res => {
                                    console.log("EVENT DELETED SUCCCSSS");
                                    setEventList(
                                        prev => prev.filter(ev => ev.id != id)
                                    )
                                }).catch(err => {
                                    console.log(err);
                                })
                            }
                        } >Delete</MDBBtn>
                    }
                    <MDBCardImage
                        src={poster}
                        alt={title}
                        className="event-poster"
                    />
                </MDBCol>
                <MDBCol md="7">
                    <MDBCardBody>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex flex-row justify-content-between" style={{ alignSelf: "flex-end" }}>
                            <p className="card-subtitle">{date}</p>
                            <p className="card-subtitle">{location}</p>
                        </div>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    );
}
