import React from "react";
import {eventsList} from "./EventsComponents/eventsList";
import {EventCard} from "./EventsComponents/EventCard";
import {NavBar} from "../../Components/NavBar/navbar";
import "./EventsComponents/EventCardStyles.css"
import {
    MDBContainer,
}
    from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {FooterWave} from "../../Components/footer/footer";
import "../../Components/footer/footer.css"
import "./Events.css"

export const Events = () => {
    return (
        <>
            <NavBar></NavBar>
            {
                eventsList.map(
                    event => (
                        <MDBContainer>
                            <EventCard
                                key = {event.id}
                                title = {event.title}
                                date = {event.date}
                                poster = {event.poster}
                                description = {event.description}
                            />
                        </MDBContainer>
                        )
                )
            }
              
                <FooterWave pageName={"event"}></FooterWave>

          
            

        </>
    )
}