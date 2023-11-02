import PropTypes from 'prop-types';

import { Patient } from './Patient';

export const PatientsList = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll scrollbar scrollbar-thumb-indigo-400 scrollbar-track-indigo-100'>

      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-indigo-500 text-center'>
            Listado Pacientes
          </h2>
          <p className='text-indigo-500 text-xl font-bold mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-white'>Pacientes y Citas</span>
          </p>

          {
            patients.map(patient => {
              return (
                <Patient
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                  deletePatient={deletePatient}
                />
              )
            })
          }
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-indigo-500 text-center'>
            No hay Pacientes
          </h2>
          <p className='text-indigo-500 text-xl font-bold mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-white'>y aparecerán en este lugar</span>
          </p>
        </>
      )
      }
    </div>
  );
};

PatientsList.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatient: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired
};