// import React, { useState } from 'react';
// import ProgressBar from './components/ProgressBar';
// import PersonalDetails from './components/PersonalDetails';
// import AddressInformation from './components/AddressInformation';
// import NextOfKin from './components/NextOfKin';
// import Dependants from './components/Dependants';
// import AnnuityOnboarding from './components/AnnuityOnboarding';
// import InvestmentChoice from './components/InvestmentChoice';
// import Beneficiaries from './components/Beneficiaries';
// import MedicalAidOnboarding from './components/MedicalAidOnboarding';
// import MedicalAidSelection from './components/MedicalAidSelection';
// import CertificateUpload from './components/CertificateUpload';
// import Review from './components/Review';
// import './App.css'; 


// const App = () => {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);
//   const submit = () => alert('Onboarding process completed!');

//   return (
//     <div className="App">
//       <ProgressBar step={step} />
//       {step === 1 && <PersonalDetails nextStep={nextStep} />}
//       {step === 2 && <AddressInformation nextStep={nextStep} prevStep={prevStep} />}
//       {step === 3 && <NextOfKin nextStep={nextStep} prevStep={prevStep} />}
//       {step === 4 && <Dependants nextStep={nextStep} prevStep={prevStep} />}
//       {step === 5 && <AnnuityOnboarding nextStep={nextStep} prevStep={prevStep} />}
//       {step === 6 && <InvestmentChoice nextStep={nextStep} prevStep={prevStep} />}
//       {step === 7 && <Beneficiaries nextStep={nextStep} prevStep={prevStep} />}
//       {step === 8 && <MedicalAidOnboarding nextStep={nextStep} prevStep={prevStep} />}
//       {step === 9 && <MedicalAidSelection nextStep={nextStep} prevStep={prevStep} />}
//       {step === 10 && <CertificateUpload nextStep={nextStep} prevStep={prevStep} />}
//       {step === 11 && <Review prevStep={prevStep} submit={submit} />}
//     </div>
//   );
// };

// export default App;

import './App.css'; 

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

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submit = () => alert('Onboarding process completed!');

  return (
    <div className="App">
      <ProgressBar step={step} />
      {step === 1 && <PersonalDetails nextStep={nextStep} />}
      {step === 2 && <AddressInformation nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <NextOfKin nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Dependants nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <AnnuityOnboarding nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <InvestmentChoice nextStep={nextStep} prevStep={prevStep} />}
      {step === 7 && <Beneficiaries nextStep={nextStep} prevStep={prevStep} />}
      {step === 8 && <MedicalAidOnboarding nextStep={nextStep} prevStep={prevStep} />}
      {step === 9 && <MedicalAidSelection nextStep={nextStep} prevStep={prevStep} />}
      {step === 10 && <CertificateUpload nextStep={nextStep} prevStep={prevStep} />}
      {step === 11 && <Review prevStep={prevStep} submit={submit} />}
    </div>
  );
};

export default App;
