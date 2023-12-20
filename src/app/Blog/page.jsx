'use client'
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import { motion } from "framer-motion";

import BlogpageMainCarddata from '../Components/ShareAbleComponent/Data/BlogPageMainCardData/BlogPageMainCardData.json'
import Blogepagecarddata from '../Components/ShareAbleComponent/Data/BlogPageCardData/BlogPageCardData.json'
import Blogpagecard from '../Components/props/BlogPageCard/Blogpagecard'
import BlogPageMainCard from '../Components/props/BlogPageMainCard/BlogPageMainCard'
import Badge from "../Components/ShareAbleComponent/Badge/page";
import Navbar from "../Components/ShareAbleComponent/Navbar/Navbar";
import Footer from "../Components/ShareAbleComponent/Footer/Footer";



const Blog = () => {


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


  const [showCount, setShowCount] = useState(2);
  const { register, handleSubmit, setValue, watch } = useForm();
  const searchValue = watch('search', '');
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    console.log("Search Value:", searchValue);
  };

  const handleClick = (buttonValue) => {
    setValue('search', buttonValue);
    console.log("Button clicked with value:", buttonValue);
  };
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    const selectedSubjectsNames = selectedSubjects.map(id => {
      const subject = ButtonData.find(item => item.id === id);
      return subject ? subject.buttoncontant : null;
    }).filter(Boolean);

    console.log("Selected Subjects:", selectedSubjectsNames);
  }, [selectedSubjects]);

  const handleCheckboxChange = (id) => {
    setSelectedSubjects(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }

  const handleLoadMore = () => {
    setShowCount(ButtonData.length);
    // setSelectedSubjects(ButtonData.map(subject => subject.id));
  }
  const ButtonData = [
    { id: 1, buttoncontant: "Culture" },
    { id: 2, buttoncontant: "Creativity" },
    { id: 2, buttoncontant: "Food" },
    { id: 2, buttoncontant: "Travel" },
    { id: 2, buttoncontant: "Music" },
    { id: 2, buttoncontant: "Cricket" },
    { id: 2, buttoncontant: "Football" },
    { id: 2, buttoncontant: "Tution" },

  ];


  const [selectedStars1, setSelectedStars1] = useState([]);
  const [selectedStars2, setSelectedStars2] = useState([]);
  const handleClearFilter = (setSelectedStars) => {
    setSelectedStars([]);
  };
  //pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BlogpageMainCarddata.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPage)
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

      <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
            <div className="">

              <motion.h3 initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">Welcome to Our Blog</motion.h3>
              <motion.p initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="max-w-lg text-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry </motion.p>
              <motion.div initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="grid grid-cols-12 gap-4 xl:gap-10  p-2 mt-10">


                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">





                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 xl:gap-10  p-2 lg:p-0">


                    {
                      currentItems.map((blogmaincardprop) => (

                        <BlogPageMainCard key={blogmaincardprop.id} blogmaincardprop={blogmaincardprop} />

                      ))
                    }

                  </div>
                  <div className="flex justify-center mt-4">
                    {BlogpageMainCarddata.length > itemsPerPage && (
                      <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-sm">
                          <li>
                            <button
                              onClick={() => {
                                if (currentPage > 1) {
                                  paginate(currentPage - 1);
                                }
                              }}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              Previous
                            </button>
                          </li>
                          {Array.from({ length: Math.ceil(BlogpageMainCarddata.length / itemsPerPage) }, (_, i) => (
                            <li
                              key={i}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${i + 1 === currentPage ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              <button onClick={() => paginate(i + 1)} className="pagination-link">
                                {i + 1}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              onClick={() => {
                                if (currentPage < (BlogpageMainCarddata.length / itemsPerPage)) {
                                  console.log(currentPage)
                                  paginate(currentPage + 1);
                                }
                              }}
                              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg ${currentPage === Math.ceil(BlogpageMainCarddata.length / itemsPerPage)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-100 hover:text-gray-700"
                                }`}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    )}
                  </div>






                </div>


                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">

                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="relative">
                        <input
                          type="search"
                          id="search"
                          {...register('search')}
                          value={searchValue}
                          onChange={(e) => setValue('search', e.target.value)}
                          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"

                          required
                        />
                        <button
                          type="submit"
                          className="text-white absolute right-2 bottom-[5px] bg-[#2c6777]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 "
                        >
                          Search
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3 mb-3">
                        {ButtonData.map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            className="text-black bg-white hover:bg-[#089bab] px-2 py-1 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-full text-sm  text-center inline-flex items-center"
                            onClick={() => handleClick(btn.buttoncontant)}
                          >
                            {btn.buttoncontant}
                            <RxCross2 className="ml-3 h-3.5 w-3.5" />
                          </button>
                        ))}
                      </div>
                    </form>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow ">

                 




                      <div className="p-3">


                        <h3 className="mb-4 font-semibold text-gray-900 ">Categories</h3>





                        {ButtonData.slice(0, showCount).map((subject) => (
                          <div key={subject.id} className="flex items-center mb-4 border-gray-200 border-b-2">
                            <input
                              id={`default-checkbox-${subject.id}`}
                              type="checkbox"
                              checked={selectedSubjects.includes(subject.id)}
                              onChange={() => handleCheckboxChange(subject.id)}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                            />
                            <label
                              htmlFor={`default-checkbox-${subject.id}`}
                              className="ml-2 text-sm font-medium text-gray-900 "
                            >
                              {subject.buttoncontant}
                            </label>
                          </div>
                        ))}
                        {showCount === 2 && (
                          <button onClick={handleLoadMore} className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2">
                            Load More
                          </button>
                        )}



                      </div>









                    </div>
                    <div >


                      {
                        Blogepagecarddata && Blogepagecarddata.map((blogcardprop) => (

                          <Blogpagecard key={blogcardprop.id} blogcardprop={blogcardprop} />
                        ))
                      }













                    </div>


                  </div>
                </div>


              </motion.div>
            </div>




            <Badge title={'Create Tutor2u account now'} body_text={'Join us and start your journey towards excellence.'} btn_text={'Request a Tutor'}></Badge>
          </div>
        </div>
      </section>
      <section className="">
                <Footer />
            </section>

    </>
  )
}
export default Blog