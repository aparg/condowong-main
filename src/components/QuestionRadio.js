import React, { useState } from 'react';

const QuestionRadio = ({ questionNumber, questionText, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleAnswer(questionNumber, event.target.value);
  };

  return (
    <div className='my-3'>
      <h3 class=" text-lg text-white ">{questionNumber}. {questionText}</h3>
      <ul class="items-center w-full text-lg font-extralight text-white sm:flex flex-col">
        {options.map((option, index) => (
          <li class="w-full" key={index}>
            <div class="flex items-center ps-3">
              <input
                id={`horizontal-list-radio-${questionNumber}-${index}`}
                type="radio"
                value={option}
                name={`list-radio-${questionNumber}`}
                class="w-5 h-5 text-[#CC9900] border-gray-300 focus:ring-[#CC9900] focus:ring-2"
                onChange={handleChange}
              />
              <label
                for={`horizontal-list-radio-${questionNumber}-${index}`}
                class="w-full py-3 ms-2 text-lg font-extralight text-white"
              >
                {option}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionRadio;