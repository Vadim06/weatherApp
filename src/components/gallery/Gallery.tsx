import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import { GalleryItem } from './GalleryItem';
import icons from '../../assets/icons.json';

function Gallery() {
  const [filteredData, setFilteredData] = useState<object>(icons);
  const [inputValue, setInputValue] = useState<string>('');
  const [i, setI] = useState<number>(34);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(inputValue);
    if (inputValue) {
      setInputValue(inputValue.toLowerCase());
      setFilteredData(icons.filter((item) => {
        if (inputValue === '') {
          return item;
        } else {
          if (inputValue) {
            return item.name.toLowerCase().includes(inputValue)
          }
        }
      }))
    } else {
      setFilteredData(icons);
    }
  }

  return (
    <>
      <header>
        <form onSubmit={(e) => { submitHandler(e) }}>
          <input className='searchBar' type="text" placeholder='hledat' onChange={(e) => { setInputValue(e.currentTarget.value) }} />
        </form>
      </header>
      <div className='gallery'>
        {icons.map((item, id) => (
          <div key={id} id={item.id} className='galleryItem'>
            <GalleryItem item={item} id={id} i={i} inc={() => { setI(i + 1) }} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
