export function messageBubble(message, isUser) {
  return isUser ? (
    <div className="flex flex-row-reverse">
      <div className="message-sent mt-10 message">
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
