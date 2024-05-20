
// Make sure this happens in the cleint
"use client";

import Image from "next/image";
import { ChatBotButton } from "../ui/buttons";
import {
  SparklesIcon
} from '@heroicons/react/24/outline';
import React from 'react';


// import useState so that we can update the response we get from the API
import { useState } from "react";
// import axios so we can easily send the user's input to our server
import axios from "axios";
// import "../../app/globals.css";

const ChatBot = () => {
// We store and update the responses we get from the API with this state
// I've added a default value to the 'response' state that we should see 
// when the page initially loads
  const [response, setResponse] = useState<string>("Welcome! I am your CSG AI assistant. \n How can I help you?");
// We also store the input we get from the user in the 'value' state and
// update it everytime the user types into the input field we have added below
  const [value, setValue] = useState<string>("");

// We use this function in the newly added 'input' in the return statement.
// Each time the user types into the input, this function ensures that the
// 'value' state is updated
// We also add a type to the event that we pass in
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

// This function runs when the user presses the button we have added below
// This function takes the contents of 'value' (the input from the user) 
// and then sends this value to our server, which then sends a new request
// to the API
// The function then waits for the new response and updates the 'response'
// value which we then display on the page
  const handleSubmit = async () => {
    const response = (await axios.post("/chatbot/chat", { question: value })).data
      .choices[0].message.content;
    setResponse(response);
  };

// In our return statement, we add an input field so that the user can ask 
// questions to the API.
// We also add a button so that the user can submit their question which then
// updates the response from the API
// We show the updated response on our page
return (
  <main className="relative flex items-center justify-center min-h-screen text-black">
    {/* Background image */}
    <div className="absolute inset-0 z-[-1]">
      <Image
        src="/banner-white.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background Image"
      />
    </div>

    <div className="container mx-auto text-center">
      <div className="mb-4 text-black">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-1/2 px-4 py-2 border border-blue-500 rounded"
        />
      </div>
      <div className="mb-4">
        <ChatBotButton onClick={handleSubmit} icon={<SparklesIcon className="w-5 h-5" />}>
          Ask AI Consultant
        </ChatBotButton>
      </div>
      <div className="w-1/2 mx-auto p-8 bg-white rounded shadow-lg">
      <p className="text-lg">
        <img src="csg_logo_noclaim.png" alt="Logo" className="inline-block h-8 mr-2" />
        :&nbsp;
        {response.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>
        ))}
        </p>
      </div>
    </div>
  </main>
);
};

export default ChatBot;
  