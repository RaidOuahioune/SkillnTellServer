import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";

import { Login } from "./pages/login/login";
import { ChatPage } from "./pages/chat/chat";
import { Register } from "./pages/Register/register";
import { Events } from "./pages/events/Events";
import { useUserContext } from "./contexts/UserContextProvider";
import EventModal from "./pages/events/EventsComponents/EventModal";
function App() {
    let { user, token } = useUserContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/addevent" element={<EventModal />}></Route>
                {user && token && (
                    <Route path="/chat" element={<ChatPage />}></Route>
                )}
                <Route path="/register" element={<Register />}></Route>
                <Route
                    path="*"
                    element={
                        <div className="text-danger align-middle">
                            404 Not Found
                        </div>
                    }
                >
                    {" "}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
