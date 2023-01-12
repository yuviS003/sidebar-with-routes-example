import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function FallbackRoute() {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1)
  }
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      Not Found.
      <button type="button" className="rounded bg-gray-700 text-white hover:bg-gray-500 cursor-pointer outline-none border-none w-[20%] p-4 my-4" onClick={navigateBack}>Go Back</button>
    </div>
  )
}
