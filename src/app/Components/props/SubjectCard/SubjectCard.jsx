import Image from "next/image"

const SubjectCard = ({ carditem }) => {
  const { id, image,subject } = carditem
  //console.log(carditem.length)
  return (
    <>

      <div className="w-full  shadow-xl border  p-2 rounded-lg">
        <div className="flex gap-5 items-center ">
          <div  className="rounded-md border h-20 w-20 bg-[#f3f4f6] shadow-lg">
            <Image className=" rounded "height={80} width={80} src={image } alt="404" />
          </div>
          <div>
            <p className="font-bold  text-gray-800">{subject}</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default SubjectCard