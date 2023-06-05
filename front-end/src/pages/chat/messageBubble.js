export function messageBubble(message, sender_id, user, users) {
    return sender_id === user.id ? (
        <div className="flex flex-row-reverse">
            <div className="message-sent mt-10 message">
                <div className="message-content">
                    <p className="username">@{user.username} : </p>
                    <p> {message} </p>
                </div>
            </div>
        </div>
    ) : (
        <div className="mt-10 message message-received">
            <div className="message-content">
                <p className="username">
                    @{getUsernameById(sender_id, users)} :{" "}
                </p>
                <p>{message}</p>
            </div>
        </div>
    );
}
function getUsernameById(id, users) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i].username;
        }
    }
    return null; // Return null if no user with the given id is found
}
