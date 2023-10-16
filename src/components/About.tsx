const About = () => {
    return (
        <div className="cont flex flex-col gap-20 justify-center text-base md:text-xl h-screen" >
            <div data-aos="zoom-in" data-aos-duration="450" data-aos-delay="50">
                <div className="text-6xl  text-center"><p>ABOUT_ME</p></div>
                <div className='md:grid md:grid-cols-[3fr,.5px,3fr] md:gap-6'>
                    <div className="">
                        <p className=''>
                            I am a computer science graduate from Damietta University with
                            experience in front end development using Vue, React and next with a solid understaning of backend development.
                            I am committed to continuous learning and improving skills, while ensuring that I keep up to
                            date with the latest developments in web development.
                        </p>
                    </div>
                    <div className="bg-[#d2c96c] opacity-25 " />
                    <div className="">
                        <div className="grid grid-cols-[1fr,1.4fr] place-items-center md:place-items-start">
                            <div>NAME : SEIF_ELESAWY</div>
                            <div>EMAIL : Seifelden66@gmail.com</div>
                            <div>PHONE : +201021732422</div>
                            <div>COUNTRY : EGYPT</div>
                        </div>
                        <div className="">
                            <h1 className='text-3xl text-center md:text-left font-bold text-[#212020] drop-shadow-[0_.8px_.8px_#d2c96c] '>EDUCATION</h1>
                        </div>

                        <div className="">
                            <div>BACHELOR OF COMPUTER SCIENCE AND ARTIFICAL INTELLIGENCE</div>
                            <div>DANIETTA UNIVERSITY </div>
                            <div>SEPTEMBER 2019 - MAY : 2023</div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About