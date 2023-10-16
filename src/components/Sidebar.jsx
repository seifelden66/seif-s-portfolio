import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar } from '../Redux/slices/sidebarSlice';
import { useState } from 'react';
import Link from "next/link"
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Sidebar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseSidebar = () => {
    setIsClosing(true); 
    setTimeout(() => {
      dispatch(closeSidebar());
      setIsClosing(false); 
    }, 500); 
  };

  if (!isOpen) {
    return null;
  }

  return (
    <aside className={`transition duration-500 ease-in-out animate__animated ${isClosing ? 'animate__fadeOutRight' : 'animate__fadeInRight'}
     fixed w-52 bg-slate-950 min-h-screen top-0 p-3 right-0 z-50`}>
      <div className='flex flex-col items-start gap-7 text-2xl'>
        
        <div className='cursor-pointer text-red-600 text-4xl hover:scale-105 transition' onClick={handleCloseSidebar}>
          <AiOutlineCloseCircle />
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
