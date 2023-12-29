
'use client'
import DashboardMainLayout from '@/app/Components/ShareAbleComponent/DashboardMainLayoutLogic/DashboardMainLayout';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoPeopleOutline, IoStarOutline, IoHelpCircleOutline, IoLayersOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import MessageTutor from './Message/page';
import MyStudent from './MyStudent/page';
import FAQ from './FAQ/page';
import ProfileDetails from './ProfileDetails/page';
import Democalender from './Schuduale/page';
import Resources from './Rsources/page';
import Loader from './Loader/page';
import Reviews from './Reviews/page';

const Page = () => {



   const [isLoading, setIsLoading] = useState(false);
   const [selectedComponent, setSelectedComponent] = useState(<MessageTutor />);
   const [userRole, setUserRole] = useState('tutor'); 
   // const items = [
   //    { label: 'Message', link: '#', icon: <FiMessageCircle />, component: <MessageTutor /> },
   //    {
   //       label: 'Schedule', link: '#', icon: <IoCalendarOutline />, component: <Democalender />
   //    },
   //    { label: 'Payments', link: '#', icon: <CiBadgeDollar /> },
   //    { label: 'My Students', link: '#', icon: <IoPeopleOutline />, component: <MyStudent /> },
   //    { label: 'Reviews', link: '#', icon: <IoStarOutline />,component:<Reviews/> },
   //    { label: 'FAQs', link: '#', icon: <IoHelpCircleOutline />, component: <FAQ /> },
   //    { label: 'Resources', link: '#', icon: <IoLayersOutline />,component:<Resources/> },
   //    { label: 'Profile Details', link: '#', icon: <IoPersonOutline />, component: <ProfileDetails /> },
   //    { label: 'Settings', link: '#', icon: <IoSettingsOutline /> },
   // ];

  // Define components for different roles
  const roleComponents = {
   tutor: {
      defaultComponent: <MessageTutor />,
      items: [
         { label: 'Message', link: '#', icon: <FiMessageCircle />, component: <MessageTutor /> },
         {
            label: 'Schedule', link: '#', icon: <IoCalendarOutline />, component: <Democalender />
         },
         { label: 'Payments', link: '#', icon: <CiBadgeDollar /> },
         { label: 'My Students', link: '#', icon: <IoPeopleOutline />, component: <MyStudent /> },
         { label: 'Reviews', link: '#', icon: <IoStarOutline />,component:<Reviews/> },
         { label: 'FAQs', link: '#', icon: <IoHelpCircleOutline />, component: <FAQ /> },
         { label: 'Resources', link: '#', icon: <IoLayersOutline />,component:<Resources/> },
         { label: 'Profile Details', link: '#', icon: <IoPersonOutline />, component: <ProfileDetails /> },
         { label: 'Settings', link: '#', icon: <IoSettingsOutline /> },
      ],
   },
   parent: {
      defaultComponent: <MyStudent />,
      items: [
         { label: 'My Students', link: '#', icon: <IoPeopleOutline />, component: <MyStudent /> },
         // ... other parent dashboard items
      ],
   },
};

useEffect(() => {
   // Simulating loading delay
   setIsLoading(true);
   setTimeout(() => {
      setIsLoading(false);
      // Set the default component based on the user's role
      setSelectedComponent(roleComponents[userRole].defaultComponent);
   }, 1000); // Adjust the delay time as needed
}, [userRole]);

const handleItemClick = (component) => {
   setSelectedComponent(component);
};
   return (
      <>




         <DashboardMainLayout items={roleComponents[userRole].items} onItemClick={handleItemClick}  ></DashboardMainLayout>


         <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 h-full border-gray-200 shadow-lg border-dashed rounded-lg dark:border-gray-700 mt-14">

            {isLoading ? <Loader /> : selectedComponent}








               {/* <div class="grid grid-cols-3 gap-4 mb-4">
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div> */}



            </div>
         </div>


      </>
   )
}

export default Page
