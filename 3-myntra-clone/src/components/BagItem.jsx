import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagSliceActions } from '../features/todo/BagSlice';

function BagItem() {
  const bagitem=useSelector(state=>state.bagItem)
  console.log('bagitem',bagitem);
  const dispatch=useDispatch()

  const removebag=(id)=>{
    dispatch(bagSliceActions.removebag(id))
    console.log('clickedd',bagSliceActions.removebag(id));
  }
  return (
    <>
 {
  bagitem.map((item)=>
    (
        // eslint-disable-next-line react/jsx-key
    <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" onClick={()=>removebag(item.id)}>X</div>
  </div>
  ))
 }
  </>
  )
}

export default BagItem