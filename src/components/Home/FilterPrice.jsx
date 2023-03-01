import React, { useState } from 'react';
import './styles/filterPrice.css';

const FilterPrice = ({ setInputPrice }) => {
  const [sliderValueFrom, setSliderValueFrom] = useState(0);
  const [sliderValueTo, setSliderValueTo] = useState(5000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputFrom = parseInt(e.target.from.value);
    const inputTo = parseInt(e.target.to.value);
    if (inputFrom && inputTo) {
      setInputPrice({
        from: inputFrom,
        to: inputTo,
      });
    } else if (!inputFrom && inputTo) {
      setInputPrice({
        from: 0,
        to: inputTo,
      });
    } else if (inputFrom && !inputTo) {
      setInputPrice({
        from: inputFrom,
        to: Infinity,
      });
    } else {
      setInputPrice({
        from: 0,
        to: Infinity,
      });
    }
  };

  return (
    <section className='filter__byprice'>
      <h4>Price</h4>
      <form onSubmit={handleSubmit}>
        <div className='slider__container'>
          <label htmlFor='from'>From </label>
          <div className='slider__value' id='sliderValueFrom'>{sliderValueFrom}</div>
          <input
            type='range'
            id='from'
            min='0'
            max='5000'
            step='1'
            value={sliderValueFrom}
            className='slider'
            onChange={(e) => {
              setSliderValueFrom(parseInt(e.target.value));
            }}
          />

          <label htmlFor='to'>To </label>
          <div className='slider__value' id='sliderValueTo'>{sliderValueTo}</div>
          <input
            type='range'
            id='to'
            min='0'
            max='5000'
            step='1'
            value={sliderValueTo}
            className='slider'
            onChange={(e) => {
              setSliderValueTo(parseInt(e.target.value));
            }}
          />
        </div>
        <button>Filter Price</button>
      </form>
    </section>
  );
};

export default FilterPrice;




