import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

function Assistant() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hi! I'm LegalEase Assistant. Ask me to explain a legal term or a section of your document in simple language.",
    },
  ]);


  const sendMessage = () => {

    if (!message.trim()) return;


    setMessages([
      ...messages,

      {
        role: "user",
        text: message,
      },

      {
        role: "assistant",
        text:
          "AI responses will be connected to the LegalEase backend in the next stage. For now, this is the frontend interface.",
      },
    ]);

    setMessage("");

  };


  return (

    <div className="assistant-page">

      <div className="assistant-header">

        <div className="assistant-icon">
          <Sparkles />
        </div>

        <div>
          <h1>LegalEase AI Assistant</h1>
          <p>
            Understand legal terms in plain English.
          </p>
        </div>

      </div>


      <div className="chat-container">

        <div className="chat-messages">

          {messages.map((item, index) => (

            <div
              key={index}
              className={`message ${item.role}`}
            >
              {item.text}
            </div>

          ))}

        </div>


        <div className="chat-input">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask something about your document..."
          />

          <button
            className="btn btn-primary"
            onClick={sendMessage}
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>

  );
}

export default Assistant;
