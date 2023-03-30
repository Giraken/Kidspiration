import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

export async function getStaticPaths() {
  const files = fs.readdirSync('materi');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`materi/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function MaterialPage({ frontmatter, content }) {
  const [feedback1, setFeedback1] = React.useState(true);
  const [feedback2, setFeedback2] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto prose">
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      {feedback1 && (
        <div className="mt-[200px] w-full container mx-auto flex justify-center">
          <div className="bg-white p-16 rounded-xl shadow-md flex flex-col gap-5 justify-center items-center">
            <h1 className="font-semibold text-[1.5vw] text-[#262626] text-center">
              Do you love the material?
            </h1>
            <div className="flex flex-row gap-5">
              <button
                onClick={() => {
                  setFeedback1(false);
                  setFeedback2(true);
                }}
              >
                <div className="text-[3.5vw] p-2 bg-neutral-100 rounded-xl shadow-md flex justify-center items-center active:scale-90 lg:hover:shadow-lg lg:hover:scale-110 lg:hover:-translate-y-2 duration-200">
                  🙁
                </div>
              </button>
              <button
                onClick={() => {
                  setFeedback1(false);
                  setFeedback2(true);
                }}
              >
                <div className="text-[3.5vw] p-2 bg-neutral-100 rounded-xl shadow-md flex justify-center items-center active:scale-90 lg:hover:shadow-lg lg:hover:scale-110 lg:hover:-translate-y-2 duration-200">
                  😐
                </div>
              </button>
              <button
                onClick={() => {
                  setFeedback1(false);
                  setFeedback2(true);
                }}
              >
                <div className="text-[3.5vw] p-2 bg-neutral-100 rounded-xl shadow-md flex justify-center items-center active:scale-90 lg:hover:shadow-lg lg:hover:scale-110 lg:hover:-translate-y-2 duration-200">
                  😁
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {feedback2 && (
        <div className="mt-[200px] w-full container mx-auto flex justify-center">
          <div className="bg-white p-16 rounded-xl shadow-md flex flex-col gap-5 justify-center items-center">
            <h1 className="font-semibold text-[1.5vw] text-[#262626] text-center">
              What do you think after reading the material?
            </h1>
            <div className="flex flex-col gap-5">
              <button
                onClick={() => {
                  setFeedback2(false);
                  setIsSubmitted(true);
                }}
              >
                <div className="text-[1.3vw] px-5 py-5 bg-neutral-100 rounded-xl shadow-md flex justify-start items-center active:scale-90 lg:hover:shadow-lg lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 w-[28vw]">
                  <h2>It`s hard to understand</h2>
                </div>
              </button>
              <button
                onClick={() => {
                  setFeedback2(false);
                  setIsSubmitted(true);
                }}
              >
                <div className="text-[1.3vw] px-5 py-5 bg-neutral-100 rounded-xl shadow-md flex justify-start items-center active:scale-90 lg:hover:shadow-lg lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 w-[28vw]">
                  <h2>Still need to read it once again</h2>
                </div>
              </button>
              <button
                onClick={() => {
                  setFeedback2(false);
                  setIsSubmitted(true);
                }}
              >
                <div className="text-[1.3vw] px-5 py-5 bg-neutral-100 rounded-xl shadow-md flex justify-start items-center active:scale-90 lg:hover:shadow-lg lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 w-[28vw]">
                  <h2>Will likely recommend it!</h2>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {isSubmitted && (
        <div className="mt-[200px] w-full container mx-auto flex justify-center">
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-5 justify-center items-center">
            <h1 className="font-semibold text-[1.5vw] text-[#262626] text-center">
              Thank you for your feedback!
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
