import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Entry from './components/Entry'
import app from './components/app'

function App() {
  const entries = app.map(i=>{
   return( 
   <Entry
      key = {i.id}
      i = {i}
    />
  )} ) 
  console.log(entries,"hello")
  return (
    <>
      <Header />
      <main className='mt-[80px]'>
      {entries}
      </main>
    </>
  )
}

export default App
