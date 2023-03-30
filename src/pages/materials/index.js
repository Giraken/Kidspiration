import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';

export async function getStaticProps() {
  const files = fs.readdirSync('materi');

  const material = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`materi/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      material,
    },
  };
}

const index = ({ material }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-[50vw] h-[30vh] lg:min-h-screen bg-white lg:fixed flex justify-center items-center">
        <h1 className="text-[8vw] lg:text-[3vw] text-[#262626] italic font-semibold">
          Materials
        </h1>
        <Link href="/">
          <div className="absolute top-5 left-5 px-5 py-3 bg-neutral-100 rounded shadow active:scale-90 duration-200 lg:hover:scale-105 lg:hover:shadow-md">
            <h3 className="text-[#262626] text-[1vw] font-semibold">
              Back to Home
            </h3>
          </div>
        </Link>
      </div>
      <div className="w-full min-h-screen flex justify-end">
        <div className="w-full lg:w-[49vw] min-h-screen p-8">
          <div className="w-full min-h-screen grid place-content-start place-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-6 container">
            {material.map(({ slug, frontmatter }) => (
              <Link href={`/materials/${slug}`} key={slug}>
                <div className="w-[35vw] h-[35vw] lg:w-[20vw] lg:h-[20vw] rounded-xl shadow flex flex-col overflow-hidden lg:hover:-translate-y-3 lg:hover:shadow-xl lg:hover:scale-105 duration-200 active:scale-90">
                  <div className="w-full h-[45%] relative border border-b-2">
                    <Image
                      src={`/${frontmatter.socialImage}`}
                      alt={frontmatter.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full h-[55%] flex justify-center items-center px-5 bg-white">
                    <h1 className="text-center text-[#262626] text-[1.5vw] font-semibold">
                      {frontmatter.title}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
