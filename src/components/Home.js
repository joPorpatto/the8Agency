import React from 'react'
import { Header } from './header/Header'
import { Principal } from './principal/Principal'
import '../App.css';


export const Home = () => {
  return (
    <div className="App">
      <Header/>
       <Principal/>
     </div>
  )
}
