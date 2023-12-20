
'use client'


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';







import ProfileDetailsForm from '../../AllForm/RegisterParent/ProfileDetailsForm/page';
import Payment from '../../AllForm/RegisterParent/PaymentForm/page';
import ConfirmationForm from '../../AllForm/RegisterParent/conformation/page';
//import SharedStepperLogic from '../../Components/ShareAbleComponent/SharedStepperLogic';
import Navbar from '@/app/Components/ShareAbleComponent/Navbar/Navbar';
import SharedStepperLogic from '@/app/Components/ShareAbleComponent/RegistrationSteperFromMainLogic/SharedStepperLogic';





const steps = ['profile details', 'payment' ,'confirmation'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [navfix, setNavfix] = React.useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  // if (typeof window !== 'undefined') {
  //   window.addEventListener("scroll", setFixed);
  // }

  window.addEventListener("scroll", setFixed);
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ProfileDetailsForm handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} isStepOptional={isStepOptional} />;
        case 1:
            return <Payment handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} isStepOptional={isStepOptional} handleSkip={handleSkip} steps={steps} />;
          case 2:
            return <ConfirmationForm handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} isStepOptional={isStepOptional} handleSkip={handleSkip} steps={steps} />;
     
      default:
        return 'Unknown step';
       
    }
  };

  return (
    <>
    <div
        className={`z-20 bg-[#2c6777] mb-10  ${
          navfix
            ? "fixed top-0  shadow-lg w-full  bg-[#2c6777] transition-all duration-300 ease-in-out "
            : ""
        }`}
      >
        <Navbar className="relative " />
      </div>
      <SharedStepperLogic  activeStep={activeStep}
      steps={steps} 
      isStepOptional={isStepOptional}
      isStepSkipped={isStepSkipped}
      handleNext={handleNext}
      handleBack={handleBack}
      handleSkip={handleSkip}
      handleReset={handleReset}
      getStepContent={getStepContent}
      
      
      
      
      />

</>
  );
}