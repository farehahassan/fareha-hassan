import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Fareha Hassan</h3>
        <span>Web and App Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
        Hello,I'm Fareha Hassan, a passionate software engineer with a lifelong dream of diving deeper into the fascinating realms of artificial intelligence and robotics. My journey into software engineering began with a love for mathematics, and as I delved further into this field, my interest in it only grew stronger. Currently, I am a web and app developer, earning a livelihood through my skills.
        </p>
        <p className="mb-[11px]">
        My childhood aspiration was to become a software engineer, and I'm proud to have turned that dream into a reality. However, I believe that learning is a lifelong process, and I'm eager to expand my horizons by venturing into the exciting domains of artificial intelligence and robotics. These fields hold boundless potential for innovation and problem-solving, and I'm committed to exploring their depths to further my knowledge and skills.
        </p>
        <p className="mb-[11px]">
        Throughout my career as a web and app developer, I've honed my problem-solving skills and developed a keen eye for detail. These attributes have been instrumental in my software engineering journey, and I look forward to applying them to the challenges and opportunities that AI and robotics present. My experiences have also reinforced the importance of collaboration and adaptability in the fast-paced world of technology, and I'm excited to carry these values into my exploration of AI and robotics. Together, let's embrace the endless possibilities of these fields and work towards a future where technology empowers and enriches our lives in ways we've only begun to imagine.
        </p>
        <p className="mb-[11px]">
        In closing, I am excited to continue my evolution as a software engineer, and I am determined to bring the magic of AI and Robotics to life. The future holds infinite opportunities to push the envelope and drive innovation, and I am committed to being at the forefront of this technological revolution. As I embark on this exciting journey, I'm reminded of a quote that has been my guiding principle:
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>01.07.1990</span>
              </li>
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>32</span>
              </li> */}
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>Ave 11, New York, USA</span>
              </li> */}
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:hfariha104.com"
                  >
                    hfariha104@gmail.com
                  </a>
                </span>
              </li>
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+77 022 177 05 05"
                  >
                    +77 022 177 05 05
                  </a>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>USA</span>
              </li> */}
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>Univercity of Sindh</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>Bachelor in software engineering</span>
              </li>
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Playing Football</span>
              </li> */}
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/cv.png" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
