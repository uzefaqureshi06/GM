import React, { useEffect } from 'react'
import './Store.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getstoreAction } from '../redux/action/store';
const Store = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.store);
  const navigate = useNavigate();
  
  console.log(stores);
  useEffect(() => {
    dispatch(getstoreAction());
  }, [dispatch])
  const handleNavigate = (id,image) => {
    navigate(`/store/${id}`,{ state: { banner: image }})
  }
  return (
    <>
      <div className='store'>
        <h1>HOME STORE <span>EQUIPMENTS</span></h1>
      </div>

      <div className='store-items' style={{
      }} >
        {stores?.map((item, index) => (
          <div key={index} className="card" style={{ height: 'auto', padding: '1rem', width: '600px' }} >
            <div className="card-header">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.text}</p>

              <div className="card-rating">
                <span>Rating: {item.rating} / 5</span>
              </div>

              <div className="card-price">
                <span>Price: ${item.price}</span>
              </div>

              <NavLink to="/cart">
                <button className="buy-now">ADD TO CART</button>
              </NavLink>

              <button onClick={() => handleNavigate(item.id,item.banner)} className="variety">VARIETY</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
