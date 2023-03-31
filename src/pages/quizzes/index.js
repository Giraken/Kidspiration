import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50vw] h-[30vh] lg:min-h-screen bg-white lg:fixed flex justify-center items-center relative">
        <Link href="/">
          <div className="absolute top-5 left-5 px-5 py-3 bg-neutral-100 rounded shadow active:scale-90 duration-200 lg:hover:scale-105 lg:hover:shadow-md">
            <h3 className="text-[#262626] text-[1vw] font-semibold">
              Back to Home
            </h3>
          </div>
        </Link>
        <h1 className="text-[8vw] lg:text-[3vw] text-[#262626] italic font-semibold">
          Quizzes
        </h1>
      </div>
      <div className="w-full min-h-screen flex justify-end">
        <div className="w-full lg:w-[49vw] min-h-screen p-8">
          <div className="w-full min-h-screen grid place-content-start place-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-7 container">
            <Link href={'/quizzes/quiz1'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi1-kelas7.png')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Greetings
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz3'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi3-kelas7.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Thanking and Apologizing
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz5'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi5-kelas7.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Asking for Introduction
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz6'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi1-kelas8.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Asking for Attention
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz7'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi2-kelas8.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Checking Understanding
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz8'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi3-kelas8.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Showing Appreciation
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz9'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi1-kelas9.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Hopes and Wishes
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz10'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi2-kelas9.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Stating Purpose and Intentions
                  </h1>
                </div>
              </div>
            </Link>
            <Link href={'/quizzes/quiz11'}>
              <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] bg-white rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                <div className="w-full h-[40%] bg-[url('/materi3-kelas9.jpg')] bg-cover bg-center border-b-2"></div>
                <div className="w-full h-[60%] flex justify-center items-center px-5">
                  <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                    Quiz - Agreement and Disagreement
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
