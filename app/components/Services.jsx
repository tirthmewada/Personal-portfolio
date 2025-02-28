import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
const Services = () => {
    const serviceData = [
        { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
        { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
        { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
        { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
    ]
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
       <h4 className='text-center mb-2 text-lg font-Ovo'>What i Offer</h4>
       <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
   <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
    I am a full Stack Developer and had attended two hackathons and completed several projects.</p>
    <div className='grid grid-cols-4 gap-6 my-10 '>
{serviceData.map(({icon, title, description, link}, index)=>(
  <div key={index}
  className='border border-gray-400 rounded-lg px-3 mt-2 cursor-pointer'>
    <Image src={icon} alt='' className='w-10'/>
    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
    <p className='text-sm text-gray-600 leading-5'>
        {description}
    </p>
    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
        Read More <Image src="/right-arrow.png" alt="right" width={20} height={20} className='w-4'/>
    </a>
    </div>

  ))}
  </div>
  </div>
  )}
export default Services
