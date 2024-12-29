import React from 'react'

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className='hidden lg:flex items-center justify-center p-12'>
      <div className='max-w-md text-center'>
        <div className='grid grid-cols-3 gap-3 mb-8'>
          {[...Array(9)].map((_, index) => (
            <div key={index} className={`aspect-square rounded-xl bg-red-400 ${index % 2 === 0 ? "animate-pulse" : ""}`} />
          ))}
        </div>
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <p className='text-base'>{subtitle}</p>
      </div>
    </div>
  )
}

export default AuthImagePattern