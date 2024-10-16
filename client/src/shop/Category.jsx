import React from 'react';
import './Category.css';

export default function Category() {
  return (
    <div>
      <h1 className="gallery-heading">SHORT OVERVIEW</h1>
      <div className="masonry-grid">
        <div className="masonry-column">
          <div>
            <img
              className="gallery-photo"
              src="https://img.freepik.com/free-photo/athletic-person-exercising-working-out_23-2150989827.jpg?w=740&t=st=1729060387~exp=1729060987~hmac=af7fa3ccaf09a30a38006005670fa30a120c2cd3cb53631033821e0ec699d1bc"
              alt="gallery-photo"
            />
          </div>
          <div>
            <video className="gallery-video" controls>
              <source src="https://videos.pexels.com/video-files/3196220/3196220-sd_640_360_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <img
              className="gallery-photo"
              src="https://img.freepik.com/free-photo/shirtless-sportsman-posing-gym_7502-5123.jpg?uid=R167645154&ga=GA1.1.1801442860.1728273986&semt=ais_hybrid"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="masonry-column">
          <div>
            <video className="gallery-video" controls>
              <source src="https://videos.pexels.com/video-files/4812498/4812498-sd_640_360_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <img
              className="gallery-photo"
              src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="gallery-photo"
              src="https://images.pexels.com/photos/7675412/pexels-photo-7675412.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="masonry-column">
          <div>
            <img
              className="gallery-photo"
              src="https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery-photo"
            />
          </div>
          <div>
            <video className="gallery-video" controls>
              <source src="https://videos.pexels.com/video-files/4438080/4438080-sd_640_360_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <img
              className="gallery-photo"
              src="https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="gallery-photo"
              src="https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="masonry-column">
          <div>
            <video className="gallery-video" controls>
              <source src="https://videos.pexels.com/video-files/4812848/4812848-sd_640_360_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <img
              className="gallery-photo"
              src="https://images.pexels.com/photos/2475875/pexels-photo-2475875.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
