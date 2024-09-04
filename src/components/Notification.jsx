import React from 'react';
import { notification1 } from "../assets";
import { notificationImages } from "../constants";
import './Notification.css';

const Notification = ({ className, title }) => {
  return (
    <div className={`notification ${className || ""}`}>
      <img
        src={notification1}
        width={62}
        height={62}
        alt="notification"
        className="notification-image"
      />
      
      <div className="notification-content">
        <h6 className="notification-title">{title}</h6>
        
        <div className="notification-footer">
          <ul className="notification-avatars">
            {notificationImages.map((item, index) => (
              <li style={{
               
                listStyle:'none'

               }}  key={index} className="avatar-item">
                <img
                  src={item}
                  className="avatar-image"
                  width={20}
                  height={20}
                  alt={`User ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <div className="notification-time">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;