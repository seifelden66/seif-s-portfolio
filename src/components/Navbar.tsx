import Link from "next/link"
import { useDispatch } from 'react-redux';
import { openSidebar } from '../Redux/slices/sidebarSlice'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
    const dispatch = useDispatch();

    const handleOpenSidebar = () => {
        dispatch(openSidebar());
    };

    return (
        <div className=" text-2xl items-center bg-black sticky top-0 z-10 ">
            <div className="cont flex justify-between items-center  ">
                <div className="flex flex-col">
                    <h1 className="text-4xl">&frasl;&frasl;SEIF</h1>
                    <h1 className="text-sm md:text-lg text-white">web_developer</h1>
                </div>
                <div id="right" className="hidden md:flex gap-5">
                    <a href="#hero" >_HOME</a>
                    <a href="#about" >_ABOUT</a>
                    <a href="#skills" >_SKILLS</a>
                    <a href="#projects" >_PROJECTS</a>
                    <a href="#contact" >_CONTACT</a>

                </div>
                <div className="md:hidden cursor-pointer" onClick={handleOpenSidebar}>
                    <GiHamburgerMenu />
                </div>
            </div>

        </div>
    )
}

export default Navbar