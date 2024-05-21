import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
        <section>
          <h3>Notes</h3>
          <p className='text-justify lg:w-1/2'>{notes}</p>
        </section>
    </>
  )
}

export default Notes