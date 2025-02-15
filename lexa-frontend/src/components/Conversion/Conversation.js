import React, { useState } from "react";
import { startConversationWithText } from "../../services/apiService";

const Conversation = ({ scenario, messages }) => {
  const [isListening, setIsListening] = useState(false);

  const handleStartRolePlay = async () => {
    try {
      const { audio: audioBlob } = await startConversationWithText(scenario);
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.play();
    } catch (error) {
      console.error("Error starting scenario:", error);
    }
  };

  return (
    <div className="p-5 border border-gray-200 rounded-lg bg-white shadow-md max-w-xl mx-auto">
      <h2 className="mb-5 text-2xl font-semibold text-gray-800 text-center">
        Conversation
      </h2>
      <div className="mb-5">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3">
            <strong className="text-blue-500">{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleStartRolePlay}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
        >
          Start Scenario
        </button>
        <button
          onClick={() => setIsListening(!isListening)}
          className={`px-4 py-2 text-white rounded-md transition ${
            isListening
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
    </div>
  );
};

export default Conversation;
