import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect,useState} from 'react';
import { itemsActions } from "../store/itemSlice";
import {fetchStatusActions} from '../store/fetchStatus'
import LoadingSpinner from './LoadingSpinner';
const FetchItems = () => {

  const fetchStatus=useSelector(store=>store.fetchStatus)

  const[selected,setSelected]=useState(false)
  
  const dispatch=useDispatch()
  useEffect(() => {
   setSelected(true)
   const controller = new AbortController();
   const signal = controller.signal;
    fetch(`${window.location.origin}/items`, { signal })
    .then((res) => res.json())
      .then(({items}) => {
        dispatch(itemsActions.addInitialItems(items[0]));
        setSelected(false)
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      {selected==true && <LoadingSpinner></LoadingSpinner>}
    </>
  )
}

export default FetchItems
