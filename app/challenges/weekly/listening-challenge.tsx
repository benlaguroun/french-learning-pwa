import React from "react";

interface ListeningChallengeProps {
  listeningData: {
    audioSrc: string;
    transcript: {
      french: string;
      arabic: string;
    };
    questions: {
      question: string;
      answers: string[];
      correct: string;
    }[];
  };
}

export const ListeningChallenge: React.FC<{
  listeningData: ListeningChallengeProps["listeningData"];
}> = ({ listeningData }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Écoute et Compréhension</h2>

      <audio controls className="mt-4 w-full">
        <source src={listeningData.audioSrc} type="audio/mp3" />
        Votre navigateur ne supporte pas l’audio.
      </audio>

      <p className="mt-4">{listeningData.transcript.french}</p>
      <p className="mt-2 text-right" lang="ar" dir="rtl">
        {listeningData.transcript.arabic}
      </p>

      <div className="mt-4">
        {listeningData.questions.map((q, index) => (
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
