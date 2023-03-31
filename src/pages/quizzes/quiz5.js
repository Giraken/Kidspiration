import React from 'react';
import Link from 'next/link';
import questions from '../../../soal-quiz/quiz5.json';

const Quiz5 = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  // const handlePrevious = () => {
  //   const prevQues = currentQuestion - 1;
  //   prevQues >= 0 && setCurrentQuestion(prevQues);
  // };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handleSubmitButton = () => {
    let newScore = 5;
    //   for (let i = 0; i < questions.length; i++) {
    //     questions[i].answerOptions.map(
    //       (answer) =>
    //         answer.isCorrect &&
    //         answer.answer === selectedOptions[i]?.answerByUser &&
    //         (newScore += 1)
    //     );
    //   }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {showScore ? (
        <div className="flex justify-center items-center w-full min-h-screen">
          <h1 className="text-3xl font-semibold text-center text-[#262626]">
            You scored {score} out of {questions.length}
          </h1>
        </div>
      ) : (
        <>
          <div className="w-full h-[40vh] px-10 bg-white flex justify-center items-center relative">
            <div className="absolute top-5 left-5 px-5 py-3 bg-neutral-100 rounded shadow-md">
              <h3 className="text-[#262626] text-[1vw] font-semibold">
                Question {currentQuestion + 1}
              </h3>
            </div>
            <Link href="/quizzes">
              <div className="absolute top-5 right-5 px-5 py-3 bg-neutral-100 rounded shadow active:scale-90 duration-200 lg:hover:scale-105 lg:hover:shadow-md">
                <h3 className="text-[#262626] text-[1vw] font-semibold">
                  Back to Quizzes
                </h3>
              </div>
            </Link>
            <h2 className="text-start text-[1.6vw] text-[#262626] whitespace-pre-line">
              {questions[currentQuestion].question}
            </h2>
          </div>
          <div className="w-full h-[60vh] flex justify-center items-center">
            <div className=" grid grid-cols-2 gap-8 gap-x-12">
              <button
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }
              >
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions[currentQuestion].answerOptions[0].answer}
                </div>
              </button>
              <button
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }
              >
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions[currentQuestion].answerOptions[1].answer}
                </div>
              </button>
              <button
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }
              >
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions[currentQuestion].answerOptions[2].answer}
                </div>
              </button>
              <button
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }
              >
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions[currentQuestion].answerOptions[3].answer}
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz5;
