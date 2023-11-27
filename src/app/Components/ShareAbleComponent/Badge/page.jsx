

const Badge = ({title,btn_text,body_text}) => {
  return (
   <>
     <section className="">
                <div className="container px-5 py-24 mx-auto">
                    <div className="bg-[#2C6777] py-10 rounded-3xl ">
                        <div className="lg:w-full flex items-center flex-col sm:flex-row text-center lg:text-start md:text-start mx-auto lg:px-10 px-4 ">
                            <div className="lg:w-3/4 md:3/5">
                                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white ">{title}</h1>
                                <p className="flex-grow sm:pr-16 text-xl font-medium title-font text-white">{body_text}</p>
                            </div>
                            <div className="lg:w-1/4 md:2/5">
                                <button className="flex-shrink-0 text-[#21515e] font-semibold bg-white border-0 py-2 lg:px-8 md:px-5 px-8  hover:bg-[#5cdcff]  rounded-3xl text-lg mt-10 sm:mt-0">{btn_text}</button>

                            </div>

                        </div>

                    </div>
                  

                </div>

            </section>
   
   </>
  )
}

export default Badge
