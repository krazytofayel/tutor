'use client'

import { useState } from "react"

import aboutsideimg from "../../../public/assets/AboutUs/about-us-side-banner.png";
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from 'react-icons/hi';
import homebg3 from '../../../public/assets/images/homepage/bgimg3.png'
import { useForm } from 'react-hook-form';

import Image from "next/image";
import ImageUpload from "../Components/ShareAbleComponent/Helper/ImageUpload/ImageUpload";
import Navbar from "../Components/ShareAbleComponent/Navbar/Navbar";
import Footer from "../Components/ShareAbleComponent/Footer/Footer";

const BecomeaTutor = () => {
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

 
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


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



      <section className=" bg-[#2C6777]">
        <div className="container mx-auto lg:py-14 md:py-10 ">
          <div className=" mx-auto flex flex-wrap  md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem]">
                <h1 className="text-white text-center md:text-start text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Be an Educator
                </h1>

                <p className="leading-relaxed text-center md:text-start xl:text-[20px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                  Join us in shaping the future of our students, and embark on a rewarding journey as an integral member of our tutoring program. Your passion for teaching will find a meaningful home here.
                </p>
              </div>
            </div>

            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center flex justify-center md:justify-end">
              <Image alt="Top-Banner-Side-Image" className=" " src={aboutsideimg} />
            </div>
          </div>
        </div>
      </section>

          <section className="Home_Secound_Banner ">
        <div className="container  mx-auto  py-10 lg:py-28 md:py-20  ">
          <div className=" mx-auto flex flex-wrap   md:flex-row flex-col items-center">
            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full  lg:h-auto h-auto object-cover object-center flex justify-center md:justify-start">
              <Image alt="Top-Banner-Side-Image" className=" " src={homebg3} />
            </div>
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full md:pl-10 lg:pl-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">

              <div className="xl:w-[45rem] text-center p-1 md:p-0 md:text-start">
                <h1 className="text-[#2c6777]  text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                Benefits of tutoring with us
                </h1>

                <p className="leading-relaxed xl:text-[20px] text-lg  text-gray-800 mb-4 lg:font-semibold md:font-semibold font-normal">
                The benefits of tutoring with us extend beyond the classroom, as we invite educators like you to join our dynamic tutoring program. As part of our team, you'll have the opportunity to make a lasting impact on the lives of eager learners, helping them unlock their full academic potential.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">


          <div className="container mx-auto">


            <h3 className="text-3xl text-[#2c6777] font-bold mb-2 py-2 ml-3">Get in Touch</h3>
            <div className="grid grid-cols-12 gap-5  p-2">

              <div className="col-span-12 ">

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="">
                    <div className="form_Contant bg-white rounded-xl p-4">
                      <div className="grid grid-rows-2 gap-2 grid-flow-col">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 caret-green-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your first name" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Hourly Fee:</label>
                          <input type="number" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your Hourly Pay" required


                            {...register('Last_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Last_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Your Tagline:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required


                            {...register('Enter your Tagline')}
                          />
                        </div>

                        <div className="row-start-1 row-end-3 ">
                          <ImageUpload />
                        </div>






                      </div>

                      {/* <div className="grid md:grid-cols-2 mt-10 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number:</label>
                          <input type="number" id="Phone_Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your phone number" required

                            {...register("Phone_Number")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address:</label>
                          <input type="text" id="Email_Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required

                            {...register("Email_Address")}

                          />
                        </div>

                      </div> */}
                      <div className="grid md:grid-cols-3 mt-10 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900">Country:</label>
                          <select
                            id="Country"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            defaultValue=""
                            required
                            {...register("Country")}
                          >
                            <option value="" disabled hidden>
                              Select your country
                            </option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>

                          </select>
                        </div>

                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900">City:</label>
                          <select
                            id="Country"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            defaultValue="" // Set default value if needed
                            required
                            {...register("Country")} // Assuming this is the name for the form control
                          >
                            <option value="" disabled hidden>
                              Select your country
                            </option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            {/* Add more options as needed */}
                          </select>
                        </div>

                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Zip Code:</label>
                          <input type="text" id="Email_Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter zip code" required

                            {...register("Email_Address")}

                          />
                        </div>

                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Language:</label>
                        <select
                          id="Country"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          defaultValue="" // Set default value if needed
                          required
                          {...register("Country")} // Assuming this is the name for the form control
                        >
                          <option value="" disabled hidden>
                            Select languages you know
                          </option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">I Can Teach On:</label>
                        <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required

                          {...register("Subject")}
                        />
                      </div>


                      <div className="mb-2">

                        <label className="block mb-2 text-sm font-medium text-gray-900 ">A Short Brief</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>

                      </div>
                      <div>
                        <button type="submit" className="text-white bg-[#2c6777] hover:bg-[#2c6777] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button></div>

                    </div>








                  </div>


                </form>



              </div>
              <div className="col-span-12  ">

                <div>
                  <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow">

                    <h5 className="mb-3 p-2 text-base font-semibold bg-[#2c6777] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                      Contact Details
                    </h5>


                    <div className="p-4">
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your phone Number" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Email Address:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your email" required


                            {...register('Last_Name')}
                          />
                        </div>

                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Street Address:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your address" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Date Of Birth:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your date of birth" required


                            {...register('Last_Name')}
                          />
                        </div>

                      </div>

                      <div className="text-end">
                        <p className="inline text-sm font-medium mr-5">Save & Update your details information</p>

                        <button className="bg-[#2c6777]  text-sm text-white font-normal px-3 py-2 rounded">save&upload</button>
                      </div>
                    </div>

                  </div>



                </div>
              </div>
            </div>
          </div>


        </div>

      </section>
   

      <section className="">
                <Footer />
            </section>

    </>
  )
}

export default BecomeaTutor
