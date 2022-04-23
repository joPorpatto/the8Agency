import React from 'react'
import { Footer } from '../footer.js/Footer'

import {  FormMain } from './form/FormMain'
import { LeftSection } from './leftSection/main'
import './principal.css'

export const Principal = () => {
  return (
    <>
    <aside>
      
      <LeftSection/>
      <FormMain/>
    </aside>
      <Footer/>
    </>
  )
}
