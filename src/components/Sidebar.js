import React from 'react';

const Sidebar = () => {
    return (
        <div className="md:w-2/5 bg-violet-300 h-fit min-h-screen hidden md:flex md:flex-col">
          <div className="flex flex-col items-center h-12 justify-center m-4">
              <input className="w-[97%] h-11/12 text-2xl indent-2 p-2" type="text" placeholder="Search" />
          </div>
          <div className='flex flex-row justify-center flex-wrap ml-4 xl:justify-start'>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
            <button className='bg-emerald-50 rounded w-32 h-36 lg:w-44 lg:h-48 shadow-md shadow-slate-700/50 m-2'>
                <div className='text-3xl'>
                    <p className='text-center mb-2'>title</p> 
                </div>
                <div>
                   <p className='text-center'>body</p> 
                </div>    
            </button>
          </div>
        </div>
      )
};

export default Sidebar;
