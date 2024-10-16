import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVarietyByStoreIDAction } from "../redux/action/variety";
import './Variety.css';

const Variety = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation()
    const { banner } = location.state
    console.log(banner)
    const varities = useSelector((state) => state?.variety?.[0]);

    useEffect(() => {
        dispatch(getVarietyByStoreIDAction(id));
    }, [dispatch, id]);

    return (
        <div style={{ padding: '2rem' }}>
            <section className="variety-grid-section">
            <section className="poster-section">
    <img src={banner} alt="Banner Image" className="poster-image" />
    <div className="poster-container">

    </div>
</section>

                <div className="grid-container">
                    {varities?.map((item, index) => (
                        <div key={index} className="card">



                            {/* Image Section */}
                            <div className="image-container">
                                <img
                                    src={item?.image}
                                    alt={item?.name}
                                    className="image"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="content">
                                <div className="info">
                                    <span className="name">{item?.name}</span>
                                    <span className="price">
                                        <span className="dollar-icon">💲</span>
                                        {item?.price}
                                    </span>
                                </div>
                                <p className="description">{item?.description}</p>
                            </div>

                            {/* Button Section */}
                            <div className="button-container">
                                <button className="button">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Variety;
