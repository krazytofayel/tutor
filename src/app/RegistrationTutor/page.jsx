
'use client'


import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfileDetailsForm from '../AllForm/RegisterTutor/ProfileDetailsFrom/page';
import SubjectsExperienceForm from '../AllForm/RegisterTutor/SubjectsExperienceForm/page';
import PublicProfileForm from '../AllForm/RegisterTutor/PublicProfileForm/page';
import RateAvailabilityForm from '../AllForm/RegisterTutor/RateAvailabilityForm/page';
import ConfirmationForm from '../AllForm/RegisterTutor/ConfirmationForm/page';
import Navbar from '../Components/ShareAbleComponent/Navbar/Navbar';



const steps = ['profile details', 'subjects & experience', 'public profile', 'Rate & availability' ,'confirmation'];

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
            return <SubjectsExperienceForm handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} isStepOptional={isStepOptional} handleSkip={handleSkip} steps={steps} />;
          case 2:
            return <PublicProfileForm handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} isStepOptional={isStepOptional} handleSkip={handleSkip} steps={steps} />;
          case 3:
            return <RateAvailabilityForm handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} isStepOptional={isStepOptional} handleSkip={handleSkip} steps={steps} />;
          case 4:
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
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}  alternativeLabel  >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">

                {/* <ProfileDetailsForm/> */}
              </Typography>
              
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} >
                <Typography variant="body2" align="center">
                  {/* Hide labels on small devices */}
                  <span className="hidden sm:inline">
                    {label}
                  </span>
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
        
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
           
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
         <div className='mt-10'>
         {getStepContent(activeStep)}
         </div>
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box> */}
        </React.Fragment>
      )}
    </Box>

</>
  );
}