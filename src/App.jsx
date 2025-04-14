
import './App.css'
import Navbar from '../DaisyNav/Navbar'
import PricingOptions from '../DaisyNav/Components/PricingOptions/PricingOptions'
import { Suspense } from 'react'
import Rescharts from '../DaisyNav/Components/Rescharts'
// import DaisyNavbar from '../DaisyNav/DaisyNavbar'


function App() {

  const PricingPromise = fetch('pricingData.json')
  .then(res => res.json())
 

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
    </main>
    </>
  )
}

export default App
