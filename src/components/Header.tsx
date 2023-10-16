"use client"
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (
    <div className="clip-polygon h-screen -mt-1 flex items-center bg-[#0F1F36]">
      <div className='cont data-aos="zoom-in" data-aos-duration="450" data-aos-delay="50"'>
        <h1 className="text-4xl md:text-6xl w-[80%]">
          I'm a software Frontend engineer specializing
          in creating user-friendly web interfaces. Proficient in
          <span className="text-3xl ml-3">&#123;</span>
          <TypeAnimation
            className=' mx-auto md:mx-0 bg-gradient-to-r text-center
            from-[#d2c96c] to-[#666334]  text-transparent bg-clip-text'
            sequence={[
              'JavaScript',
              1000,
              'TypeScript',
              1000,
              'React',
              1000,
              'Vue',
              1000
            ]}
            wrapper="span"
            speed={20}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          <span className="text-3xl -ml-3">&#125;</span>
        </h1>
      </div>
    </div>
  )
}

export default Header