import React from 'react';
import SideBar from '../common/SideBar';

const DashboardPage = () => {
  return (
    <>
      <div className='overflow-hidden w-full h-full relative flex z-0'>
        <SideBar />
        <div className='flex h-full max-w-full flex-1 overflow-hidden'>
          <div className=' text-center w-full mt-5'>
            <h1 className='text-3xl w-full mb-5'>WELCOME TO LUCID LLM</h1>

            <div className='md:flex items-start text-center gap-3.5 w-3/5 mx-auto my-48'>
              <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='12' r='5'></circle>
                    <line x1='12' y1='1' x2='12' y2='3'></line>
                    <line x1='12' y1='21' x2='12' y2='23'></line>
                    <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                    <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                    <line x1='1' y1='12' x2='3' y2='12'></line>
                    <line x1='21' y1='12' x2='23' y2='12'></line>
                    <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                    <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
                  </svg>
                  Examples
                </h2>
                <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                  <button className='w-full dark:bg-gray-800 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                    "Explain quantum computing in simple terms" →
                  </button>
                  <button className='w-full dark:bg-gray-800  p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                    "Got any creative ideas for a 10 year old’s birthday?" →
                  </button>
                  <button className='w-full dark:bg-gray-800  p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900'>
                    "How do I make an HTTP request in Javascript?" →
                  </button>
                </ul>
              </div>
              <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                    className='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
                    ></path>
                  </svg>
                  Capabilities
                </h2>
                <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                  <li className='w-full dark:bg-gray-800  p-3 rounded-md'>
                    Remembers what user said earlier in the conversation
                  </li>
                  <li className='w-full dark:bg-gray-800  p-3 rounded-md'>
                    Allows user to provide follow-up corrections
                  </li>
                  <li className='w-full dark:bg-gray-800  p-3 rounded-md'>
                    Trained to decline inappropriate requests
                  </li>
                </ul>
              </div>
              <div className='flex flex-col mb-8 md:mb-auto gap-3.5 flex-1'>
                <h2 className='flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2'>
                  <svg
                    stroke='currentColor'
                    fill='none'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='h-6 w-6'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
                    <line x1='12' y1='9' x2='12' y2='13'></line>
                    <line x1='12' y1='17' x2='12.01' y2='17'></line>
                  </svg>
                  Limitations
                </h2>
                <ul className='flex flex-col gap-3.5 w-full sm:max-w-md m-auto'>
                  <li className='w-full dark:bg-gray-800  p-3 rounded-md'>
                    May occasionally generate incorrect information
                  </li>
                  <li className='w-full dark:bg-gray-800  p-3 rounded-md'>
                    May occasionally produce harmful instructions or biased
                    content
                  </li>
                  <li className='w-full dark:bg-gray-800  p-3 rounded-md'>
                    Limited knowledge of world and events after 2021
                  </li>
                </ul>
              </div>
            </div>

            <div
              className='absolute bottom-10 border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-700 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2'
              style={{ width: '90vw' }}
            >
              <form className='stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
                <div
                  className='relative flex h-full flex-1 items-stretch md:flex-col'
                  role='presentation'
                >
                  <div className='flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs'>
                    <textarea
                      id='prompt-textarea'
                      data-id='root'
                      placeholder='Send a message'
                      className='m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0'
                      style={{
                        maxHeight: '200px',
                        height: '24px',
                        overflowY: 'hidden',
                      }}
                      data-gramm='false'
                      wt-ignore-input='true'
                    ></textarea>
                    <button className='absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40'>
                      <span className='' data-state='closed'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 16 16'
                          fill='none'
                          className='h-4 w-4 m-1 md:m-0'
                          stroke-width='2'
                        >
                          <path
                            d='M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
              {/* <div className='px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3'>
                <span>
                  Free Research Preview. LucidLLM may produce inaccurate
                  information about people, places, or facts.{' '}
                  
                    LucidLLM June 24 Version
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
