import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextareaAutosize, Typography } from '@mui/material'
import { Button } from 'flowbite-react'
import React, { useState } from 'react'

const RateAvailabilityForm = ({ handleNext, handleBack, activeStep, isStepOptional, handleSkip, steps }) => {

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


  const [selectedDay, setSelectedDay] = useState('');
  const [showTimeFields, setShowTimeFields] = useState(false);


  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowTimeFields(true);
  };
  return (
    <div className='w-full'>


      <form className="max-w-3xl mx-auto p-5  bg-[#f9f9fa] rounded-lg border-t-4 border-t-[#089bab] border-b-4 border-b-[#089bab]  ">
        <Typography sx={{ mt: 2, mb: 1 }}><span className='text-sm font-bold text-gray-500'>Step</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span>  <span className='text-sm font-bold text-gray-500'>oF</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span> </Typography>
        <div>

          <p className='font-medium text-lg'>Rates & Availability</p>
          <p className='text-sm mb-5 mt-2'>If you meet tutor2u <a href="http://">minimum requirements, complete the registration form to register and proceed to create your profile on tutor. Fields marked with * are required to be completed.</a> </p>


          <div class="mb-5">
            <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Mode</label>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Would you like to tutor in-person or online (or both)? Select all that apply.*</label>
          <button className='border rounded-full px-3 py-2'>in-person</button>
          <button className='border rounded-full px-3 py-2'>Online</button>
          </div>



          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pricing</label>

            <FormHelperText>
              (your hourly rate must be inclusive of tutor commission)
            </FormHelperText>
          </div>




          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Does your rate depend on other factors such as travel or year level? Highlight any factors here.</label>
            <TextareaAutosize className='w-full border' minRows={4} sx={{
              borderColor: '#86b7fe',

            }}
            />
          </div>





          <div>
            <label htmlFor="howHeard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Free first lesson?</label>
            <FormControl component="fieldset">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label-1"
                defaultValue="yes"
                name="radio-buttons-group-1"
                onChange={handleRadioChange}
              >
                <FormControlLabel value="yes" control={<Radio size="small" />} label={<span className="text-sm">Yes</span>} />
                <FormControlLabel value="no" control={<Radio size="small" />} label={<span className="text-sm">No</span>} />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        
        <div class="mb-5">
            <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Timing</label>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Days available *</label>
          <button className='border rounded-full px-3 py-2' onClick={() => handleDayClick('Monday')}>Monday</button>
          <button className='border rounded-full px-3 py-2' onClick={() => handleDayClick('Wednesday')}>Tuesday</button>
          <button className='border rounded-full px-3 py-2'onClick={() => handleDayClick('Monday')}>Wednesday</button>
          <button className='border rounded-full px-3 py-2'onClick={() => handleDayClick('Thursday')}>Thursday</button>
          <button className='border rounded-full px-3 py-2'onClick={() => handleDayClick('Friday')}>Friday</button>
          <button className='border rounded-full px-3 py-2'onClick={() => handleDayClick('Saturday')}>Saturday</button>
          <button className='border rounded-full px-3 py-2'onClick={() => handleDayClick('Sunday')}>Sunday</button>
          </div>
          {showTimeFields && (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
            <input type="time" className='w-full border' />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
            <input type="time" className='w-full border' />
          </div>
        )}

          <TextareaAutosize className='w-full border' minRows={4} sx={{
              borderColor: '#86b7fe',

            }}
            />

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

export default RateAvailabilityForm 
