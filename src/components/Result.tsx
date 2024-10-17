import React from 'react';
import { SocialMedia } from '../types';
import { socialMedia } from '../data/socialMedia';

interface ResultProps {
  score: number;
  totalQuestions: number;
}

const Result: React.FC<ResultProps> = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;
  const isPositive = percentage >= 60;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Résultat du Quiz</h2>
      <p className="text-lg mb-4">
        Votre score : {score}/{totalQuestions} ({percentage.toFixed(2)}%)
      </p>
      {isPositive ? (
        <div>
          <p className="text-green-600 font-semibold mb-4">
            Félicitations ! Vous avez une bonne compréhension de l'assainissement des réseaux sociaux.
          </p>
          <p className="mb-4">Vous pouvez accéder aux réseaux sociaux :</p>
          <div className="flex justify-center space-x-4">
            {socialMedia.map((sm: SocialMedia) => (
              <a
                key={sm.name}
                href={sm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                {sm.name}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="text-red-600 font-semibold mb-4">
            Il semble que vous ayez besoin d'en apprendre davantage sur l'assainissement des réseaux sociaux.
          </p>
          <p>
            L'accès aux réseaux sociaux est bloqué. Nous vous encourageons à vous renseigner davantage sur les bonnes pratiques en ligne avant de réessayer le quiz.
          </p>
        </div>
      )}
    </div>
  );
};

export default Result;