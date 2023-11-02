import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-700'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bryan Chavez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#77809b]'>I am a Full Stack Software Engineer.</h2>
            <p className='text-[#77809b] py-4 max-w-[750px]'>I'm a full stack developer at Tyler Technologies, working on all application 
                types by the Nebraska Courts. Currently, I'm focused on building new features 
                to save our Judical Branch some time.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home