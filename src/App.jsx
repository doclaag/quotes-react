import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { PatientsList } from './components/PatientsList';

const App = () => {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});


  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);


  const deletePatient = (id) => {
    const newPatients = patients.filter(patient => patient.id !== id);
    setPatients(newPatients);
  };

  return (
    <div className='container mx-auto'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
};

export default App;
