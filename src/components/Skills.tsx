import data from '../skills.json'

const Skills = () => {
  return (
    <div id="skills" className='skills py-4 min-h-screen bg-stone-950 flex items-center'>
      <div className='cont' data-aos="fade-in" data-aos-duration="450" data-aos-delay="50">
        <div className="text-center text-2xl md:text-5xl">SKILLS_AND_TOOLS</div>
        <div className="text-center text-xl">The skills, tools and technologies I use to bring your products to life:</div>
        <div className=''>
          <div className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 lg:grid-cols-8 place-items-center text-center md:text-xl'>
            {
              data.map((i) => (
                <div key={i.skill} className='grid place-items-center'>
                  <div className='md:h-20'>
                    <img src={i.logo} alt={i.skill} className='md:h-full' />
                  </div>
                  <h1>{i.skill}</h1>
                </div>
              ))
            }
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skills