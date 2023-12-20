'use client'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Button } from 'flowbite-react'
import React from 'react'
import paymentimg from '../../../../../public/assets/images/registration/payment.jpeg'
import Image from 'next/image'
const Payment = ({ handleNext, handleBack, activeStep, isStepOptional, handleSkip, steps }) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   handleNext(); 

  // };
  const handleRadioChange = (event) => {
    console.log(event.target.value);
  };
  const handlePrevious = () => {
    handleBack();
  }
  return (
    <div className='w-full'>


    <form className="max-w-3xl mx-auto p-5  bg-[#f9f9fa] rounded-lg border-t-4 border-t-[#089bab] border-b-4 border-b-[#089bab]  "> 
    <Typography sx={{ mt: 2, mb: 1 }}><span className='text-sm font-bold text-gray-500'>Step</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span>  <span className='text-sm font-bold text-gray-500'>oF</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span> </Typography> 
      <div>

        <p className='font-medium text-lg'>Secure and easy payments</p>
     
      </div>


      <div class="mb-5">
      <Button className='text-center mx-auto mt-5 mb-5'> Add credit card</Button>
      <div >
      
     
        <p className='text-sm font-medium'>You will be redirected to a secure payment page powered by Stripe.</p>
        <p> <span className='font-bold text-sm'>Note:</span>  You will only ever be charged if you book and complete lessons with a tutor.</p>
      


      </div>

      </div>
      <div className="flex justify-center mt-4">
              <Image src={paymentimg} alt="Payment Image" width={300} height={200} />
            </div>
     





      {/* <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
      </div> */}
      {/* <button type="submit" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button disabled={activeStep === 0} onClick={handlePrevious}>
          Previous
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button type="submit" onClick={handleNext}>
          Next step
        </Button>
      </Box>
    </form>


  </div>
  )
}

export default Payment 
