import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MemoComponent from './Memo.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello useMemo</h1>
   <MemoComponent/>
    </>
  )
}

export default App
