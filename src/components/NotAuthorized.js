import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotAuthorized() {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1)
    }
    return (
        <div className="w-full h-[35rem] flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-center">The user is not authorized to view this component.</span>
            <button type="button" className="rounded bg-gray-700 text-white hover:bg-gray-500 cursor-pointer outline-none border-none w-[20%] p-4 my-4" onClick={navigateBack}>Go Back</button>
        </div>
    )
}
