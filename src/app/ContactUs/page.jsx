'use client'
import { useState } from "react"

import aboutsideimg from "../../../public/assets/AboutUs/about-us-side-banner.png";
import { HiLocationMarker, HiMail, HiPhoneMissedCall } from 'react-icons/hi';
import { useForm } from 'react-hook-form';

import Image from "next/image";
import Navbar from "../Components/ShareAbleComponent/Navbar/Navbar";
import Footer from "../Components/ShareAbleComponent/Footer/Footer";
const ContactUs = () => {
  const [navfix, setNavfix] = useState()
  const { register, handleSubmit, errors } = useForm(); // initialize the hook

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true)
    } else {
      setNavfix(false)
    }

  }
  window.addEventListener('scroll', setFixed)



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
        <Navbar/>
      </div>


      <section className="ContactUs_Top_Banner bg-[#2C6777]">
        <div className="container mx-auto py-20 ">
          <div className=" mx-auto flex flex-wrap  md:flex-row flex-col items-center">
            <div className="xl:w-4/6 lg:w-2/4 md:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:pr-5">
              <div className="xl:w-[45rem]">
                <h1 className="text-white text-center md:text-start text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                Contact Us
                </h1>

                <p className="leading-relaxed text-center md:text-start xl:text-[24px] text-lg text-white mb-4 lg:font-semibold md:font-semibold font-normal">
                Welcome to Tutor2U. We're here to listen and provide you with the best service tailored to your educational needs. Let's make your thoughts, questions, and feedback the building blocks of our relationship. Get in touch today and let's create connections that matter.
                </p>
              </div>
            </div>

            <div className=" xl:w-2/6 lg:w-2/4  md:w-1/2 w-full lg:h-auto h-auto object-cover object-center flex justify-center md:justify-end">
              <Image alt="Top-Banner-Side-Image" className=" " src={aboutsideimg} />
            </div>
          </div>
        </div>
      </section>

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">


          <div className="container mx-auto">


            <h3 className="text-2xl lg:text-3xl text-[#2c6777] font-bold ml-3 mb-2 mx-3">Get in Touch</h3>
            <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2">

              <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="">
                    <div className="form_Contant bg-white rounded-xl p-4">
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">First Name:</label>
                          <input type="text" id="First_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your first name" required

                            {...register('First_Name')}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
                          <input type="text" id="Last_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your last name" required 
                          
                          
                          {...register('Last_Name')}
                          />
                        </div>

                      </div>

                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number:</label>
                          <input type="number" id="Phone_Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your phone number" required 
                          
                          {...register("Phone_Number")}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Email Address:</label>
                          <input type="text" id="Email_Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter your email address" required  
                          
                          {...register("Email_Address")}
                          
                          />
                        </div>

                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Subject:</label>
                        <input type="text" id="Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter Subject" required 
                        
                        {...register("Subject")}
                        />
                      </div>

                      <div className="mb-2">

                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Comment</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Leave a comment..."></textarea>

                      </div>
                      <div>
                        <button type="submit" className="text-white bg-[#2c6777] hover:bg-[#2c6777] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button></div>

                    </div>




                  </div>


                </form>



              </div>
              <div className="col-span-12 lg:col-span-3 ">

                <div>
                  <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow  ">

                    <h5 className="mb-3 p-2 text-base font-semibold bg-[#2c6777] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                      Do You Have Any Questions?
                    </h5>


                    <div className="p-4 ">

                      <p className="text-sm font-normal text-gray-800 ">Contact us via email or give us a call to enquire about our tutoring services, we’ll do our best to meet your needs.</p>
                      <ul className="my-4 space-y-3">

                        <li>
                          <a href="#" className="flex items-center p-3 text-base font-bold text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                            <HiPhoneMissedCall fontSize={30} />
                            <span className="flex-1 ml-3 whitespace-wrap">+111 222 333 444</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center p-3 text-base font-bold text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                            <HiLocationMarker fontSize={30} />
                            <span className="flex-1 ml-3 whitespace-wrap">Suite no - 25, 4th Floor, Bhuiyan Mansion, 6 Motijheel C/A,
                              Dhaka - 1000 , Bangladesh</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center p-3 text-base font-bold text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
                            <HiMail fontSize={30} />
                            <span className="flex-1 ml-3  whitespace-wrap">www.your@email.com</span>
                          </a>
                        </li>

                      </ul>

                    </div>

                  </div>



                </div>
              </div>
            </div>
          </div>


        </div>

      </section>
      <section className="">
        <Footer/>
      </section>


    </>
  )
}

export default ContactUs