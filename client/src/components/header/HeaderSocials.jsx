import React from 'react'
import {BsLinkedin,BsGithub,BsFacebook} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
         <a href="https://www.linkedin.com/in/davidchen-benshabbat-4ba61b234/ " target="_blank" ><BsLinkedin/></a>
         <a href="https://github.com/benshabbat" target="_blank" ><BsGithub/></a>
         <a href="https://www.facebook.com/chen.benshabbat" target="_blank" ><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials