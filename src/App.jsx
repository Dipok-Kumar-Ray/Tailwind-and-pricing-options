
import './App.css'
import Navbar from '../DaisyNav/Navbar'
import PricingOptions from '../DaisyNav/Components/PricingOptions/PricingOptions'
import { Suspense } from 'react'
import Rescharts from '../DaisyNav/Components/Rescharts'
import AxiosDataBarChart from '../DaisyNav/Components/AxiosData/AxiosDataBarChart'
import axios from 'axios'
// import DaisyNavbar from '../DaisyNav/DaisyNavbar'


function App() {

  const PricingPromise = fetch('pricingData.json')
  .then(res => res.json())
 
const marksPromise = axios.get('publicData.json')




  return (
    <>
    <header>
      <Navbar></Navbar>
      {/* <DaisyNavbar></DaisyNavbar> */}
    </header>

    <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <PricingOptions PricingPromise= {PricingPromise}></PricingOptions>
    </Suspense>
    <Rescharts></Rescharts>

    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <AxiosDataBarChart marksPromise={marksPromise}></AxiosDataBarChart>
    </Suspense>
    </main>
    </>
  )
}

export default App
