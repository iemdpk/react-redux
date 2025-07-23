import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { login } from './store/counter'

function App() {
  
  let dispatch = useDispatch();
  let countSlice = useSelector((s)=>s.count)

  return (
    <>
      <h1>bvd {countSlice.count}</h1>
      <h2 onClick={()=>dispatch(login())}>submit</h2>
    </>
  )
}

export default App
