import React from 'react';
import ImageCard from './ImageCard';
import cards from '../static/cards';
import useWindowPosition from '../hook/useWindowPosition';
import '../css/image_page.css'

const ImagePage = () => {
    const checked = useWindowPosition('header');
    return (
      <div className="image-page" id="place-to-visit">
        <ImageCard card={cards[1]} checked={checked} />
        <ImageCard card={cards[0]} checked={checked} />
      </div>
    );
};
export default ImagePage;