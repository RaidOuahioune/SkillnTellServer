import React, { useState } from "react";
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

import AddEventModal from "./EventsComponents/addEvent";
export const Events = () => {
    const [eventsList, setEventList] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    // Rest of the code...

    // Function to handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        axiosClient
            .get("/events")
            .then((res) => {
                console.log(res.data);
                setEventList(Object.values(res.data));
            })
            .catch((err) => {

            });
    }, []);

    return (
        <>
            <NavBar></NavBar>
            {isModalOpen && <AddEventModal closeModal={closeModal} />}

            <div className="flex justify-center m-3">
                <button className="btn jus" onClick={openModal}>
                    Add an Event
                </button>
            </div>
            {eventsList.map((event) => (
                <MDBContainer>
                    <EventCard
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        poster={require("../../assets/Events/Arcade-2023-Cover.jpg")}
                        description={event.description}
                    />
                </MDBContainer>
            ))}

            <div className="wave-event"></div>
            <FooterWave pageName={"event"}></FooterWave>
        </>
    );
};
