import { createContext, useState, useContext } from "react";

// for the context we need
// {user,token}
const UserContext = createContext({
    user: null, // the user is a json object
    token: null,
    setUser: () => {},
    setToken: () => {},
});
export const UserContextProvider = ({ children }) => {
    // global states that will be passed through the contextProvider

    /*the user is a json object holding the user info*/
    const [user, setUser] = useState({});
    /*token is a plain String where the inital state is retreived from the localStorage*/

    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            /*if the server has provided a token to the user
            then store it in local storage so that user is kept authenticated
            */ localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };
    return (
        // To provide the User info to the gloabl App Scope
        <UserContext.Provider value={{user, token, setUser, setToken}}>
            {/*To render the children of the global Provider*/}
            {children}
        </UserContext.Provider>
    );
};
/* this is a function that usused by the children to consume the provided context whenever needed*/
export const useUserContext = () => useContext(UserContext);
