import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
const About = () => {
    const infoList = [
        { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
        { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
        { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
    ];
    

    const toolsData = [
        assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
    ];

  return (
    <div  className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src="/user-image.png" width={200} height={500} alt="user" className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
<p className='mb-10 max-w-2xl font-Ovo'>I am a Fresher Full Stack Developer with over experience of 6 months in internship and completed various projects.Even though i had attended various Hackathons and also complted various projects .</p>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title , description}, index)=>(
                <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'>
                    <Image src={icon} alt={title} className='w-7 mt-3' />
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </li>
            ))}
        </ul>
        <h4 className="my-6 text-gray-700 font-Ovo">Tools I used</h4>
        <ul className='flex items-center gap-3 sm:gap-5' >
            {toolsData.map((tool, index)=>(
                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer'>
                    <Image src={tool} alt="tool" className='w-5 sm:w-7'/>
                </li>       
            ))}</ul>
        
        
        </div>
      </div>
    </div>
  )
}

export default About
