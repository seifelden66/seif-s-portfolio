"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (form.current && form.current.user_name && form.current.user_name.value.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.current && form.current.email && !emailRegex.test(form.current.email.value.trim())) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate message
    if (form.current && form.current.message && form.current.message.value.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          'service_i11hp9a',
          'template_9z5vuvq',
          form.current,
          'TFVlnwEFsCigeBT-c'
        )
        .then(
          (result) => {
            form.current.reset();
            setErrors({});
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (

    <div className=" h-screen flex items-center">
      <div className="cont" data-aos="fade-in" data-aos-duration="450" data-aos-delay="50">
        <div className="text-center">
          <h1 className="text-3xl">contact me</h1>
        </div>
        <div className="grid md:grid-cols-[.8fr,.8fr] md:gap-16">
          <form ref={form} onSubmit={sendEmail} >
            <div>
              <h1 className='text-lg'>
                Dropping a line to say g’day, ask for my resume or see if we can build something amazing together? I’d love to hear from you!
                Fill in your info in the form below and I look forward to hearing from you!
              </h1>
              <div className='grid gap-3'>
                <div className='grid gap-3 md:grid-cols-2 w-full'>
                  <div className="relative">
                    <input className="
                    border-2 
                  border-[#d2c96c]
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    bg-inherit
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                    invalid:border-b-1
                    "
                      placeholder=" "
                      type="text" id="name" name="user_name"
                    />
                    <label
                      htmlFor='name'
                      className="
                      absolute 
                      text-md
                    text-zinc-400
                      duration-150 
                      transform 
                      -translate-y-3 
                      scale-75 
                      top-4 
                      z-10 
                      origin-[0] 
                      left-6
                      peer-placeholder-shown:scale-100 
                      peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75
                      peer-focus:-translate-y-3
                    ">
                      name
                    </label>
                  </div>
                  <div className="relative">
                    <input className="
                     border-2 
                   border-[#d2c96c]
                     block
                     rounded-md
                     px-6
                     pt-6
                     pb-1
                     w-full
                     text-md
                     bg-inherit
                     appearance-none
                     focus:outline-none
                     focus:ring-0
                     peer
                     invalid:border-b-1
                    "
                      placeholder=" "
                      type="text" id="email" name="email"
                    />
                    <label
                      htmlFor='email'
                      className="
                      absolute 
                      text-md
                    text-zinc-400
                      duration-150 
                      transform 
                      -translate-y-3 
                      scale-75 
                      top-4 
                      z-10 
                      origin-[0] 
                      left-6
                      peer-placeholder-shown:scale-100 
                      peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75
                      peer-focus:-translate-y-3
                    ">
                      email
                    </label>
                  </div>
                </div>


                <div className="relative">
                  <textarea className="
                    border-2 
                    border-[#d2c96c]
                      block
                      rounded-md
                      px-6
                      pt-6
                      h-40
                      w-full
                      text-md
                      bg-inherit
                      appearance-none
                      focus:outline-none
                      focus:ring-0
                      peer
                      invalid:border-b-1
                    "
                    placeholder=" "
                    id="message" name="message"
                  />
                  <label
                    htmlFor='message'
                    className="
                      absolute 
                      text-md
                    text-zinc-400
                      duration-150 
                      transform 
                      -translate-y-3 
                      scale-75 
                      top-4 
                      z-10 
                      origin-[0] 
                      left-6
                      peer-placeholder-shown:scale-100 
                      peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75
                      peer-focus:-translate-y-3
                    ">
                    message
                  </label>
                </div>
              </div>
              {errors.name && <div className="text-red-500">{errors.name}</div>}
              {errors.email && <div className="text-red-500">{errors.email}</div>}
              {errors.message && <div className="text-red-500">{errors.message}</div>}
              <div className='mt-5'>
                <button className="text-center border-2 border-[#d2c96c] p-1 px-2" type="submit" value="Send"> submit </button>
              </div>
            </div>
          </form>
          <div className=''>
            <h1 className="text-center text-3xl">Feeling social? Find me on these online spaces too!</h1>
            <div className='flex justify-around items-center mt-6 text-3xl'>
              <Link href="https://x.com/Seifelden66?t=M6Ne4NNoEI2mcimVpCRuUA&s=09" className=' hover:text-yellow-800 hover:scale-105 transition'><FaXTwitter /></Link>
              <Link href="https://www.facebook.com/seifelden.mohammed.5/" className='hover:text-yellow-800 hover:scale-105 transition'><FiFacebook /></Link>
              <Link href="https://github.com/seifelden66" className='hover:text-yellow-800 hover:scale-105 transition'><AiFillGithub /></Link>
              <Link href="https://www.linkedin.com/in/seif-elden-mohammed-426aa0197/" className='hover:text-yellow-800 hover:scale-105 transition'><AiOutlineLinkedin /></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

