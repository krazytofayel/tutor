import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Button } from 'flowbite-react'
import React from 'react'

const ProfileDetailsForm = ({ handleNext, handleBack, activeStep }) => {

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


      <form class="max-w-3xl mx-auto p-5  bg-[#f9f9fa] rounded-lg "> 
      <Typography sx={{ mt: 2, mb: 1 }}><span className='text-sm font-bold text-gray-500'>Step</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span>  <span className='text-sm font-bold text-gray-500'>oF</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span> </Typography> 
        <div>

          <p className='font-medium text-lg'>Profile Details</p>
          <p className='text-sm mb-5 mt-2'>If you meet tutor2u <a href="http://">minimum requirements, complete the registration form to register and proceed to create your profile on tutor. Fields marked with * are required to be completed.</a> </p>
        </div>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required /></div>
          <div className='col-span-6'><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required /></div>
        </div>



        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How did you hear about tutor? *</label>
          <div>
            <div className='grid grid-cols-12 gap-5'>

              <div className='col-span-6'>
                <FormControl component="fieldset">
                  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label-1"
                    defaultValue="Google Search"
                    name="radio-buttons-group-1"
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel value="Google Search" control={<Radio size="small" />} label={
                      <span className="text-sm"> Google</span>
                    } />
                    <FormControlLabel value="Gumtree" control={<Radio size="small" />} label="Gumtree" />
                    <FormControlLabel value="Indeed" control={<Radio size="small" />} label="Indeed" />
                    <FormControlLabel value="Jora" control={<Radio size="small" />} label="Jora" />
                    <FormControlLabel value="Recommended by a friend" control={<Radio size="small" />} label="Recommended by a friend" />
                    <FormControlLabel value="Other" control={<Radio size="small" />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='col-span-6'>
                <FormControl component="fieldset">

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label-1"
                    defaultValue="Google Search"
                    name="radio-buttons-group-right"
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel value="LinkedIn" control={<Radio size="small" />} label="LinkedIn" />
                    <FormControlLabel value="Facebook" control={<Radio size="small" />} label="Facebook" />
                    <FormControlLabel value="Facebook Ad" control={<Radio size="small" />} label="Facebook Ad" />
                    <FormControlLabel value="Text message" control={<Radio size="small" />} label="Text message" />
                    <FormControlLabel value="Email from tutor" control={<Radio size="small" />} label="Email from tutor" />
                    <FormControlLabel value="University website" control={<Radio size="small" />} label="University website" />
                  </RadioGroup>
                </FormControl>
              </div>


            </div>

            <hr />
            <div>

              <div className="flex items-center mt-5 mb-5">
                <div className="flex items-center justify-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I acknowledge and agree that my registration as a tutor is subject to review and approval by the tutor support team, and I may be asked for further information or to verify details as part of the application process.
                </label>
              </div>

              <div className="flex items-center mb-5">
                <div className="flex items-center justify-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I confirm that I am 18 or older and live in and have a right to work in Australia
                </label>
              </div>
              <div className="flex items-center mb-5">
                <div className="flex items-center justify-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree to tutor <a href="">Terms & Conditions</a>  and that I will schedule and seek payment for all lessons through tutor and will not accept, request, infer or solicit payment outside of tutor platform
                </label>
              </div>
              <div className="flex items-center mb-5">
                <div className="flex items-center justify-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I have not been convicted or accused of nor have I been involved in the commission of any criminal offences, including but not limited to events involving children that would make me unsuitable to or prohibit me from working with children
                </label>
              </div>
            </div>




          </div>

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

export default ProfileDetailsForm
