'use client'
import Image from 'next/image'

import { useState } from "react";

import homebg3 from "../../public/assets/images/homepage/bgimg3.png";
import homebg1 from "../../public/assets/images/homepage/Maskgroup.png";
import SubjectCard from './Components/props/SubjectCard/SubjectCard';
import carddata from './Components/ShareAbleComponent/Data/HomeSubjectCardData/HomeSubjectCardData.json'

import exploretutordata from './Components/ShareAbleComponent/Data/TProfileCardData/tprofilecarddata.json'
import ExploreTutor from './Components/props/ExploreTutor/ExploreTutor';
import Slider from './Components/ShareAbleComponent/Helper/Slider/Slider';
import Footer from './Components/ShareAbleComponent/Footer/Footer';
import Navbar from './Components/ShareAbleComponent/Navbar/Navbar';
export default function Home() {

  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [loadmore, setLoadMore] = useState(4);
  function handleLoadMore() {
    setLoadMore((prevNum) => prevNum + 3);
  }
  return (
<>
<div
        className={`z-20  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbar className="relative " />
      </div>
<section className="h-full w-full place-items-center bg-[#ffffff]   relative py-14 lg:mb-20 ">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-10">
            <div className="mb-8 inline-flex items-center">
              <p className="block antialiased font-sans text-sm leading-normal mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark text-[#9fa8ab]">
                New
              </p>
              <p className="antialiased  text-sm  leading-normal text-inherit flex items-center font-bold uppercase">
                want to find tutors.
              </p>
            </div>
            <h1 className="block antialiased tracking-normal text-[#2c6777]  text-5xl text-blue-gray-900 mb-8 lg:mr-32 leading-tight font-black">
              We help you find{" "}
              <span className="text-[#2c6777]">and manage Best tutors.</span>
            </h1>
            <p className="block antialiased  text-xl font-normal leading-relaxed text-blue-gray-900 lg:pr-32">
            Skilled and Emotionally Intelligent Educators that will make learning exciting and engaging.
            </p>
            <div className="mt-2 ">
              <form className="max-w-xl mt-10 p-2 md:p-0 lg:p-0">
                <label className=" text-sm font-medium text-gray-900 sr-only ">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 mt-1 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search tutor,subject..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2 bottom-[5px] bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 "
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Image
            src={homebg1}
            alt="components"
            className="absolute h-full top-0 right-0  "
          />
        </div>
      </section>

      <section className="Home_Secound_Banner ">
        <div className=" mx-auto container  py-10 lg:py-28 md:py-20  ">
          <div className=" mx-auto flex flex-wrap   md:flex-row flex-col items-center">
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full  lg:h-auto h-auto object-cover object-center flex justify-center md:justify-start">
              <Image alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full md:pl-10 lg:pl-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem] text-center p-1 md:p-0 md:text-start">
                <h1 className="text-[#2c6777] antialiased  text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Why choice tutor2u?
                </h1>

                <p className="leading-relaxed antialiased xl:text-[20px] text-lg  text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                  We have an astounding success in teaching with our skilled and
                  passionate educators who does the work with love and
                  exellence. Your path to excellence starts with the right tutor
                  by your side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Home_Third_Banner bg-[#dcecfa]">
        <div className="container  py-10 lg:py-28 md:py-14 md:p-2  mx-auto ">
          <div className=" mx-auto flex flex-wrap  md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem] text-center p-1 md:p-0 md:text-start">
                <h1 className="text-[#2c6777]  text-[23px] xl:text-[40px] lg:text-[30px] md:text-[25px] title-font font-bold mb-4 ">
                  Talented and Qualified Tutors to Serve You for Help
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                  Our beloved experts worked so hard to earn their success in
                  their expertise, the love to teach and make every lesson
                  intelligible are what makes them valuable.
                </p>
              </div>
            </div>
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center  flex justify-center md:justify-end">
              <Image alt="Top-Banner-Side-Image" width={'500'}  height={'500'} className="  " src={'https://learnmate.com.au/wp-content/uploads/2023/10/penny-graphics.svg'} />
            </div>
          </div>
        </div>
      </section>


      {/* subject Card start  */}
      <section className="div3-Section w-full container mx-auto ">
        <div className=" mt-16 mb-16">
          <div>
            <div className=" p-5 md:p-0  ">
              <h1 className=" text-[24px] max-w-3xl text-[#2c6777]  xl:text-[30px] lg:text-[30px] md:text-[27px] mx-auto text-center  font-[650] mb-10">
                Time to elevate your learning, Find a tutor in any subject
                below.
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center items-center   gap-5 mb-10 ">
                {carddata.map((carditem) => (
                  <SubjectCard key={carditem.id} carditem={carditem}></SubjectCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Subject Card end */}

      {/* Tutor Profile card start */}
      <section className="div3-Section w-full bg-[#dcecfa] ">
        <div className=" mt-25 mb-20  container mx-auto">
          <div className=" p-5 md:p-0 ">
            <h1 className="text-[24px] text-[#2c6777] xl:text-[30px] lg:text-[30px] md:text-[27px] text-center py-16  font-[650] max-w-xl mx-auto ">
              Every Tutor is Professional and Highly Qualified
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  p-2 md:p-0 justify-items-center     ">
            {exploretutordata.slice(0, loadmore).map((exploretutordata) => (
              <ExploreTutor
                key={exploretutordata.id}
                exploretutordata={exploretutordata}
                handleLoadMore={handleLoadMore}
              ></ExploreTutor>
            ))}
          </div>
          <div className="text-center lg:mt-2 ">
            {exploretutordata.length > loadmore && (
              <button
                onClick={handleLoadMore}
                className="bg-[#2c6777] hover:bg-[#2c6777]  mb-10  text-white font-bold py-2 px-9 rounded-md "
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tutor Profile card end */}
      {/* Slider start */}
      <section className="p-2  mb-20">
        <div className="  ">
          <h1 className="text-[24px] text-[#2c6777]  xl:text-[30px] lg:text-[30px] md:text-[27px] text-center mb-10   font-[650] max-w-xl mx-auto ">
            Let students speak for us
          </h1>
        </div>
        <Slider></Slider>
      </section>
      {/* Slider end */}

      <section className="">
        <Footer />
      </section>


</>
  )
}
