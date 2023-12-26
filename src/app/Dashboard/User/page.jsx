'use client'

import DashboardMainLayout from '@/app/Components/ShareAbleComponent/DashboardMainLayoutLogic/DashboardMainLayout';
import Image from 'next/image'
import React, { useState } from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoPeopleOutline,IoStarOutline,IoHelpCircleOutline,IoLayersOutline,IoPersonOutline ,IoSettingsOutline    } from "react-icons/io5";

const Page = () => {

  const items = [
    { label: 'Message', link: '#' ,icon:<FiMessageCircle />},
    { label: 'Schedule', link: '#',icon:<IoCalendarOutline />
   },
    { label: 'Payments', link: '#',icon:<CiBadgeDollar /> },
    { label: 'My Students', link: '#',icon:<IoPeopleOutline /> },
    { label: 'Reviews', link: '#',icon:<IoStarOutline /> },
    { label: 'FAQs', link: '#',icon:<IoHelpCircleOutline  /> },
    { label: 'Resources', link: '#',icon:<IoLayersOutline  /> },
    { label: 'Profile Details', link: '#',icon:<IoPersonOutline  /> },
    { label: 'Settings', link: '#',icon:<IoSettingsOutline  /> },
  ];


  return (
  <>
  
  


<DashboardMainLayout  items={items} ></DashboardMainLayout>


<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-3 gap-4 mb-4">
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
      </div>
 
      
    
   </div>
</div>

  
  </>
  )
}

export default Page
