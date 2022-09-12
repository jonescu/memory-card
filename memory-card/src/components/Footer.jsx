import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <div className='footer-ctnr footer p-6 bg-gray-400'>
      <FaGithub />
      <p className='ml-2 text-lg'>Copyright &copy; {footerYear} Nick Jonescu </p>
    </div>
  )
}

export default Footer