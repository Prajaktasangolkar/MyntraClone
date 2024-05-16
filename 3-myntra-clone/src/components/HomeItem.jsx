// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { itemsActions } from '../features/todo/product';
// import { bagSliceActions } from '../features/todo/BagSlice';

// const HomeItem = () => {
//   const items = useSelector(state => state.items);
//   const dispatch = useDispatch();
  
//   console.log(items);

//   const buttonClicked = (item) => {
//     // dispatch(itemsActions.addInitialItems(item));
//     dispatch(bagSliceActions.addbag(item));
//     console.log('Clicked', item.company);
//     console.log('addedd',bagSliceActions.addbag(item));
//   };
    
//   const bagItems=useSelector(state=>state.bagItem)
//   // const elementFound=bagItems.indexOf(item.id>=0)
//   const buttonClickedremove=(id)=>{
//     dispatch(bagSliceActions.removebag(id))
//   }
//   return (
//     <>
    
//       {items.map((item) => (

//        const elementFound = bagItems.findIndex(bagItem => bagItem.id === item.id) >= 0;
//        return (
//         <div className="item-container" key={item.id}> {/* Ensure a unique key is used */}
//           <img className="item-image" src={item.image} alt="item image" />
          
//           <div className="rating">
//             {item.rating.stars} ⭐ | {item.rating.count}
//           </div>
//           <div className="company-name">{item.company}</div>
//           <div className="item-name">{item.item_name}</div>
//           <div className="price">
//             <span className="current-price">Rs {item.current_price}</span>
//             <span className="original-price">Rs {item.original_price}</span>
//             <span className="discount">({item.discount_percentage}% OFF)</span>
//           </div>
//           {elementFound ?(

//             <button className="btn-add-bag" onClick={() => buttonClickedremove(item.id)}>Add to Bag</button>
//           ):(

//             <button className="btn-add-bag" onClick={() => buttonClicked(item)}>Add to Bag</button>
//           )

//           }

//         </div>
//        )
//       ))}
   
//     </>
//   );
// };

// export default HomeItem;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bagSliceActions } from '../features/todo/BagSlice';
import { BsHeartFill } from "react-icons/bs";
import { wishlistSliceActions } from '../features/todo/Wishlist';

const HomeItem = () => {
  const items = useSelector(state => state.items);
  const bagItems = useSelector(state => state.bagItem); // Corrected the state name to bagItems
  const dispatch = useDispatch();

  console.log(items);

  const buttonClicked = (item) => {
    dispatch(bagSliceActions.addbag(item));
    console.log('Clicked', item.company);
    console.log('added', bagSliceActions.addbag(item));
  };
  
  const buttonClickedRemove = (id) => {
    dispatch(bagSliceActions.removebag(id));
  };
  const buttonClickwishlist=(item)=>{
    dispatch(wishlistSliceActions.addwish(item))
  }

  return (
    <>
      {items.map((item) => {
        const elementFound = bagItems.findIndex(bagItem => bagItem.id === item.id) >= 0;

        return (
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
              <button  style={{backgroundColor:'#d46be2',margin:'4px 4px 4px 4px',padding:'4px 4px 4px 4px',borderRadius:'3px'}} onClick={() => buttonClickwishlist(item)}>Add wishlist</button>            </div>
            {elementFound ? (
              <button className="btn-add-bag" style={{backgroundColor:'red'}} onClick={() => buttonClickedRemove(item.id)}>Remove from Bag</button>
            ) : (
              <button className="btn-add-bag" onClick={() => buttonClicked(item)}>Add to Bag</button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default HomeItem;

