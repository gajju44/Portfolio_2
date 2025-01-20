import React from 'react'
import PrimaryBtn from '../Components/SharedComponents/Buttons/PrimaryBtn'

function GetInTouch() {
  return (
    <>
        <div id='Contact' className='flex flex-col pb-52 items-center gap-2'>
        <p className='text-[#8892b0] text-base md:text-lg'><span className='text-[#63ffdb]'>04.</span> What’s Next?</p>
        <p className='font-Stack2 text-2xl md:text-6xl font-bold'>Get In Touch</p>
        <p className='text-[#8892b0] font-Stack2 md:w-[550px] text-center text-lg'>I’m currently looking for opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <PrimaryBtn onClick={() => { window.location.href = 'mailto:gajendra44.connect@gmail.com' }} className='mt-14'>Say Hello</PrimaryBtn>
        </div>
    </>
  )
}

export default GetInTouch
