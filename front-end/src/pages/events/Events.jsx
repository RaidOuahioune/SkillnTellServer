import React, { createContext, useContext, useState } from "react";
import { EventCard } from "./EventsComponents/EventCard";
import { NavBar } from "../../Components/NavBar/navbar";
import "./EventsComponents/EventCardStyles.css";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FooterWave } from "../../Components/footer/footer";
import "../../Components/footer/footer.css";
import "./Events.css";
import { axiosClient } from "../../utilities/axiosClient";
import Modal from '@mui/material/Modal';
import { useEffect } from "react";
import EventModal from "./EventsComponents/EventModal";
import ModalContext from "../../contexts/ModalContext";
export const Events = () => {
    const [eventsList, setEventList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


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
                console.log("RESPONSE FROM ALL", res.data);
                setEventList(Object.values(res.data));
            })
            .catch((err) => {

            });
    }, []);

    return (
        <>
            <NavBar></NavBar>

            <Modal open={isModalOpen} onClose={closeModal} keepMounted>
                <ModalContext.Provider
                    value={{ closeModal, setEventList, eventsList, setSuccess, setError }}
                >
                    <EventModal style={style} />
                </ModalContext.Provider>
            </Modal>

            <div className="flex justify-center m-3 ">
                <button className="btn btn-sm jus" onClick={openModal}>
                    Add an Event
                </button>
            </div>
            <div className="flex justify-center m-3 ">
                {success && (
                    <p className="text-succes">{success}</p>
                )}
                {error && (
                    <p className="text-danger">{error}</p>
                )}
            </div>

            {eventsList.map((event) => (
                <MDBContainer>
                    <EventCard
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        poster={require("../../assets/Events/Arcade-2023-Cover.jpg")}
                        location={event.location}
                        description={event.description}
                    />
                </MDBContainer>
            ))}

            <div className="wave-event">
                <FooterWave pageName={"event"}></FooterWave>
            </div>
        </>
    );
};
