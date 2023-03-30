import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-7'>
        <div className='-ml-5 w-[270px] h-[90px] lg:w-[25vw] lg:h-[16vh] overflow-hidden relative'>
          <Image
            src="/logo_2-removebg-preview.png"
            alt="logo"
            blurDataURL='logo'
            fill
            placeholder='blur'
          />
        </div>
        <div className='flex gap-7'>
          <Link href={'/materials'}>
            <div className='w-[35vw] h-[35vw] lg:w-[18vw] lg:h-[18vw] bg-white rounded-xl shadow lg:hover:bg-[#38B6FF] lg:hover:shadow-xl lg:hover:shadow-[#38B6FF]/40 lg:hover:-translate-y-3 duration-200 active:scale-90 active:bg-[#38B6FF] flex justify-center items-center text-[#262626] hover:text-white font-normal hover:font-semibold'>
              <h1 className='text-[3.5vw] lg:text-[1.5vw] italic '>Materials</h1>
            </div>
          </Link>
          <Link href={'/quizzes'}>
            <div className='w-[35vw] h-[35vw] lg:w-[18vw] lg:h-[18vw] bg-white rounded-xl shadow lg:hover:bg-[#38B6FF] lg:hover:shadow-xl lg:hover:shadow-[#38B6FF]/40 lg:hover:-translate-y-3 duration-200 active:scale-90 active:bg-[#38B6FF] flex justify-center items-center text-[#262626] hover:text-white font-normal hover:font-semibold'>
              <h1 className='text-[3.5vw] lg:text-[1.5vw] italic'>Quizzes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}