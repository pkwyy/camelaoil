import palmOil from '../assets/images/palmOil.jpg';
import fattyAcid from '../assets/images/fattyAcid.jpeg';
import palmStearine from '../assets/images/palmStearine.webp';
import palmKernelOil from '../assets/images/palmKernelOil.jpg';
import palmKernelCake from '../assets/images/palmKernelCake.jpeg';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import useInView from '../hooks/useInView';
import { containerVariants, itemVariants } from '../utils/variants';

const images = [
  {
    title: 'Palm Olein',
    text: `Camela's Palm Olein is made from 100 % organic palm fruit oil. It is trans-fat and gluten-free and suitable for vegans. Our Palm Olein is vitamin A fortified and is ideal for all-purpose cooking, heat sautéing, frying, and baking.`,
    image: palmOil,
    link: '/products#palm-oil',
  },
  {
    title: 'Fatty Acid',
    text: `At Camela, our fatty acid is of the highest grade and is highly requested for producing soap and soap-based products, personal care products, paints, and, more recently, biodiesel.`,
    image: fattyAcid,
    link: '/products',
  },
  {
    title: 'Palm Stearine',
    text: `Our Palm Stearine is of excellent quality and can be used to formulate trans-free fats such as margarine, shortening, and vegetable ghee. It is solid at room temperature, white, and neutral in flavor.`,
    image: palmStearine,
    link: '/products',
  },
  {
    title: 'Palm Kernel Refined Vegetable Oil',
    text: `Our palm kernel refined vegetable oil is vitamin A fortified and suitable for all-purpose cooking and frying. It is also an appropriate substitute for trans fat used in commercial baking. It has a neutral color and flavor, can be solid at room temperature, and has a sharp melting curve.`,
    image: palmKernelOil,
    link: '/products',
  },
  {
    title: 'Palm Kernel Cake',
    text: `Besides our Palm-based products, we also cater to the market requirement for animal feed. Our PKC is very high quality and contains 23% protein and 18% fiber, making it suitable for feeding ruminants and a significant ingredient in poultry, piggery, and dairy feed.`,
    image: palmKernelCake,
    link: '/products',
  },
];

const ImageSlider = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const handleMouseDown = (e) => {
    const carouselElement = carousel.current;
    carouselElement.isDown = true;
    carouselElement.startX = e.pageX - carouselElement.offsetLeft;
    carouselElement.scrollLeftStart = carouselElement.scrollLeft;
  };

  const handleMouseLeave = () => {
    const carouselElement = carousel.current;
    carouselElement.isDown = false;
  };

  const handleMouseUp = () => {
    const carouselElement = carousel.current;
    carouselElement.isDown = false;
  };

  const handleMouseMove = (e) => {
    const carouselElement = carousel.current;
    if (!carouselElement.isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselElement.offsetLeft;
    const walk = (x - carouselElement.startX) * 2; // Scroll-fast
    carouselElement.scrollLeft = carouselElement.scrollLeft - walk;
  };

  return (
    <motion.div
      className="carousel"
      initial="hidden"
      animate={inView1 ? 'visible' : 'hidden'}
      variants={containerVariants}
      ref={setRef1}
    >
      <div className="flex w-fit flex-col p-5">
        <h2 className="text-4xl font-semibold">Our Products</h2>
        <Link
          to="/products"
          className="transform text-right font-crimsonText text-xl italic text-carrotOrange transition-transform duration-300 ease-in-out hover:scale-105"
        >
          See all
        </Link>
      </div>
      <div className="relative overflow-hidden">
        <div className="top left absolute flex h-full w-full justify-between">
          <button
            onClick={movePrev}
            className="z-10 m-0 h-full w-10 bg-black p-0 text-center text-white opacity-75 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-carrotOrange hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="z-10 m-0 h-full w-10 bg-black p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-carrotOrange hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 h-12 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <motion.div
          variants={itemVariants}
          ref={carousel}
          className="carousel-container no-scrollbar relative z-0 flex h-48 gap-3 overflow-x-scroll scroll-smooth md:h-96"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="carousel-item relative w-full text-center"
              >
                <a
                  href={image.link}
                  className="z-0 block aspect-square h-full w-80 bg-cover bg-left-top bg-no-repeat bg-origin-padding md:w-[420px]"
                  style={{ backgroundImage: `url(${image.image || ''})` }}
                ></a>
                <a
                  href={image.link}
                  className="left-0 top-0 z-10 hidden aspect-square h-full w-full flex-col justify-center bg-black/80 px-5 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 hover:opacity-100 md:absolute md:flex"
                >
                  <h3 className="mx-auto px-3 py-6 text-5xl font-bold">
                    {image.title}
                  </h3>
                  <p className="text-lg font-extralight">{image.text}</p>
                </a>
                <Link
                  to={image.link}
                  className="absolute bottom-0 left-0 flex h-1/3 w-full items-center justify-center bg-black/70 text-xl text-white backdrop-blur-md md:hidden"
                >
                  {image.title}
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
