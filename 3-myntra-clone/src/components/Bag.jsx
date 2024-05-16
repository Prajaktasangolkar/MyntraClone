import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BagSummary from './BagSummary'
import BagItem from './BagItem'

function Bag() {
  
  return (
    <>
    <Header/>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem />
        </div>
         <BagSummary/>
        <div className="bag-summary">
        </div>

      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Bag