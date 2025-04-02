import React from "react";

interface ReadingChallengeProps {
  readingData: {
    title: string;
    frenchText: string;
    arabicText: string;
    questions: {
      question: string;
      answers: string[];
      correct: string;
    }[];
  };
}

export const ReadingChallenge: React.FC<{
  readingData: ReadingChallengeProps["readingData"];
}> = ({ readingData }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{readingData.title}</h2>
      <p className="mt-2">{readingData.frenchText}</p>
      <p className="mt-2 text-right" lang="ar" dir="rtl">
        {readingData.arabicText}
      </p>

      <div className="mt-4">
        {readingData.questions.map((q, index) => (
          <div key={index} className="mt-3">
            <p className="font-medium">{q.question}</p>
            <ul>
              {q.answers.map((answer, i) => (
                <li key={i} className="ml-4">
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      className="mr-2"
                    />
                    {answer}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
