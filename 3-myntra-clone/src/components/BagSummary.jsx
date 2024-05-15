import React from 'react'
import { useSelector } from 'react-redux'

function BagSummary() {
    const bagSummary=useSelector(state=>state.bagItem)
    console.log('bagSummary',bagSummary[0].original_price);

    let totalmrp=0;
    let discount=0
    let totalamount=0
    bagSummary.forEach(item=>{
      totalmrp+=item.original_price
      discount+=(item.original_price-item.current_price)
      totalamount+=item.current_price
     console.log(totalmrp);
    })
    
  return (
    <>
    <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {bagSummary.length} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalmrp}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{discount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{totalamount+100}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    </>
  )
}

export default BagSummary