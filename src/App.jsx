import './App.css'
// import DaisyNav from './Components/Daisy/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import LineChart from './LineChart/LineChart'
import Phones from './Phones/Phones'
import PriceOptions from './PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='bg-blue-700 text-4xl text-slate-50'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
