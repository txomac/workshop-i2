import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { questions } from './data/questions';
import { AlertTriangle } from 'lucide-react';

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setQuizCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Quiz sur l'Assainissement des Réseaux Sociaux</h1>
        <p className="text-gray-600 flex items-center justify-center">
          <AlertTriangle className="mr-2" />
          Testez vos connaissances pour un usage responsable des réseaux sociaux
        </p>
      </header>
      
      {!quizCompleted ? (
        <Quiz onComplete={handleQuizComplete} />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;