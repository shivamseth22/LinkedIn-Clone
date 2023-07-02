import React from 'react'

const HomePage = () => {
  return (
    <div className='flex justify-between'>
        <div className='w-[225px]' >
            <div className='bg-red-300'>hi</div>
            <div className='bg-red-300'>hi</div>
        </div>
        <div className='min-w-[576px]'>
            <div className='bg-green-200 '>hi</div>
            <div className='bg-green-200'>hi</div>

        </div>
        <div className='bg-pink-200 min-w-[300px]'>
            hi
        </div>
    </div>
  )
}

export default HomePage