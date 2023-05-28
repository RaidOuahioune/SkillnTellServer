import React, { useState } from "react";
import { eventsList } from "./EventsComponents/eventsList";
import { EventCard } from "./EventsComponents/EventCard";
import { NavBar } from "../../Components/NavBar/navbar";
import "./EventsComponents/EventCardStyles.css";
import { MDBContainer } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FooterWave } from "../../Components/footer/footer";
import "../../Components/footer/footer.css";
import "./Events.css";
import { axiosClient } from "../../utilities/axiosClient";
import { useEffect } from "react";

export const Events = () => {
    const [eventsList, setEventList] = useState([]);
    useEffect(() => {
        axiosClient
            .get("/events")
            .then((res) => {
                setEventList(Object.values(res.data));
                // setReady(true);
            })
            .catch((err) => {
                // setReady(true);
                // setError("");
            });
    }, []);
    return (
        <>
            <NavBar></NavBar>

            <button className="btn">Add an Event</button>
            {eventsList.map((event) => (
                <MDBContainer>
                    <EventCard
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        poster={event.poster}
                        description={event.description}
                    />
                </MDBContainer>
            ))}

            <div className="wave-event"></div>
            <FooterWave pageName={"event"}></FooterWave>
        </>
    );
};
