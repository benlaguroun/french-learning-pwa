"use client";

import { useState } from "react";
import { ChallengeHeader } from "@/components/challenges/layout/challenge-header";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const idiomsData = [
  {
    french: "Avoir le coup de foudre",
    literal: "Avoir un coup de la foudre",
    literalArabic: "أن تُصاب بضربة برق",
    meaning: "Tomber amoureux instantanément",
    meaningArabic: "أن تقع في الحب من النظرة الأولى",
    example:
      "Quand j'ai vu Marie pour la première fois, j'ai eu le coup de foudre.",
    exampleArabic: "عندما رأيت ماري لأول مرة، وقعت في حبها من النظرة الأولى.",
  },
  {
    french: "Coûter les yeux de la tête",
    literal: "Coûter les yeux de la tête",
    literalArabic: "أن يكلف عيون الرأس",
    meaning: "Être très cher",
    meaningArabic: "أن يكون باهظ الثمن جدًا",
    example: "Cette voiture de luxe coûte les yeux de la tête.",
    exampleArabic: "هذه السيارة الفاخرة تكلف ثروة.",
  },
  {
    french: "Avoir un poil dans la main",
    literal: "Avoir un poil dans la main",
    literalArabic: "أن يكون لديك شعرة في اليد",
    meaning: "Être très paresseux",
    meaningArabic: "أن تكون كسولًا جدًا",
    example: "Il ne fait jamais le ménage, il a un poil dans la main.",
    exampleArabic: "هو لا ينظف أبدًا، إنه كسول جدًا.",
  },
];

export default function WeeklyChallenge1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <ChallengeHeader
        arabicTitle="التعبيرات الاصطلاحية الفرنسية"
        frenchTitle="Expressions Idiomatiques Françaises"
        arabicDescription="تعلم 7 تعبيرات اصطلاحية فرنسية شائعة. افهم معناها الحرفي والفعلي، وكيفية استخدامها في المحادثات اليومية."
        frenchDescription="Apprenez 7 expressions idiomatiques françaises courantes. Comprenez leur sens littéral et réel, et comment les utiliser dans les conversations quotidiennes."
      />

      <div className="mt-6 space-y-4">
        {idiomsData.map((idiom, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center bg-purple-50 hover:bg-purple-100 transition"
              onClick={() => toggleAnswer(index)}
            >
              <div>
                <h3 className="font-semibold text-lg text-purple-800">
                  {idiom.french}
                </h3>
                <p className="text-sm text-gray-600">{idiom.literal}</p>
              </div>
              {openIndex === index ? (
                <ChevronUpIcon className="w-6 h-6 text-purple-600" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-purple-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="p-4 bg-white transition-all">
                <p className="text-gray-700">
                  <span className="font-medium text-purple-600">Meaning:</span>{" "}
                  {idiom.meaning}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium text-purple-600">Example:</span>{" "}
                  {idiom.example}
                </p>
                <hr className="my-3 border-gray-300" />
                <p className="text-gray-700 text-right">
                  <span className="font-medium text-purple-600">المعنى:</span>{" "}
                  {idiom.meaningArabic}
                </p>
                <p className="text-gray-700 text-right">
                  <span className="font-medium text-purple-600">مثال:</span>{" "}
                  {idiom.exampleArabic}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
