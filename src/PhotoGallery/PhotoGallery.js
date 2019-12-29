import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import styles from './PhotoGallery.scss';

const PHOTOS = [
    {
        src: './src/img/proposal.JPG',
        title: 'the proposal',
        width: 789,
        height: 592
    },
    {
        src: './src/img/ritz.jpg',
        title: 'lookin\' fancy',
        height: 1,
        width: 1
    },
    {
        src: './src/img/spca.jpg',
        title: 'at the spca fundraiser',
        height: 1,
        width: 1,
    },
    {
        src: './src/img/snowman.jpg',
        title: 'snowmen',
        height: 1365,
        width: 2048,
    },
    {
        src: './src/img/snowduck.jpg',
        title: 'yosemite in the snow',
        height: 2048,
        width: 1365,
    },
    {
        src: './src/img/boat.jpg',
        title: 'on a boat',
        height: 1536,
        width: 2048,
    },
    {
        src: './src/img/jeepney.jpg',
        title: 'public transportation in the Philippines',
        height: 1536,
        width: 2048,
    },
    {
        src: './src/img/red.jpg',
        title: 'look at how young we are',
        height: 540,
        width: 720,
    },
    {
        src: './src/img/sierra.jpg',
        title: 'eastern sierras',
        height: 4,
        width: 6,
    },
    {
        src: './src/img/pinnacles.jpg',
        title: 'climbing',
        height: 987,
        width: 1480,
    },
];

export default function PhotoGallery(props) {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
    
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    
    return (
        <div>
            <Gallery 
                photos={PHOTOS} 
                onClick={openLightbox}
            />

            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={PHOTOS.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                        }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}
