import './App.css'
// import DaisyNav from './Components/Daisy/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <h1 className='bg-red-900 text-4xl text-slate-50'>Vite + React</h1>
      
    </>
  )
}

export default App
