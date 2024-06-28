import React from 'react';
import Slider from './Slider';
import './Slider.css';

const SliderImages = () => {
  const slides = [
    'https://img.freepik.com/premium-photo/young-woman-using-mobile-phone-against-yellow-background_1048944-8729935.jpg?size=626&ext=jpg&ga=GA1.1.542956002.1695625243&semt=ais_user',
    'https://img.freepik.com/premium-photo/wash-appliance-domestic-equipment-housework-laundry-cleaning-white-household-machine-technology_163305-255984.jpg?ga=GA1.1.542956002.1695625243&semt=ais_user',
    'https://img.freepik.com/free-photo/discount-headphones-podium_23-2150165470.jpg?ga=GA1.1.542956002.1695625243&semt=ais_user',
    'https://img.freepik.com/free-vector/modern-sale-banner-with-abstract-shapes_1361-1641.jpg?ga=GA1.1.542956002.1695625243&semt=ais_user'
  ];

  return (
    <div className="App">
      <Slider slides={slides} />
    </div>
  );
};

export default SliderImages