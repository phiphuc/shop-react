
import React from 'react';
import Layout from '../../components/Layout/Layout';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import Helmet from 'react-helmet';
import Slider from '../../components/Slider/Slider'
const ImagesDir = "http://localhost:3333";
const Homepage = () => (
    <Layout >
        <Helmet>
            <title>Boutique store for latest in Men’s and Women’s fashion.</title>
            <meta name="keywords" content="uno, men's clothing, women's clothing" />
            <meta
                name="description"
                content="Luxury Men's and Women's Clothing, Made in Italy since 1934.
                UNO is a paradigm of Italian craftsmanship: discover how timeless style and contemporary elegance
                come together in our new Clothing collection." />
        </Helmet>
        <PromoBanner  settings={{
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        }} />

         <Slider
      imagesBig={[
        { id: 1, src: `${ImagesDir}/slider-images/1.jpg`, alt: '' },
        { id: 2, src: `${ImagesDir}/slider-images/2.jpg`, alt: '' },
        { id: 3, src: `${ImagesDir}/slider-images/3.jpg`, alt: '' },
        { id: 4, src: `${ImagesDir}/slider-images/4.jpg`, alt: '' },
        { id: 5, src: `${ImagesDir}/slider-images/5.jpg`, alt: '' },
      ]}

      imagesSmall={[
        { id: 1, src: `${ImagesDir}/slider-images/1_1.jpg`, alt: '' },
        { id: 2, src: `${ImagesDir}/slider-images/2_1.jpg`, alt: '' },
        { id: 3, src: `${ImagesDir}/slider-images/3_1.jpg`, alt: '' },
        { id: 4, src: `${ImagesDir}/slider-images/4_1.jpg`, alt: '' },
        { id: 5, src: `${ImagesDir}/slider-images/5_1.jpg`, alt: '' },
      ]}
      settings={{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      }}
    />
    </Layout>
    
);

export default Homepage;