import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getgymAction } from '../redux/action/gym';
import './Programs.css';

import { NavLink } from 'react-router-dom';

const Programs = () => {
  const dispatch = useDispatch();
  const gyms = useSelector((state) => state.gym);
  console.log(gyms);
  useEffect(() => {
    dispatch(getgymAction());
  }, [dispatch])
if (gyms.length < 0) {
  return "loading...."
}
  return (
    <div>
      <div className="programs">
        <h1>Our Programs Build Your Best <span>BODY</span></h1>
        <br />

        <div className="programs-list">
          {
            gyms.map((program, index) => (
              <div key={index} className="card">
                <img src={program?.image} alt={program?.title} className="icon" />

                <a href="#">
                  <h5 className="card-title">{program?.name}</h5>
                </a>

                <p className="card-text">{program?.description}</p>
                <NavLink to={`/program/${program?.id}`}>
                  <button className="buy-now">Show More</button>
                </NavLink>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Programs;
