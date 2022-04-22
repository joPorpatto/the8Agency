import React from 'react'
import {  FormMain } from './form/FormMain'
import { LeftSection } from './LeftSection'
import './principal.css'

export const Principal = () => {
  return (
    <aside>
      <LeftSection/>
      <FormMain/>
    </aside>
  )
}
