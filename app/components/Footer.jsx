import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div classNane='mt-20'>
      <div className="text-center">
        <Image src="/logo.png" width={30} height={30} alt="logo" className='w-36 mx-auto mb-2'/>
      <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src="/mail_icon.png" width={24} height={20} alt="email"/>
     tirthmewada12345@gmail.com
      </div>
      
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Copyright 2025 Tirth Mewada.All Rights Reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
            <li>
                <a target='_blank' href="/github.com">Github</a>
            </li>
            <li>
                <a target='_blank' href="/github.com">LinkedIn</a>
            </li>
            <li>
                <a target='_blank' href="/github.com">Twitter</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
