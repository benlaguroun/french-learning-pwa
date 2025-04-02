"use client";

import { ChallengeHeader } from "@/components/challenges/layout/challenge-header";
import { ReadingChallenge } from "@/app/challenges/weekly/reading-challenge";
import { ListeningChallenge } from "@/app/challenges/weekly/listening-challenge";

const readingData = {
  title: "Un matin en France",
  frenchText: `Paul se réveille tôt le matin. Il prend son petit déjeuner avec du café et du pain. Ensuite, il part au travail en métro. À midi, il mange avec ses collègues dans un petit restaurant. Le soir, il rentre chez lui et regarde un film.`,
  arabicText: `يستيقظ بول مبكرًا في الصباح. يتناول الإفطار مع القهوة والخبز. بعد ذلك، يذهب إلى العمل بالمترو. في الظهيرة، يتناول الغداء مع زملائه في مطعم صغير. في المساء، يعود إلى المنزل ويشاهد فيلمًا.`,
  questions: [
    {
      question: "À quelle heure Paul se réveille-t-il?",
      answers: ["Tôt le matin", "À midi", "Le soir"],
      correct: "Tôt le matin",
    },
    {
      question: "Que prend Paul au petit déjeuner?",
      answers: [
        "Du thé et des croissants",
        "Du café et du pain",
        "Un jus et un sandwich",
      ],
      correct: "Du café et du pain",
    },
    {
      question: "Comment va-t-il au travail?",
      answers: ["En bus", "En métro", "À vélo"],
      correct: "En métro",
    },
  ],
};

export default function WeeklyChallenge2() {
  return (
    <div className="container mx-auto py-8 px-4">
      <ChallengeHeader
        arabicTitle="القراءة والفهم"
        frenchTitle="Lecture et Compréhension"
        arabicDescription="اقرأ نصًا قصيرًا وأجب عن الأسئلة لاختبار فهمك."
        frenchDescription="Lisez un court texte et répondez aux questions pour tester votre compréhension."
      />

      <ReadingChallenge readingData={readingData} />
    </div>
  );
}
