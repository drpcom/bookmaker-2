import React from 'react';
import { useCollapseSidebar } from '../context/collapseSidebarContext';

const Sidebar = () => {
    const { open } = useCollapseSidebar();

    return (
        <>       
        <div className={open ? "md:w-2/5 bg-violet-300 dark:bg-[#2e2e37] h-fit min-h-screen hidden md:flex md:flex-col" : "hidden"}>
          <div className="flex flex-row items-center h-12 mt-4 mb-4 ml-2 pl-4 pr-4">
              <input type="search" className="form-control min-w-0 block h-11/12 text-2xl text-slate-200 dark:text-white bg-white dark:bg-zinc-600 bg-clip-padding border-none m-0 focus:text-gray-700 focus:bg-white focus:border-sky-300 focus:outline-none" placeholder="Search" aria-label="Search"></input>
                <button className="btn px-6 py-4 bg-rose-500 dark:bg-sky-400 text-white font-medium uppercase shadow-md hover:bg-rose-600 dark:hover:bg-sky-500 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ease-in-out flex items-center" type="button">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                </button>
          </div>
          <div className='flex flex-row flex-wrap ml-4 xl:justify-start'>
            <button className='bg-emerald-50 dark:bg-zinc-700 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2 flex flex-col p-2 lg:p-3 hover:animate-pulse'>
                <div className='text-xl lg:text-2xl indent-2'>
                    <p className='mb-2 line-clamp-1 h-8 text-left dark:text-sky-300'>oh canada you are my favorite place</p> 
                </div>
                <div>
                   <p className='line-clamp-5 text-xs flex flex-row text-left lg:line-clamp-7 dark:text-slate-200'>I really didn’t expect The Brothers Karamazov to have much of an effect on me after I finished it. It didn’t knock me off my feet. But I’ve caught myself thinking about the characters a lot. The characters really do stay with you. Each one is so well-drawn. Mitya, Ivan, Alyosha, #Grushenka, Katerina Ivanovna, Smerdyakov, Lise, Madame Khokhlakov. Even characters like Snegiryov and Kolya Krasotkin. There’s just no flatness to any of them. Dostovesky didn’t know how to write a flat character.</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 dark:bg-zinc-700 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2 flex flex-col p-2 lg:p-3 hover:animate-pulse'>
                <div className='text-xl lg:text-2xl indent-2'>
                    <p className='mb-2 line-clamp-1 h-8 text-left dark:text-sky-300'>sprinter!</p> 
                </div>
                <div>
                   <p className='line-clamp-5 text-xs flex flex-row text-left lg:line-clamp-7 dark:text-slate-200'>Recently, there has been a renewed interest in emo, especially midwest emo. These bands are heavily influenced by Cap'n Jazz and often have a strong bent towards math rock and post-rock in their song structure and guitar work. A few examples of these twinkledaddy bands are Street Smart Cyclist, Snowing, Algernon Cadwallader, The World Is A Beautiful Place & I Am No Longer Afraid to Die, and Glocca Morra. As this scene grew and grew in popularity, #emorevival became a near-mainstream style of indie rock which took from various facets of Midwest, screamo, and emo pop, as played by bands such as the Hotelier, Free Throw, and late-period You Blew It!</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 dark:bg-zinc-700 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2 flex flex-col p-2 lg:p-3 hover:animate-pulse'>
                <div className='text-xl lg:text-2xl indent-2'>
                    <p className='mb-2 line-clamp-1 h-8 text-left dark:text-sky-300'>oh canada you are my favorite place</p> 
                </div>
                <div>
                   <p className='line-clamp-5 text-xs flex flex-row text-left lg:line-clamp-7 dark:text-slate-200'>I really didn’t expect The Brothers Karamazov to have much of an effect on me after I finished it. It didn’t knock me off my feet. But I’ve caught myself thinking about the characters a lot. The characters really do stay with you. Each one is so well-drawn. Mitya, Ivan, Alyosha, #Grushenka, Katerina Ivanovna, Smerdyakov, Lise, Madame Khokhlakov. Even characters like Snegiryov and Kolya Krasotkin. There’s just no flatness to any of them. Dostovesky didn’t know how to write a flat character.</p> 
                </div>    
            </button>
            
          </div>
        </div>
        </>
      )
};

export default Sidebar;
