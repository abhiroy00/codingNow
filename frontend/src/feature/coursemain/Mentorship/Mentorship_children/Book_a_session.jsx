import React from 'react'

export default function Book_a_session() {
    return (
        <div className='bg-gray-100'>
            <h1 className='text-center py-5 font-bold text-gray-600'>Book a session</h1>
            <div className='bg-white w-[700px] p-4 ml-10'>
                <div className='w-[100px]'> <img src="https://ab-user-files-prod.s3.ap-south-1.amazonaws.com/public/themeIcon/a1bb4971-9301-480a-a85d-259b8435fc32.jpeg" alt="" /> </div>
                <h3 className='text-gray-900 text-xl mt-4'>Data Science Professional Guidance</h3>
                <p className='w-[90%] text-gray-600'>Supercharge your career journey with our transformative session, designed to elevate your understanding of foundation learning and capstone projects. Gain valuable guidance on applying your knowledge, enhancing skills, and curating an impressive resume and portfolio. Master the art of interviews through personalized career guidance and unlock the confidence to land your dream job successfully.</p>
                <button style={{ background: "rgba(19,79,92,1)" }} className='text-white px-5 py-2 rounded-md my-5'>Book Now</button>
            </div>
        </div>
    )
}
