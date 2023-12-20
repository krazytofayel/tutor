import React from 'react';
import { Stepper, Step, StepLabel, Typography, Box, Button } from '@mui/material';

const SharedStepperLogic = ({
  activeStep,
  steps,
  isStepOptional,
  isStepSkipped,
  handleNext,
  handleBack,
  handleSkip,
  handleReset,
  getStepContent,
}) => {
  return (
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
         
        <Typography sx={{ mt: 2, mb: 1, textAlign:'center' }}>
          All steps completed - you&apos;re finished
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          {/* <Button onClick={handleReset}>Reset</Button> */}
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
  );
};

export default SharedStepperLogic;