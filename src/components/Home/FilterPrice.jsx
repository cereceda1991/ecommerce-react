import React, { useState } from 'react';
import './styles/filterPrice.css'

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
    <div className='filter__byprice'>
      <h4>Price</h4>
      <form className='filter__price' onSubmit={handleSubmit}>
        <label htmlFor='from'>From </label>
        <div className='slider__value' id='sliderValueFrom'>{sliderValueFrom}</div>
        <input
          type='range'
          id='from'
          min='0'
          max='10000'
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
          max='10000'
          step='1'
          value={sliderValueTo}
          className='slider'
          onChange={(e) => {
            setSliderValueTo(parseInt(e.target.value));
          }}
        />
        <button>Filter Price</button>
      </form>
    </div>
  );
};

export default FilterPrice;




