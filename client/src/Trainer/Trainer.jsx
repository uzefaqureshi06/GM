import React from 'react';
import './Trainer.css';

const Trainer = () => {
  return (
    <div className="trainer-container">
      <div className="trainer">
        <h1>Meet Our<span>Trainers</span></h1>
      </div>

      <div id="card-carousel" className="relative w-full" data-carousel="static">
        <div className="carousel-content">
          
          <div className="trainer-card">
            <img src="https://cdn.shopify.com/s/files/1/1497/9682/files/2_d3bccb6e-0ee7-428a-802a-e7b6b9950df4.jpg?v=1686318978&width=750" alt="Trainer 1" className="trainer-image"/>
            <div className="trainer-info">
              <h3>Alisa Marinda</h3>
            </div>
          </div>

       
          <div className="trainer-card">
            <img src="https://e1.pxfuel.com/desktop-wallpaper/1014/158/desktop-wallpaper-carlton-loth-gym-boy-thumbnail.jpg" alt="Trainer 2" className="trainer-image"/>
            <div className="trainer-info">
              <h3>Jane Smith</h3>
            </div>
          </div>

         
          <div className="trainer-card">
            <img src="https://m.media-amazon.com/images/I/71zyqGLmVJL._AC_UF1000,1000_QL80_.jpg" alt="Trainer 3" className="trainer-image"/>
            <div className="trainer-info">
              <h3>Marinda Rose</h3>
            </div>
          </div>
          <div className="trainer-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw0ZjurVkHpWZE4v-pxE2fjfAHwMdNlHSGZyPVhj8dN4GvFoOoM2OKSzt2a30DxVgJHw&usqp=CAU" alt="Trainer 3" className="trainer-image"/>
            <div className="trainer-info">
              <h3>Mike Johnson</h3>
            </div>
          </div>

          
        </div>

       
        <button type="button" className="carousel-prev" data-carousel-prev>
          <span className="carousel-btn">‹</span>
        </button>
        <button type="button" className="carousel-next" data-carousel-next>
          <span className="carousel-btn">›</span>
        </button>
      </div>
    </div>
  );
};

export default Trainer;
