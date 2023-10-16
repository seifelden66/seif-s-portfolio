"use client"
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar } from '../Redux/slices/sidebarSlice';
import { useState } from 'react';
import Link from "next/link"

function Sidebar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseSidebar = () => {
    setIsClosing(true); // Start the closing animation
    setTimeout(() => {
      dispatch(closeSidebar());
      setIsClosing(false); // Reset the state after the animation duration
    }, 500); // Adjust this time to match your animation duration
  };

  if (!isOpen) {
    return null;
  }

  return (
    <aside className={`transition duration-500 ease-in-out animate__animated ${isClosing ? 'animate__fadeOutRight' : 'animate__fadeInRight'}
     fixed w-52 bg-slate-950 min-h-screen top-0 p-3 right-0 z-50`}>
      <div className='flex flex-col items-start'>
        
        <div className='h-6 w-6 rounded-full border-2 text-3xl border-red-700 relative cursor-pointer mb-6' onClick={handleCloseSidebar}>
          <div className='absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-red-700' >x</div>
        </div>
        <Link href="#hero" >_HOME</Link>
        <Link href="#about" >_ABOUT</Link>
        <Link href="#skills" >_SKILLS</Link>
        <Link href="#projects" >_PROJECTS</Link>
        <Link href="#contact" >_CONTACT</Link>
        
      </div>
    </aside>
  );
}

export default Sidebar;
