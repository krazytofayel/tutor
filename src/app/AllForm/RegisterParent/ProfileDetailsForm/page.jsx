
'use client'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
const ProfileDetailsForm = ({ handleNext, handleBack, activeStep }) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   handleNext(); 

  // };

  const handlePrevious = () => {
    handleBack();
  }
  const [selectedRole, setSelectedRole] = useState('Google Search'); // State to track selected role

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setSelectedRole(event.target.value);
  };

  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayedNames, setDisplayedNames] = useState('');

  const addStudent = (e) => {
    e.preventDefault(); // Prevent form submission
    const newStudent = {
      id: Math.random().toString(36).substr(2, 9),
      firstName: firstName,
      lastName: lastName,
    };
    setStudents([...students, newStudent]);
    setFirstName('');
    setLastName('');
    updateDisplayedNames();
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    updateDisplayedNames();
  };

  const updateDisplayedNames = () => {
    const names = students.map((student) => `${student.firstName} ${student.lastName}`).join(', ');
    setDisplayedNames(names);
  };
  return (
    <div className='w-full mb-10'>


      <form className="max-w-3xl mx-auto p-5  bg-[#f9f9fa] rounded-lg border-t-4 border-t-[#089bab] border-b-4 border-b-[#089bab]  ">
        <Typography sx={{ mt: 2, mb: 1 }}><span className='text-sm font-bold text-gray-500'>Step</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span>  <span className='text-sm font-bold text-gray-500'>oF</span>  <span className='text-sm font-bold text-gray-500'> {activeStep + 1}</span> </Typography>
        <div>

          <p className='font-medium text-lg'>1. Profile Details</p>
          <p className='text-sm mb-5'>create your personal profile below </p>
        </div>


        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Are you a student or a Teacher? *</label>
          <div>
            <div >

              <div>
                <FormControl component="fieldset">
                  {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label-1"
                    defaultValue="Google Search"
                    name="radio-buttons-group-1"
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel value="parent" control={<Radio size="small" />} label={
                      <span className="text-sm"> parent</span>
                    } />
                    <FormControlLabel value="Student" control={<Radio size="small" />} label="Student" />

                  </RadioGroup>
                </FormControl>
              </div>



            </div>







          </div>

        </div>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-6'><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your first name" required /></div>
          <div className='col-span-6'><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">last Name</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your last name" required /></div>
        </div>
        <div class="mb-5 mt-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone Number</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone number" required />

        </div>
{selectedRole !== 'parent' &&(  <div>


<div>

  <p className='font-medium text-lg'>2.Add Student </p>
  <p className='text-sm mb-5'>enter details for each student you want to add to your account. Click add student to add more student</p>
</div>

<div class="mb-5">
  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">student access preferance</label>
  <div>
    <div >

      <div>
        <FormControl component="fieldset">
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label-1"
            defaultValue="Google Search"
            name="radio-buttons-group-1"
            onChange={handleRadioChange}
          >
            <FormControlLabel value="Managed" control={<Radio size="small" />} label={
              <span className="text-sm"> Managed</span>
            } />
            <FormControlLabel value="Supervised" control={<Radio size="small" />} label="Supervised" />

          </RadioGroup>
        </FormControl>
      </div>



    </div>







  </div>

</div>

<div className='grid grid-cols-12 gap-5'>
  <div className='col-span-6'>
    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
    <input
      type="text"
      id="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter your first name"
      required
    />
  </div>
  <div className='col-span-6'>
    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input
      type="text"
      id="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter your last name"
      required
    />
  </div>
</div>
<button onClick={addStudent} className='border text-white bg-[#089bab] rounded  px-3 float-right mt-1 m-0 block '>Add student</button>

{/* Display Added Students */}
{students.map((student) => (
  <div key={student.id} className="mt-8 border border-gray-300 rounded flex justify-between p-3">
    <p>{`${student.firstName} ${student.lastName}`}</p>
    <button onClick={() => deleteStudent(student.id)}><RiDeleteBinLine style={{ fontSize: '1rem', margin: 'auto', color: '#089bab' }} /></button>
  </div>
))}


</div>)}

      




        <div class="mb-5 mt-5">
          <p className='font-medium text-lg'>3. Lastly!</p>
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
