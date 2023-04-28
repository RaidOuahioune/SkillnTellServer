import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import "./EventCardStyles.css"
export function EventCard({ title, date, location, poster, description }) {
    return (
        <MDBCard className="event-card" style={{ borderRadius: '4rem' }}>
            <MDBRow className="g-0">
                <MDBCol className="poster-col" md="5">
                    <MDBCardImage src={poster} alt={title} className="event-poster" />
                </MDBCol>
                <MDBCol md="7">
                    <MDBCardBody>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex flex-row justify-content-between">
                            <p className="card-subtitle">{date}</p>
                            <p className="card-subtitle">{location}</p>
                        </div>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    );
}