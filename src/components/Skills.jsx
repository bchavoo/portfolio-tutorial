import React from 'react'

import HTMLImg from '../assets/html.png'
import CSSImg from '../assets/css.png'
import JavaScriptImg from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GithubImg from '../assets/github.png'
import TailwindImg from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-700'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with recently</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={HTMLImg} alt='HTML Icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={CSSImg} alt='CSS Icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={JavaScriptImg} alt='JavaScript Icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={ReactImg} alt='React Icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={TailwindImg} alt='Tailwind Icon' />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-4' src={GithubImg} alt='Github Icon' />
                    <p className='my-4'>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills