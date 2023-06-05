export function messageBubble(message, sender, user) {
  return sender.id === user.id ? (
    <div className="flex flex-row-reverse">
      <div className="message-sent mt-10 message">
        <h1>{user.username}</h1>
        <div className="message-content">
          <p> {message} </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-10 message message-received">
      <div className="message-content">
        <p>{message}</p>
      </div>
    </div>
  );
}
