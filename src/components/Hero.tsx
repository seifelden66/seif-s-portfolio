"use client"

const Hero = () => {
  return (
    <div  className='-mt-20 clip-pentagon h-screen bg-slate-950 py-2 flex items-center'>

      <div data-aos="fade-in" data-aos-duration="450" data-aos-delay="50" className="cont md:grid md:grid-cols-[1.2fr,3.25fr] flex justify-around text-center md:text-left flex-col items-center gap-4 md:gap-24 md:px-2">
        <div id="right">
          <div className="bg-[#d2c96c] rounded-full p-3">
            <img
              className='rounded-full h-40 w-40 sm:h-52 sm:w-52 md:h-72 md:w-72'
              alt="seif"
              src="/seif.png"
            />
          </div>
        </div>
        <div id="left" className="text-center md:text-left">
          <h1 className=' font-bold text-[#212020] drop-shadow-[0_.8px_.8px_#d2c96c] md:text-3xl'>HELLO THERE</h1>
          <div className='flex items-center'>
            I am a passionate web developer holding computer science degree from Damietta University and living in damietta
            As a passionate web developer, I have the skills and experience that make me a great fit for this role.
            I have mastered HTML, pugjs, CSS, SCSS, JavaScript, Vue, Nuxt, React, next and typescript,
            which allow me to create scalable and efficient web applications that satisfy both users and businesses
            Furthermore, I am always eager to learn new things and keep
            up with the latest industry trends and technologies, so I can deliver outstanding user experiences for your organization.
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero