import React from 'react'
import CV from "../../assets/Resume DavidChen Benshabbat FullStack.pdf"
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary' >Send Message</a>
    </div>
  )
}

export default CTA