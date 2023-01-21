import React from 'react';
import iconsTest from '../../assets/iconsTest.json'
import icons from '../../assets/icons.json'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  "item": { "id": string, "name": string, "filename": string, "parent": string, "editor": string },
  id: number;
  i: number;
  inc: React.Dispatch<React.SetStateAction<number>>;
}

export const GalleryItem = ({ item, id, i, inc }: Props) => {
  const elementId = Number(item.id) - 34;
  if (Number(item.id) !== Number(id) + i) {
    console.log(Number(item.id), Number(id) + i);
  }

  return (
    <>
      <div className='card'>
        <Card style={{ width: '6rem', minHeight: '8.5rem' }}>
          <Card.Img src={`https://eletak.oresi.cz/files/Icons/CZ/${icons[elementId]?.filename}`} />
          <Card.Text className='cardText'>{item.name}</Card.Text>
        </Card>
      </div>
    </>
  );
}
