import React from 'react'
import {BsLinkedin,BsGithub,BsFacebook} from "react-icons/bs"
const FooterSocials = () => {
  return (
    <div className='footer_socials'>
         <a href="https://www.linkedin.com/in/davidchen-benshabbat/ " target="_blank" ><BsLinkedin/></a>
         <a href="https://github.com/benshabbat" target="_blank" ><BsGithub/></a>
         <a href="https://www.facebook.com/chen.benshabbat" target="_blank" ><BsFacebook/></a>
    </div>
  )
}

export default FooterSocials