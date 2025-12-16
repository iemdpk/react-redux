import { useState, createContext, useContext,useReducer } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './store/slice'



const CountContext = createContext()

function App() {
  const count = useSelector((state: { count: number }) => state.count)
  const dispatch = useDispatch()  
  const [count1, setCount1] = useState(54)

  return (
    <>
    <div>
      <div onClick={() => dispatch(add())}>
     <h1>Redux {count}</h1>
     </div>
     {/* Provide context value correctly */}
     <CountContext.Provider value={{count1, setCount1}}>
       <Hello />
     </CountContext.Provider>
    </div>
    </>
  )
}


function Hello() {
  const context = useContext(CountContext);
let {count1, setCount1} = context;
  let newState = { count:0 };

  let func = (state:any,action:any) =>{
    switch(action.type){
      case 'increment':
        return { count: state.count + 1 };  
      case 'decrement':
        return { count: state.count - 1 };
    }
  }


  
  
  const [state,dispatch] = useReducer(func,newState);
  // <div onClick={() => setCount1(count1 + 1)}>Hello World {count1}</div> //redux
  
  return <>
    <div onClick={() => setCount1(count1 + 1)}>Calling From Context {count1}</div>
    <div onClick={() => dispatch({type:'increment'})}>Calling From Reducer {state.count}</div>

  </>
}


export default App