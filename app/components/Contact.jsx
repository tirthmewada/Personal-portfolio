import React from "react";
import Image from "next/image";
import { useState } from "react";
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "39df39c5-e158-4f1c-a3e3-59ddd0b661a2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
     I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</p>
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto ">
      <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
        <input type="text" placeholder="Enter your name" 
        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 
        rounded-md bg-white" name='name' required />
        <input type="email" placeholder="Enter your email"   
        className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md
         bg-white" name='email' required />
        
        
        </div> 
        <textarea rows='6' placeholder='Enter Your Message'  
        className="w-full flex-1 p-4 outline-none border-[0.5px] border-gray-400 rounded-md
         bg-white mb-6" name='message'  required></textarea> 
        <button type='submit' 
        className='py-3 px-8 w-max flex items-center justify-between gap-2
        bg-black/80 text-white rounded-full mx-auto '>Submit Now
        <Image src="/right-arrow-white copy.png" width={20} height={20} alt="wright"/></button>
    
    <p className="mt-4">{result}</p>
    </form>
    </div>
    
  );
};

export default Contact;
