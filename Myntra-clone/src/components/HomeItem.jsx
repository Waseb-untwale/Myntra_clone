import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice';
const HomeItem = ({item}) => {

  const dispatch=useDispatch();
  const handleAddToBag=()=>{
    dispatch(bagActions.addToBag(item.id))
  }
  const handleRemove=()=>{
    dispatch(bagActions.removeToBag(item.id))
  }

  const bagItems=useSelector(store=>store.bag)
  const elementFound=bagItems.indexOf(item.id)>=0
  return (
    <>
      <div class="item-container">
      <img class="item-image" src={item.image} alt="item image"/>
      { <div class="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div> }
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ?  <button type="button" class=" btn-add-bag btn btn-danger" onClick={handleRemove}>removeToBag</button>:<button type="button" class="btn-add-bag btn btn-success" onClick={handleAddToBag}>Add to Bag</button>}
     
      
    </div>
    </>
  )
}

export default HomeItem
