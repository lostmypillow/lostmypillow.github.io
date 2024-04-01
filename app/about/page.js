import React from 'react'
import Link from 'next/link'
import { StyledButton } from '../layout'
export default function About() {
  return (
    <div>
    <StyledButton
        path="/resume.pdf"
        alt="alt text"
        target="_blank"
        rel="noopener noreferrer"
        className='text-white'
      >
        My CV
      </StyledButton>
      <p className='text-white'> wefnjkfewnwknflkwnfkl </p>
      </div>
  )
}
