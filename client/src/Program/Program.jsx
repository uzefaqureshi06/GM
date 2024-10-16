import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Program.css';
import { getgymActionByID } from '../redux/action/gym';
import { useParams } from 'react-router-dom';

const Store = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const gym = useSelector((state) => state?.gym[0] || []);
    console.log(gym)
    useEffect(() => {
        dispatch(getgymActionByID(id));
    }, [dispatch, id]);

    return (
        <>
            <section className="boxin" style={{ backgroundImage: `url(${gym.banner?.[0]})` }} >

            </section>
            <div className="boxing">
                <div className="gym-card">
                    <h1>{gym.name}</h1>
                    <p>{gym.description}</p>
                </div>
            </div>
        </>
    );
};

export default Store;
