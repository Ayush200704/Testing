import React from 'react';
import '../components/Services.css'

const Services = () => {
  const servicesData = [
   
    {
      icon: 'fas fa-money-bill-trend-up',
      title: 'extra income',
      description: 'Our platform provides opportunities to generate extra income through accessible trading tools and real-time market insights, empowering users to capitalize on financial opportunities with ease.'
    },
    {
      icon: 'fas fa-coins',
      title: 'financial advisory',
      description: 'Our platform offers expert financial advisory services, leveraging a team of seasoned professionals to provide personalized guidance and strategic insights tailored to your investment goals and risk tolerance.'
    },
    {
      icon: 'fas fa-shield-halved',
      title: 'account protection',
      description: 'Rest assured, your account\'s security is our top priority. We employ state-of-the-art encryption and robust security measures to safeguard your personal and financial information, ensuring peace of mind as you trade confidently on our platform.'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'easy payments',
      description: 'Experience hassle-free transactions with our seamless payment system. Enjoy quick and secure deposits and withdrawals, making managing your funds a breeze as you focus on maximizing your trading potential.'
    },
    {
      icon: 'fas fa-money-bill-transfer',
      title: 'easy withdraw',
      description: 'With our user-friendly withdrawal process, accessing your funds is simple and efficient. Enjoy the convenience of seamless withdrawals, ensuring that you can easily transfer your earnings whenever you need them.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 support',
      description: '24/7 support ensures you\'re never alone. Our dedicated team is here to assist you anytime, ensuring a smooth trading experience from start to finish.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 support',
      description: '24/7 support ensures you\'re never alone. Our dedicated team is here to assist you anytime, ensuring a smooth trading experience from start to finish.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 support',
      description: '24/7 support ensures you\'re never alone. Our dedicated team is here to assist you anytime, ensuring a smooth trading experience from start to finish.'
    },{
      icon: 'fas fa-headset',
      title: '24/7 support',
      description: '24/7 support ensures you\'re never alone. Our dedicated team is here to assist you anytime, ensuring a smooth trading experience from start to finish.'
    }
  ];

  return (
   
    <section className="services">
      <div className="box-container">
        {servicesData.map((service, index) => (
          <div className="box" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Services;
