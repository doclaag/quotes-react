import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Error } from './Error';

export const Form = ({ patients, setPatients, patient, setPatient }) => {

  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {


    if (Object.keys(patient).length > 0) {
      setPet(patient.pet);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }

    return () => {

    };
  }, [patient]);


  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return `${random}${date}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if ([pet, owner, email, date, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    // Create patient
    const objPatient = {
      pet,
      owner,
      email,
      date,
      symptoms,

    };

    if (patient.id) {

      objPatient.id = patient.id;
      const patientsEdited = patients.map(patientState => patientState.id === patient.id ? objPatient : patientState);
      setPatients(patientsEdited);
      setPatient({});

    } else {

      objPatient.id = generateId();
      setPatients([...patients, objPatient]);

    }



    // Reset form
    setPet('');
    setOwner('');
    setEmail('');
    setDate('');
    setSymptoms('');
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center text-indigo-500'>
        Seguimiento Pacientes
      </h2>

      <p className='text-indigo-500 text-lg font-bold mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-white '>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-gray-50 shadow-md rounded-lg py-10 px-5 mb-10'>
        {error &&
          <Error
            message={'Todos los campos son obligatorios'}
          />
        }
        <div className='mb-5'>
          <label
            htmlFor='pet'
            className='block text-gray-700 font-bold uppercase'
          >
            Nombre Mascota
          </label>
          <input
            id='pet'
            type='text'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='owner'
            className='block text-gray-700 font-bold uppercase'
          >
            Nombre Propietario
          </label>
          <input
            id='owner'
            type='text'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-bold uppercase'
          >
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Email del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='date'
            className='block text-gray-700 font-bold uppercase'
          >
            Fecha de Alta
          </label>
          <input
            id='date'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='symptoms'
            className='block text-gray-700 font-bold uppercase'
          >
            Síntomas
          </label>
          <textarea
            id='symptoms'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los síntomas'
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all'
          value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};


Form.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatients: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
  setPatient: PropTypes.func.isRequired
};