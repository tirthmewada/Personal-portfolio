import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
const Work = () => {
    const workData = [
        {
            title: 'Frontend project',
            description: 'Web Design',
            bgImage: '/work-1.jpg',
        },
        {
            title: 'Geo based app',
            description: 'Mobile App',
            bgImage: '/work-2.png',
        },
        {
            title: 'Photography site',
            description: 'Web Design',
            bgImage: '/work-3.jpg',
        },
        {
            title: 'UI/UX designing',
            description: 'UI/UX Design',
            bgImage: '/work-4.jpg',
        },
    ]
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
       <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
       <h2 className='text-center text-5xl font-Ovo'>My latest Work</h2>
   <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
    Welcome to my web development portfolio!Explore a collection of projects showcasing my expertise in full-stack development.</p>
   
   <div className='grid grid-cols-1 md:grid-cols-4 gap-6 '>
    {workData.map((project, index)=>(
        <div key={index} 
        className=' flex  rounded-lg overflow-hidden group cursor-pointer'>
                <Image 
                    src={project.bgImage} 
                    width={80} 
                    height={80} 
                    alt="bg"
                    className="w-50 h-50 "
                />
               
                
           
        </div>
    ))}
   </div>
   <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 mt-5 px-10 mx-auto '>Show More<Image src="/right-arrow-bold.png" width={20} height={20} alt="arrow-right" className='w-4'/></a>
   
    </div>
  )
}

export default Work
