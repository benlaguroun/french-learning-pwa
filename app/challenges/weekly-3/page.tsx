"use client";

import { ChallengeHeader } from "@/components/challenges/layout/challenge-header";
import { ListeningChallenge } from "@/app/challenges/weekly/listening-challenge";

const listeningData = {
  audioSrc: "/audio/conversation.mp3",
  transcript: {
    french:
      "Bonjour, je voudrais un café s'il vous plaît. - Bien sûr, avec du sucre? - Non merci, sans sucre.",
    arabic:
      "مرحبًا، أود قهوة من فضلك. - بالطبع، مع السكر؟ - لا شكرًا، بدون سكر.",
  },
  questions: [
    {
      question: "Que veut commander la personne?",
      answers: ["Un thé", "Un café", "Un jus"],
      correct: "Un café",
    },
    {
      question: "Veut-elle du sucre?",
      answers: ["Oui", "Non"],
      correct: "Non",
    },
  ],
};

export default function WeeklyChallenge3() {
  return (
    <div className="container mx-auto py-8 px-4">
      <ChallengeHeader
        arabicTitle="الاستماع المتقدم"
        frenchTitle="Écoute Avancée"
        arabicDescription="استمع إلى محادثة فرنسية قصيرة ثم أجب عن الأسئلة."
        frenchDescription="Écoutez une courte conversation en français, puis répondez aux questions."
      />

      <ListeningChallenge listeningData={listeningData} />
    </div>
  );
}
