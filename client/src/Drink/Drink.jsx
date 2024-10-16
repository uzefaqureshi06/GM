import React from 'react';
import './Drink.css';
import { NavLink } from 'react-router-dom'; // Adding link for shop navigation
import Store from '../pages/Store';

const Drink = () => {
  return (
    <div className="drink-container">
      <section className="drink-section">
        <div className="drink-info">
          <h1>Fuel Your Performance</h1>
          <p>Explore our range of high-performance supplements designed to help you maximize your potential and recovery. Whether you're pushing your limits or simply staying healthy, we've got you covered.</p>
          <NavLink to="/store">
            <button className="shop-btn">Start Shopping</button>
          </NavLink>
        </div>
        <div className="drink-image">
          <img className='product-image' src="https://res.cloudinary.com/dxqt7tfgl/image/upload/v1728628238/Uzefa/an99vk0c8dkstvqoqm4s.png" alt="Supplement" />
        </div>
      </section>

   
    </div>
  );
};

<Store/>
export default Drink;
