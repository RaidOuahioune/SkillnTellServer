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
    let { user } = useUserContext();
    const [ready, setReady] = useState(false);
    // this is to indicate whether we want to get old data
    const [oldmessages, setOldMessages] = useState(true);
    const [isTop, setTop] = useState(false);
    const [error, setError] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // dummy var to cause useEffect to be called each time this variable changes
    // this variable is used to do the scolling behaviour after new messages arrive

    const [dummy, setDummy] = useState(0);
    const buttonRef = useRef(null);
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    let updateMessage = (data) => {
        setMessages((prevState) => {
            return [
                ...prevState,
                {
                    content: data.message.content,
                    sender_id: data.message.sender_id,
                },
            ];
        });
        setDummy((prev) => !prev);
    };
    useEffect(() => {
        // scrool to the bottom when there are new messages
        scrollDown();
    }, [dummy, ready]);
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
            .get("/messages?skip=0")
            .then((res) => {
                setMessages(Object.values(res.data));
                setReady(true);
            })
            .catch((err) => {
                setReady(true);
                setError("Check Your Net");
            });
        document.addEventListener("keydown", handleKeyPress);
        let pusher = new Pusher("c85c0d9eb719341a04de", {
            cluster: "eu",
        });
        let channel = pusher.subscribe("SKillnTell");
        channel.bind("message", (data) => {
            console.log(data);
            updateMessage(data);
        });

        return () => {
            // remove keyboard listener
            document.removeEventListener("keydown", handleKeyPress);
            pusher.disconnect();
        };
    }, []);

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = async () => {
        if (newMessage !== "") {
            let payload = {
                sender_id: user.id,
                content: newMessage,
            };

            axiosClient.post("messages/add", payload).then((res) => {
                //const updatedMessages = [
                //    ...messages,
                //    { content: newMessage, sender_id: user.id },
                //];
                //setMessages(updatedMessages);
                setDummy((prev) => !prev);
                setNewMessage("");
            });
        }
    };

    let handleScroll = () => {
        const scrollableDiv = scrollRef.current;
        if (scrollableDiv.scrollTop === 0) {
            setTop(true);
            setOldMessages(true);
            axiosClient
                .get(`messages?skip=${messages.length ?? 0}`)
                .then((res) => {
                    let oldMessages = Object.values(res.data);
                    const updatedMessages = [...oldMessages, ...messages];

                    setMessages(updatedMessages);
                    setTop(false);
                    setOldMessages(false);
                });

            // check if we are scrolling and at the top of the div
        } else {
            setTop(false);
        }
    };
    let scrollDown = () => {
        const scrollableDiv = scrollRef.current;
        scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    };

    return (
        <>
            <NavBar></NavBar>
            <div className="chat-page flex flex-column w-100 mt-0 mx-0">
                {/*<div className="info-column flex-column"></div>*/}
                <div className="chat-column w-100 mx-0">
                    <div
                        className="messages flex-column"
                        ref={scrollRef}
                        onScroll={handleScroll}
                    >
                        {oldmessages && isTop && (
                            <div className="flex justify-center">
                                <HashLoader color="#240046"></HashLoader>.
                            </div>
                        )}
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
