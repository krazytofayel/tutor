
'use client'
import signinimg from "../../../public/assets/images/signin/signin-side-img.png";
import logoimg from "../../../public/assets/images/navbar/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ParticleBackground from "../Signin/ParticleComponent/ParticleComponent";

const SignUp = () => {
    const [activeButton, setActiveButton] = useState('tutor');
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;


    const onSubmit = (data) => {
        const formDataWithRole = {
            ...data,
            role: activeButton === 'tutor' ? 'Tutor' : 'Parent',
        };
        console.log('Form Data:', formDataWithRole);

        // Mock API call or user creation logic
        // Replace this with your actual API call or user creation logic
        setTimeout(() => {
            toast.success(`User created successfully as ${formDataWithRole.role}`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000, // Toast message will automatically close after 3 seconds
                hideProgressBar: false,
            });
        }, 1000);
    };


    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        //console.log(`Clicked: ${buttonType}`);

    }
    return (
        <>
            {/* <div>SignUp</div> */}
            <section className="min-h-screen flex items-stretch text-black ">
                <div
                    className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center text-white"
                    style={{ backgroundImage: `url('/assets/images/signin/signin-side-img.png')` }}
                >
                    <ParticleBackground/>
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    <div className="w-full xl:px-24 md:px-8 z-10">
                        <h1 className="xl:text-5xl lg:text-4xl font-bold text-left tracking-wide">
                            Keep it special
                        </h1>
                        <p className="xl:text-3xl lg:text-2xl my-4">
                            Learning made easy and fun with your Dream Tutor2u, sign up and
                            succeed together
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 md:px-6 px-0 z-0 bg-[#f5f4ef]">

                    <div className="w-full py-6 pb-10 z-20 ">
                        <div className=" my-6 flex justify-center   ">
                            <Image src={logoimg} alt=" tutor2u logo" className="  " />
                        </div>
                        <h1 className="text-[#2C6777] lg:text-3xl text-[26px] font-semibold mb-4">
                            Sign Up for an Account
                        </h1>


                        <form action="" onSubmit={handleSubmit(onSubmit)} class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <label className="block text-md font-medium text-[#2C6777] text-start ml-2">
                                I am signing up as a
                            </label>
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-12 md:col-span-6 lg:col-span-6 pb-2 pt-4">
                                    <button
                                        className={`uppercase block w-full p-4 text-lg font-bold rounded-lg ${activeButton === 'tutor'
                                            ? 'bg-[#2C6777] text-white'
                                            : 'bg-white text-black'
                                            } hover:bg-[#2C6777]`}
                                        onClick={() => handleButtonClick('tutor')}
                                    >
                                        Tutor
                                    </button>
                                </div>
                                <div className="col-span-12 md:col-span-6 lg:col-span-6 pb-2 pt-4">
                                    <button
                                        className={`uppercase block w-full p-4 text-lg font-bold rounded-lg ${activeButton === 'parent' ? 'bg-[#2C6777] text-white' : 'bg-white text-black'
                                            } hover:bg-[#2C6777]`}
                                        onClick={() => handleButtonClick('parent')}
                                    >
                                        Parent/Student
                                    </button>
                                </div>
                            </div>

                            <div className="grid xl:grid-cols-2  lg:grid-cols-1  md:grid-cols-2 md:gap-6">


                                <div className="mb-2">
                                    <div className="mb-2">
                                        <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            {...register('firstName', { required: true })}
                                            placeholder="Enter your first name"
                                            className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                        />
                                        {errors.firstName && <span className="text-red-500">First Name is required</span>}
                                    </div>

                                </div>

                                <div className="mb-2">
                                    <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        {...register('lastName', { required: true })}
                                        placeholder="Enter your last name"
                                        className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                    />
                                    {errors.lastName && <span className="text-red-500">Last Name is required</span>}
                                </div>

                            </div>
                            <div className="pb-2 pt-4">
                                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email', { required: true })}
                                    placeholder="Your email address here"
                                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="pb-2 pt-4">
                                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password', {
                                        required: true,
                                        pattern: {
                                            value: passwordValidator,
                                            message:
                                                'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.',
                                        },
                                    })}
                                    placeholder="Enter a strong password"
                                    className={`block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9] ${errors.password ? 'border border-red-500' : ''
                                        }`}
                                />
                                {errors.password && (
                                    <span className="text-red-500">{errors.password.message}</span>
                                )}
                            </div>


                           

                            <div className="  lg:mt-0 mt-2 flex items-start   w-full ">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4  bg-[#2C6777] border-[#2C6777] rounded  "
                                />
                                <label
                                    for="checkbox-1"
                                    className="ml-2 text-sm font-medium text-black"
                                >
                                    I agree to the{" "}
                                    <a href="#" className="text-[#2C6777] hover:underline ">
                                        terms and conditions
                                    </a>
                                    .
                                </label>
                            </div>
                            <div className="pb-2 pt-4">
                                <button
                                    type="submit"
                                    className={`uppercase block w-full p-4 text-lg text-white font-bold rounded-lg bg-[#2C6777] hover:bg-[#3f98b1] ${!isValid ? 'cursor-not-allowed opacity-50' : ''
                                        }`}
                                    disabled={!isValid}
                                >
                                    Create Account
                                </button>
                                {!isValid && (
                                    <span className="text-red-500 text-sm mt-2 block">
                                        Please fill in all required fields.
                                    </span>
                                )}
                            </div>



                            <p className=" mt-2 mb-2">Dont have an account yet? <Link href="/SignUp" className="text-[#2C6777] font-medium">Sign up</Link> </p>

                        </form>
                        <ToastContainer position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            style={{ width: '400px' }} />
                    </div>
                </div>
            </section>
        </>

    )
}

export default SignUp