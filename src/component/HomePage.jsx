import React from 'react';
import {tumb_img} from "../constant";

const HomePage = () => {
  return (
    <div className='home-page'>
        <div className='w-[225px]' >
            <div className='bg-red-300'>

              <img src={tumb_img}/>
              <div  className=' w-16 rounded-full' >
                <img src="https://media.licdn.com/dms/image/D4D35AQETQekL_lrbKg/profile-framedphoto-shrink_400_400/0/1687772942557?e=1689019200&v=beta&t=iZNnXuAsNgdvP6Uhj0yJyyWjKhxUuG4WVBg-XIJuFE4" className='rounded-full' alt="" />
              </div>
            </div>
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