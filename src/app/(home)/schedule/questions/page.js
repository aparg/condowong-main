"use client";

import { inputLead } from "@/components/Contact";
import QuestionRadio from "@/components/QuestionRadio";
import React, { useEffect, useState } from "react";

const page = () => {


  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionNumber, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: answer,
    }));
  };

  const handleSend = () => {
    let answersString = "";
    for (const [question, answer] of Object.entries(answers)) {
      answersString += `\nQuestion ${question}: ${answer}`;
    }
  
    alert(`Answers are: ${answersString}`);
  };

  useEffect(() => {
    // console.log(answers, "Ans's List");
  }, [answers]);

  return (
    <div className="container">
      <div className="text-3xl font-medium text-white my-12 text-center">
        Let's make our meeting productive and rewarding for you! <br />
        Please Spend 3 minutes answering the following questions now.
      </div>

      <div className="border border-gray-800 p-8">
        <QuestionRadio
          questionNumber={1}
          questionText="Have you watched more than 5 videos from CondoWong YouTube Channel?"
          options={["Yes", "No"]}
          handleAnswer={handleAnswer}
        />
        <QuestionRadio
          questionNumber={2}
          questionText=" Which property type are you interested in?"
          options={["Condo", "Townhouse/Detached"]}
          handleAnswer={handleAnswer}
        />
        <QuestionRadio
          questionNumber={3}
          questionText="Are you looking for pre-construction or resale? "
          options={["Pre-Construction (3-5 Years)", "Resale (60 days)"]}
          handleAnswer={handleAnswer}
        />
        <QuestionRadio
          questionNumber={4}
          questionText="Which area do you prefer? "
          options={[
            "Toronto Downtown",
            "Yonge and Eglinton",
            "North York (Yonge & Finch to Sheppard)",
            "Vaughan",
            "Richmond Hill and Markham",
            "Mississauga",
            "Etobicoke",
            "Anywhere that can make money",
          ]}
          handleAnswer={handleAnswer}
        />

        <QuestionRadio
          questionNumber={5}
          questionText="Do you need a mortgage?"
          options={["Yes", "No"]}
          handleAnswer={handleAnswer}
        />

        <QuestionRadio
          questionNumber={6}
          questionText="What is your family/annual income?"
          options={["Under $80K", "$80K - $120K", "120K"]}
          handleAnswer={handleAnswer}
        />
        <QuestionRadio
          questionNumber={7}
          questionText="What is your cash position?"
          options={["Under $110K", "$110K - $200K", "$200K+"]}
          handleAnswer={handleAnswer}
        />
        <QuestionRadio
          questionNumber={8}
          questionText="What is the purpose of your purchase?"
          options={["Investment", "Self-Use"]}
          handleAnswer={handleAnswer}
        />

        <QuestionRadio
          questionNumber={9}
          questionText="Do you think money is going to depreciate fast in the next 3 years due to money printing?"
          options={["Yes", "No", "Maybe"]}
          handleAnswer={handleAnswer}
        />

        {/* input text with label  */}
        <div className="flex flex-col my-4 relative">
          <label className="text-lg text-white">
            10. What neighbourhood / intersection do you live in now? *
          </label>
          <input
            type="text"
            className="block px-4 h-16   w-full placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none border-gray-800"
            placeholder=""
            onChange={(e) => handleAnswer(10, e.target.value)}
          />
        </div>

        {/* confirm your email address  */}
        <div className="flex flex-col my-4 relative">
          <label className="text-lg text-white">
            Confirm your email address
          </label>
          <input
            type="email"
            className="block px-4 h-16   w-full placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none border-gray-800"
            placeholder=""
            onChange={(e) => handleAnswer(11, e.target.value)}

          />
        </div>

        {/* send form  */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#CC9900] w-full text-white text-lg font-bold py-3 px-6 rounded-md"
          onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
