
'use client'
import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextareaAutosize, Typography } from '@mui/material'
import { Button } from 'flowbite-react'
import { useState } from 'react';


const TutorExperienceAvailability = ({ handleNext, handleBack, activeStep, isStepOptional, handleSkip, steps }) => {

  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleFirstFieldChange = (e) => {
    setFirstFieldValue(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   handleNext(); 

  // };
  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setShowAdditionalContent(event.target.value === 'yes');
  };

  const [step, setStep] = useState(1);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCurriculum, setSelectedCurriculum] = useState('');


  const [selectedDay, setSelectedDay] = useState('');
  const [showTimeFields, setShowTimeFields] = useState(false);



  const handleSubjectCategory = (category) => {
    setSelectedCategory(category);
    setStep(2);
  };

  const handleSubject = (subject) => {
    setSelectedSubjects([...selectedSubjects, subject]);
    setStep(3);
  };

  const handleLevel = (level) => {
    setSelectedLevel(level);
    setStep(4);
  };

  const handleCurriculum = (curriculum) => {
    setSelectedCurriculum(curriculum);
    setStep(5);
  };

  const handleAdd = () => {
    console.log({
      selectedSubjects,
      selectedCategory,
      selectedLevel,
      selectedCurriculum,
    });
    setStep(1);
  };
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowTimeFields(true);
  };

  return (
    <div className='w-full'>


      <form className="max-w-3xl mx-auto p-5  bg-[#f9f9fa] rounded-lg border-t-4 border-t-[#089bab] border-b-4 border-b-[#089bab]  ">
   
        <div>

          <p className='font-medium text-lg'>Subjects & Experience</p>
          <p className='text-sm mb-5 mt-2'>Select all the subjects you would like to offer tutoring for on Learnmate. Make sure to click ‘Add’ after selecting each subject, level and curriculum.</p>
        </div>



        <div>
          {step === 1 && (
            <div className={{ display: step === 1 ? 'block' : 'none' }}>
              <p>Select subject category*</p>
              <div className='flex gap-5'>
                <Button onClick={() => handleSubjectCategory('Math')}>Math</Button>
                <Button onClick={() => handleSubjectCategory('English')}>English</Button>
                <Button onClick={() => handleSubjectCategory('Arts')}>Arts</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={{ display: step === 2 ? 'block' : 'none' }}>
              <p>Select subject*</p>
              <div>
                {selectedCategory === 'Arts' && (
                  <div className='flex gap-5'>
                    <Button onClick={() => handleSubject('Dance')}>Dance</Button>
                    <Button onClick={() => handleSubject('Drama')}>Drama</Button>
                    <Button onClick={() => handleSubject('Music')}>Music</Button>
                  </div>
                )}
                {/* Add similar conditional rendering for other categories */}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={{ display: step === 3 ? 'block' : 'none' }}>
              <p>Level*</p>
              <div className='flex gap-5'>
                {/* Render buttons for levels */}
                <Button onClick={() => handleLevel('Primary')}>Primary</Button>
                <Button onClick={() => handleLevel('year 7 - 10')}>year 7 - 10</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={{ display: step === 4 ? 'block' : 'none' }}>
              <p>Curriculum*</p>
              <div className='flex gap-5'>
                {/* Render buttons for curriculum */}
                <Button onClick={() => handleCurriculum('All')}>All</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={{ display: step === 5 ? 'block' : 'none' }}>
              {/* Display final selected data */}
              <p>Added Data:</p>
              <p>Selected Subjects: {selectedSubjects.join(', ')}</p>
              <p>Selected Category: {selectedCategory}</p>
              <p>Selected Level: {selectedLevel}</p>
              <p>Selected Curriculum: {selectedCurriculum}</p>
              <button onClick={handleAdd}>Add</button>
            </div>
          )}
        </div>









        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>

        <div>
          <label htmlFor="howHeard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How did you hear about tutor? *</label>
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
         {/* Additional content based on radio button selection */}
         {showAdditionalContent && (
          <>
            <div className="mb-5">
              <label htmlFor="tutoringExperience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification name</label>
              <TextareaAutosize
                className='w-full border rounded'
                minRows={4}
                sx={{
                  borderColor: '#86b7fe',
                }}
              />
            </div>
            <div className="mb-5">
            <label htmlFor="tutoringExperience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification details</label>
              <TextareaAutosize
                className='w-full border rounded'
                minRows={4}
                sx={{
                  borderColor: '#86b7fe',
                }}
              />
            </div>
            <div className="mb-5">
            <label htmlFor="tutoringExperience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload a copy of your qualification (if available)</label>
              <TextareaAutosize
                className='w-full border rounded'
                minRows={4}
                sx={{
                  borderColor: '#86b7fe',
                }}
              />
            </div>
          </>
        )}

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Do you have tutoring experience?*</label>
          <TextareaAutosize className='w-full border rounded' minRows={4} sx={{
            borderColor: '#86b7fe',

          }}
          />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What subject knowledge or experience do you have that does or will make you a good tutor? *</label>
          <TextareaAutosize className='w-full border rounded' minRows={4} sx={{
            borderColor: '#86b7fe',

          }}
          />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Briefly set out how you plan to deliver lessons and what resources you can or may supply to students. *</label>
          <TextareaAutosize className='w-full border rounded' minRows={4} sx={{
            borderColor: '#86b7fe',

          }}
          />
        </div>


        <div>
          <label htmlFor="howHeard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Do you have a valid Working With Children check or equivalent (WWCC)? Please note this applies to Australian tutors only.*</label>
          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label-1"
              defaultValue="yes"
              name="radio-buttons-group-1"
              
            >
              <FormControlLabel value="yes" control={<Radio size="small" />} label={<span className="text-sm">Yes</span>} />
              <FormControlLabel value="no" control={<Radio size="small" />} label={<span className="text-sm">No</span>} />
            </RadioGroup>
          </FormControl>
       
        </div>
        <span >Tutors who provide a check to Learnmate that Learnmate can verify will be awarded a WWCC badge on their profile. This helps build trust and integrity in our community.</span>


        <div>
          <label htmlFor="howHeard" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Do you have a valid Working With Children check or equivalent (WWCC)? Please note this applies to Australian tutors only.*</label>
          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label-1"
              defaultValue="yes"
              name="radio-buttons-group-1"
              
            >
              <FormControlLabel value="yes" control={<Radio size="small" />} label={<span className="text-sm">Yes</span>} />
              <FormControlLabel value="no" control={<Radio size="small" />} label={<span className="text-sm">No</span>} />
            </RadioGroup>
          </FormControl>
       
        </div>




















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




    





        {/* <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div> */}
        <button type="submit" class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      
      </form>


    </div>
  )
}

export default TutorExperienceAvailability
