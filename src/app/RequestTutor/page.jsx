'use client'
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Components/ShareAbleComponent/Navbar/Navbar';
import Footer from '../Components/ShareAbleComponent/Footer/Footer';

const RequestTutor = () => {

  
  const [navfix, setNavfix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (typeof window !== "undefined" && window.scrollY >= 70) {
        setNavfix(true);
        //console.log(scrollY)
      } else {
        setNavfix(false);
      }
    }
    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setFixed);
    }
  
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", setFixed);
      }
    };
  }, []);



  const [myValue, setMyValue] = useState("");
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmitButton = (data) => {
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

      {/* Request tutor top banner start */}


      <section className="bg-[#2C6777] ">
        <div className="xl:w-[55rem] lg:w-[38rem] mx-auto py-24 text-center">
          <h1 className="text-white text-[35px] xl:text-[50px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
            Request a Tutor
          </h1>
          <p className="leading-relaxed xl:text-[24px] text-xl text-white mb-4 lg:font-medium  md:font-semibold font-medium  mx-4">
            Looking for your desired tutor at Tutor2U? let us do the work for you.If you need a tutor, fill out the form below. We will contact you.

          </p>
        </div>

      </section>


      {/* Request Tutor top banner end */}


      {/* form start */}
      <section className="Contact_Us_Middle ">
        <div className="bg-[#DCECFA] p-2 md:p-10 lg:p-16">



          <div className="container mx-auto">


            {/* <h3 className="text-lg font-normal md:mx-6 mx-4 mb-2  lg:text-start text-center">If you need a tutor, fill out the form below. We will contact you.</h3> */}
            <div className="grid grid-cols-12 gap-5 lg:gap-12 p-2">

              <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">


                <form action="" onSubmit={handleSubmit(onSubmitButton)}>
                  <div className="">
                    <div className="form_Contact bg-white rounded-xl p-4 py-10">
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Full Name:</label>
                          <input type="text" id="full_name" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " placeholder="Enter your first name" required

                            {...register('full-name')}
                          />
                        </div>
                        <div className="mb-2">

                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Medium:</label>

                          <select
                            onChange={(e) => setMyValue(e.target.value)}
                            defaultValue={myValue} className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 "
                          >
                            <option>Bangla</option>
                            <option>English</option>
                            <option>Arabic</option>
                          </select>

                        </div>


                      </div>

                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">

                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Class:</label>
                          {/* <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                            <option selected>Select Class</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select> */}
                          <select
                            onChange={(e) => setMyValue(e.target.value)}
                            defaultValue={myValue} className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 "
                          >
                          <option selected>Select Class</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>

                        </div>

                        <div className="mb-2">
                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Subject:</label>
                          <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                            <option selected>All Subject</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>



                      </div>

                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Student Institute Name:</label>
                        <input type="text" id="institute-name" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5" placeholder="Enter Institute Name" required

                          {...register("institute-name")}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">

                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Days per Week:</label>
                          <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                            <option selected>3 days/week</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>

                        </div>
                        <div className="mb-2">

                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Gender of Student:</label>
                          <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                            <option selected>Any gender</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>

                        </div>





                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="mb-2">

                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Salary Range:</label>
                          <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                            <option selected>Salary Range</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>

                        </div>
                        <div className="mb-2">

                          <label className="block mb-2 text-sm font-medium text-gray-900 ">Desired Tutor Gender:</label>
                          <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg  p-2.5 ">
                            <option selected>Any gender</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>

                        </div>

                      </div>
                      <div className="mb-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Detail Address:</label>
                        <textarea type="text" rows="2" id="detail-address" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg" placeholder="Enter detail address" required


                          {...register('detail-address')}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="mb-2">
                          <div className="mb-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Mobile Number:</label>
                            <input type="text" id="mobile-number" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg " placeholder="Enter your detail number" required

                              {...register('mobile-number')}
                            />
                          </div>

                        </div>

                        <div className="mb-2">

                          <div className="mb-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Email Address:</label>
                            <input type="text" id="email-address" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg " placeholder="Enter your email address" required

                              {...register('email-address')}
                            />
                          </div>

                        </div>

                      </div>

                      <div className="mb-2">

                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Additional Info in details (if multiple subject mention here):</label>
                        <textarea id="message" rows="4" className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg" placeholder="Additional details"></textarea>

                      </div>
                      <div className=" flex gap-2 flex-wrap justify-start">
                        <div className="  lg:text-left ">
                          <button type="submit" className=" text-white bg-[#2c6777] hover:bg-[#2c6777] focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Request Tutor</button>
                        </div>
                        <div className=" flex gap-2 ">
                          <input type="checkbox" name="" className=" accent-[#2c6777]" id="" />
                          <p className="  lg:text-left text-center my-2">Apply now if you need tution for your study</p>


                        </div>




                      </div>

                    </div>




                  </div>


                </form>



              </div>
              <div className="col-span-12 md:col-span-12 lg:col-span-3">


                <div className=" w-auto bg-white border border-gray-200 rounded-lg shadow pb-8">

                  <h5 className="mb-3 p-2 text-base font-semibold bg-[#2c6777] text-white text-center  rounded-t-lg  border-b-2 w-full md:text-xl ">
                    Do You Have Any Questions?
                  </h5>


                  <div className="mb-2 p-4">
                    <h3 className="font-bold text-gray-800 text-sm">Q. If i cant get the desired tutor ?</h3>
                    <p className="text-sm">Just fill up the Request for a tutor form and submit request. We will try to give you the tutor according to your choice.</p>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 text-sm">Q. If i cant get the desired tutor ?</h3>
                    <p className="text-sm">Just fill up the Request for a tutor form and submit request. We will try to give you the tutor according to your choice.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>




      </section>
      {/* form end */}
      <section className="">
                <Footer />
            </section>
    </>
  )
}

export default RequestTutor
