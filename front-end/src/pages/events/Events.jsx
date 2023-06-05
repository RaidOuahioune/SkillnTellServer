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
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import EventModal from "./EventsComponents/EventModal";
import ModalContext from "../../contexts/ModalContext";
import HashLoader from "react-spinners/ClipLoader";
import { useUserContext } from "../../contexts/UserContextProvider";
export const Events = () => {
    const { user } = useUserContext();

    const [eventsList, setEventList] = useState([]);
    const [monitor_id, setMonitor_id] = useState([]);
    const [responsible_id, setResponsible_id] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [noEvents, setNoEvents] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
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
        if (eventsList.length === 0) {
            setNoEvents(true);
        } else {
            setNoEvents(false);
        }
        setSuccess("");
        setError("");
    }, [eventsList]);

    useEffect(() => {
        // FETCHING EVENTS
        axiosClient
            .get("/events")
            .then((res) => {
                console.log("RESPONSE FROM ALL", res.data);
                setLoading(false);
                setEventList(Object.values(res.data));
                if (eventsList.length === 0) {
                    setNoEvents(true);
                }
            })
            .catch((err) => {});
        // FETCHING ADMINS (MONITORS)
        axiosClient
            .get("/events/users/admins")
            .then((res) => {
                console.log("MONITORS RESPONSEEEEEEEE: ", res.data);
                setMonitor_id(res.data);
            })
            .catch((err) => {});
        // FETCHING RESPONSIBLE ID

        axiosClient
            .get("events/users")
            .then((res) => {
                console.log("RESPONSIBLEEEEEEEEEESSSSSSSS", res.data);
                setResponsible_id(res.data);
            })
            .catch((err) => {});
    }, []);

    return (
        <>
            <NavBar></NavBar>

            <Modal open={isModalOpen} onClose={closeModal} keepMounted>
                <ModalContext.Provider
                    value={{
                        closeModal,
                        setEventList,
                        eventsList,
                        setSuccess,
                        setError,
                        monitor_id,
                        responsible_id,
                    }}
                >
                    <EventModal style={style} />
                </ModalContext.Provider>
            </Modal>

            {!loading && user.is_admin && (
                <div className="flex justify-center m-3 ">
                    <button className="btn btn-sm jus" onClick={openModal}>
                        Add an Event
                    </button>
                </div>
            )}

            {noEvents && (
                <h1 className="text-center mt-5">No Events Available</h1>
            )}

            <div className="flex justify-center m-3 ">
                {success && <p className="text-succes">{success}</p>}
                {error && <p className="text-danger">{error}</p>}
            </div>

            {loading && (
                <div className="flex justify-center">
                    <HashLoader color="#240046"></HashLoader>.
                </div>
            )}
            {eventsList.map((event) => (
                <MDBContainer>
                    <EventCard
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        poster={"https://painstaking-agreement-production.up.railway.app"+event.event_path}
                        location={event.location}
                        description={event.description}
                        id={event.id}
                        setEventList={setEventList}
                    />
                </MDBContainer>
            ))}

            <div className="mb-10"></div>
        </>
    );
};
