import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomeItem from './HomeItem'
import FetchItem from './FetchItem';
import { useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import { Outlet } from 'react-router-dom';


function Home() {
   const fetchStatus= useSelector((state)=>state.fetchStatus)
   console.log('fetchStatus.currentlyFetching',fetchStatus.currentlyFetching);
  return (
    <>
    <Header/>
    {/* <FetchItem/ */}
    <FetchItem />
    {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/> }
    <main>
        <div className="items-container">
          <HomeItem />     
        </div>
    </main>
     
    <Footer/>
    </>
  )
}

export default Home