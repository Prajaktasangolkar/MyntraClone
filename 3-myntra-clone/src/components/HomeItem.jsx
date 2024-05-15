import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { itemsActions } from '../features/todo/product';
import { bagSliceActions } from '../features/todo/BagSlice';

const HomeItem = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  
  console.log(items);

  const buttonClicked = (item) => {
    // dispatch(itemsActions.addInitialItems(item));
    dispatch(bagSliceActions.addbag(item));
    console.log('Clicked', item.company);
    console.log('addedd',bagSliceActions.addbag(item));
  };

  return (
    <>
    
   
      {items.map((item) => (
        <div className="item-container" key={item.id}> {/* Ensure a unique key is used */}
          <img className="item-image" src={item.image} alt="item image" />
          
          <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
          </div>
          <div className="company-name">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
          <button className="btn-add-bag" onClick={() => buttonClicked(item)}>Add to Bag</button>
        </div>
      ))}
   
    </>
  );
};

export default HomeItem;
