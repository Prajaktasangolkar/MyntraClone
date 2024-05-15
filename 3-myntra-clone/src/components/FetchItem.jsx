// import React,{useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { itemActions } from '../features/todo/product';
// import { fetchStatusActions } from '../features/todo/fetchStatusSlice';

// const FetchItem=() =>{
//   const fetchStatus=useSelector((state)=>state.fetchStatus)
//   // console.log('f',useSelector((state)=>state.fetchStatus));
//   console.log('fetchStatus',fetchStatus);
//    const dispatch= useDispatch();
//    console.log(fetchStatus);

//   useEffect(()=>{
//   if (fetchStatus.fetchDone) return ;
//   //else
//   const controller=new AbortController();
//   const signal=controller.signal;
  
//   dispatch(fetchStatusActions.markFetchStarted())
//   fetch("http://localhost:8080/items",{signal})
//   .then((res)=>res.json())
//   .then(({items})=>{
//     console.log("item fetched",items);
    
//     dispatch(fetchStatusActions.markFetchDone());
//     dispatch(fetchStatusActions.markFetchFinished())
//     dispatch(itemActions.addInitialItems(items[0]))
//   });

//   return ()=>{
//     controller.abort()
//   };
// },[[fetchStatus]])



//   return (
//     <div>
//    fetch Done:  {fetchStatus.fetchDone}
//      Currently Fetching:  {fetchStatus.currentlyFetching}
//     </div>
//   )
// }

// export default FetchItem
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../features/todo/product";
import { fetchStatusActions } from "../features/todo/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;