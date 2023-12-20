'use client'
import { useEffect, useState } from 'react';
import tutorprofilecardinfo from '../Components/ShareAbleComponent/Data/Tutorprofilecarddata/Tutorprofilecarddata.json'
import TutorProfile from '../Components/props/TutorProfile/TutorProfile'
import Badge from '../Components/ShareAbleComponent/Badge/page';
import Navbar from '../Components/ShareAbleComponent/Navbar/Navbar';
import Footer from '../Components/ShareAbleComponent/Footer/Footer';


const TutorProfileDetails=()=>{


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


  const [showCount, setShowCount] = useState(2);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  useEffect(() => {
    const selectedSubjectsNames = selectedSubjects
      .map((id) => {
        const subject = ButtonData.find((item) => item.id === id);
        return subject ? subject.buttoncontant : null;
      })
      .filter(Boolean);

    console.log("Selected Subjects:", selectedSubjectsNames);
  }, [selectedSubjects]);

  const handleCheckboxChange = (id) => {
    setSelectedSubjects((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  const [loadmore, setLoadMore] = useState(4)

  const handleLoadMore = () => {
    setShowCount(ButtonData.length);
    setLoadMore(prevNum => prevNum + 3);
  
    // setSelectedSubjects(ButtonData.map(subject => subject.id));
  };

  const ButtonData = [
    { id: 1, buttoncontant: "Math" },
    { id: 2, buttoncontant: "English" },
    { id: 3, buttoncontant: "History" },
  ];

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

    {/* Tutor profile card start */}
    <section className="Contact_Us_Middle ">
        <div className="bg-[#F0F8FF] lg:p-16">
          <div className="container mx-auto ">
            <div className="">
              <h3 className="text-2xl lg:text-4xl font-bold text-center text-cyan-700 py-5 ">
                154,3 Search Result in “English” Tutor
              </h3>
              <div className="grid grid-cols-12 gap-5 lg:gap-12  p-2 mt-10">
                <div className="col-span-12 md:col-span-8 lg:col-span-9 mb-6 lg:mb-0">
                  {tutorprofilecardinfo.map((TutorProfileProps) => (
                    //console.log(TutorProfileProps.length)
                    <TutorProfile
                      key={TutorProfileProps.id}
                      TutorProfileProps={TutorProfileProps}
                     // tutorId={tutorId}
                    />
                  ))}
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
                  <div>
                    <div className=" w-auto  bg-white border border-gray-200 rounded-lg shadow p-2 ">
                      <h5 className="mb-3 p-2 text-base font-semibold text-[#2c6777] text-center md:text-start rounded-t-lg  border-b-2 w-full md:text-xl ">
                        I Can Teach
                      </h5>

                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option>Class (1-5)</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <div className="p-1">
                        <h3 className="mb-4 font-semibold text-[#2c6777] mt-1  ">
                          Subject
                        </h3>

                        {ButtonData.slice(0, showCount).map((subject) => (
                          <div
                            key={subject.id}
                            className="flex items-center mb-4"
                          >
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
                          <button
                            onClick={handleLoadMore}
                            className="w-full bg-[#DCECFA] text-[#2c2f32] font-bold text-center py-2 px-4 rounded-full mt-2"
                          >
                            Load More
                          </button>
                        )}
                      </div>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option>Class(6-10)</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5"
                      >
                        <option>Short Course </option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-5 "
                      >
                        <option>Language Course</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
        


            <Badge title={'Create Tutor2u account now'} body_text={'Join us and start your journey towards excellence.'} btn_text={'Request A Tutor'}></Badge>

          </div>
          
        </div>
      </section>



    {/* Tutor profile card end */}
    <section className="">
                <Footer />
            </section>
    </>
  )
}
export default TutorProfileDetails