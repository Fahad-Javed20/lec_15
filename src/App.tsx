
import './App.css'
import Calculate from './components/Calculate'
import FreshComponent from './components/FreshComponent'

function App() {
 

  return (
    <>
     <Calculate length={4} width={12} />
     <FreshComponent luckyNumber={5}/>
        
    </>
  )
}

export default App
