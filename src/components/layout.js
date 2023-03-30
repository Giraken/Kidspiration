import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-neutral-100'>
      {/* <header className='bg-fuchsia-100 mb-8 py-4'> */}
        {/* <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <p>🏡</p>
          </Link>
          <span className='mx-auto text-3xl'>Welcome to my blog</span>{' '}
        </div> */}
      {/* </header> */}
      <Head>
        <title>Kidspiration</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <main className='flex-1 bg-neutral-100'>{children}</main>
      {/* <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 DailyDevTips
        </div>
      </footer> */}
    </div>
  );
}