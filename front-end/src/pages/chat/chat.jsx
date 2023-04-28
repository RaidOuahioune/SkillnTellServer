import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useRef, useEffect } from "react";
import "./chat.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../../Components/NavBar/navbar";

import { sendMessage } from "./Controllers/GptContorller";
import { messageBubble } from "./messageBubble";
function ChatPage() {
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
    // add keyboard listener
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      // remove keyboadr listener
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
   
  };

  const handleSendMessage = async() => {
    if (newMessage !== "") {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setDummy((prev) => !prev);
      // to call the chat gpt api
      await sendMessage(newMessage);
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
            {messages.map((message) => (
             messageBubble(message,true)
            ))}
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
