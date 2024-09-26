import React from 'react'
import ExerciseCard from './ExerciseCard'
import SectionWrapper from './SectionWrapper'

export default function WorkOut(props) {
  const{workout}=props
  return (
    <SectionWrapper id={'workout'} header={'Welcome'}
      title={['To',' Danger',' Zone']}>
        <div className='flex flex-col gap-4'>
          <p className='text-sm md:text-base font-light'>
          *Note - <span className='text-blue-400'>reps</span> is the number of repetitions, 
          <span className='text-blue-400'>rest</span> is specified
           in seconds, and <span className='text-blue-400'>tempo</span> is the number of seconds for each movement
           phase in the order of eccentric - isometric - concentric (or down - pause - up).
          </p>
          <p className='text-sm md:text-base font-light'>
          For weight selection, choose a weight that allows you to complete the repetitions
           with minimal sacrifice to form.
          </p>
          <p className='text-sm md:text-base font-light'>
           <sapn className='text-blue-400'>Happy lifting!</sapn>
          </p>
          {workout.map((exercise,i)=>{
            return(
              <ExerciseCard i={i}exercise={exercise} key={i}/>
            )
          })}
        </div>
        </SectionWrapper >
  )
}
