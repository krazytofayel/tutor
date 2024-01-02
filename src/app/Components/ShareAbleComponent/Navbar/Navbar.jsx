'use client';


import Image from 'next/image';
import logo from '../../../../../public/assets/images/navbar/main-logo.png'
import Link from 'next/link';
import { useState } from 'react';



const Navbar = () => {
  let Links = [

    { name: 'About Us', link: 'AboutUs' },
    { name: 'Tution Job', link: 'TutionJob' },
    {name:'Request Tutor', link:'RequestTutor'},
    {name:'Find Tutor', link:'FindTutor'}

  ];

  let [open, setOpen] = useState(false);
  return (

    <>

      <div>
      <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] ">
                    <div className="p-2 md:p-0 lg:p-0 ">
                        <Link href='/'> <Image src={logo} alt=" main logo" /></Link>
                       
                    </div>

                    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
                        {open ? 'x' : '...'}
                    </div>

                    <ul
                        className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-[#089bab] bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in-out ${
                            open ? 'right-19' : 'hidden'
                        }`}
                    >
                        {Links.map((link) => (
                            <li key={link.name} className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg">
                                <Link href={link.link} className="duration-500 font-medium">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="md:hidden my-3 truncate">
                            <Link href="login">Login</Link>
                        </li>
                        <li className="md:hidden truncate">
                            <Link href="signup">Create An Account</Link>
                        </li>
                    </ul>

                    <div className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${open ? 'right-19' : 'hidden'}`}>
                        <button className="bg-[#d6e5f1] text-[#2c6777] md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
                            <Link href="/BecomeaTutor">Become a tutor</Link>
                        </button>

                        <button className="bg-[#2c6777] text-white md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
                            <Link href="/Signin">Sign in</Link>
                        </button>
                    </div>
                </nav>
      </div>

    </>
  )
}

export default Navbar