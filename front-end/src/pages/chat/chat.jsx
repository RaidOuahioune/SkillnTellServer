import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HashLoader from "react-spinners/ClipLoader";
import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../../Components/NavBar/navbar";

import { messageBubble } from "./messageBubble";
import { axiosClient } from "../../utilities/axiosClient";
import { useUserContext } from "../../contexts/UserContextProvider";
import Pusher from "pusher-js";

function ChatPage() {
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    // dummy var to cause useEffect to be called each time this variable changes
    // this variable is used to do the scolling behaviour after new messages arrive

    const [dummy, setDummy] = useState(0);
    const buttonRef = useRef(null);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);
    useEffect(() => {
        // scrool to the bottom when there are new messages
        const scrollableDiv = scrollRef.current;
        scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    }, [dummy]);
    // to set up event listeners
    useEffect(() => {
        function handleKeyPress(event) {
            if (
                event.key === "Enter" &&
                inputRef.current === document.activeElement &&
                inputRef.current.value !== ""
            ) {
                buttonRef.current.click();
            }
        }
        axiosClient
            .get("/messages")
            .then((res) => {
                setMessages(Object.values(res.data));
                setReady(true);
            })
            .catch((err) => {
                setReady(true);
                setError("Check Your ");
            });
        document.addEventListener("keydown", handleKeyPress);
        let pusher = new Pusher("c85c0d9eb719341a04de", {
            cluster: "eu",
        });
        let channel = pusher.subscribe("SKillnTell");
        channel.bind("message", function (data) {
            alert(JSON.stringify(data));
        });
        return () => {
            // remove keyboard listener
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };
    let { user } = useUserContext();

    const handleSendMessage = async () => {
        if (newMessage !== "") {
            let payload = {
                sender_id: user.id,
                content: newMessage,
            };
            console.log("##########");
            console.log(payload);

            axiosClient.post("messages/add", payload);
            setDummy((prev) => !prev);
            const updatedMessages = [
                ...messages,
                { content: newMessage, sender_id: user.id },
            ];
            setMessages(updatedMessages);
            setNewMessage("");
        }
    };

    return (
        <>
            <NavBar></NavBar>
            <div className="chat-page flex flex-column w-100 mt-0 mx-0">
                {/*<div className="info-column flex-column"></div>*/}
                <div className="chat-column w-100 mx-0">
                    <div className="messages flex-column" ref={scrollRef}>
                        {ready ? (
                            messages.map((message) =>
                                messageBubble(
                                    message.content,
                                    message.sender_id === user.id
                                )
                            )
                        ) : (
                            <div className="flex justify-center mt-3">
                                <HashLoader color="#240046"></HashLoader>.
                            </div>
                        )}
                    </div>
                </div>

                <div />
                <div className="send-wrapper mt-3">
                    <input
                        ref={inputRef}
                        value={newMessage}
                        className="bg-violet"
                        onChange={handleNewMessageChange}
                        placeholder="text ..."
                    />
                    <button
                        ref={buttonRef}
                        className="send-btn"
                        type="button"
                        onClick={handleSendMessage}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} color="#240046" />
                    </button>
                </div>
            </div>
        </>
    );
}

export { ChatPage };
