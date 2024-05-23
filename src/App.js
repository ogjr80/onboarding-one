import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import PersonalDetails from './components/PersonalDetails';
import AddressInformation from './components/AddressInformation';
import NextOfKin from './components/NextOfKin';
import Dependants from './components/Dependants';
import AnnuityOnboarding from './components/AnnuityOnboarding';
import InvestmentChoice from './components/InvestmentChoice';
import Beneficiaries from './components/Beneficiaries';
import MedicalAidOnboarding from './components/MedicalAidOnboarding';
import MedicalAidSelection from './components/MedicalAidSelection';
import CertificateUpload from './components/CertificateUpload';
import Review from './components/Review';
import './App.css'; 

const App = () => {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
    setSubStep(1); // Reset subStep for the new main step
  };

  const prevStep = () => {
    setStep(step - 1);
    setSubStep(1); // Reset subStep for the previous main step
  };

  const nextSubStep = () => setSubStep(subStep + 1);
  const prevSubStep = () => setSubStep(subStep - 1);

  const submit = () => alert('Onboarding process completed!');

  return (
    <div className="App">
      <ProgressBar step={step} />
      {step === 1 && <PersonalDetails nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} />}
      {step === 2 && <AddressInformation nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <NextOfKin nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Dependants nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <AnnuityOnboarding nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <InvestmentChoice nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 7 && <Beneficiaries nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 8 && <MedicalAidOnboarding nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 9 && <MedicalAidSelection nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 10 && <CertificateUpload nextSubStep={nextSubStep} subStep={subStep} nextStep={nextStep} prevStep={prevStep} />}
      {step === 11 && <Review prevStep={prevStep} submit={submit} />}
    </div>
  );
};

export default App;
