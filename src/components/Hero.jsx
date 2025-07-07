import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We’re changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-secondary'>
            Our Products
          </Link>
        </div>
      </div>
        <div className="carousel w-full max-w-md h-[28rem] rounded-box bg-neutral pr-4 pt-4 pb-4 space-x-4">
          {carouselImages.map((image, index) => (
            <div id={`slide${index}`} key={index} className="carousel-item relative w-full">
              {/* Carousel image */}
              <img src={image} className="w-full h-full object-cover rounded-box" />

              {/* Navigation wrapper (buttons are now transparent and full height) */}
              <div className="absolute inset-0 flex justify-between items-center">
                {/* Left button */}
                <a
                  href={`#slide${(index - 1 + carouselImages.length) % carouselImages.length}`}
                  className="w-1/3 h-full flex items-center justify-start"
                >
                  <span className="sr-only">Previous</span>
                </a>

                {/* Right button */}
                <a
                  href={`#slide${(index + 1) % carouselImages.length}`}
                  className="w-1/3 h-full flex items-center justify-end"
                >
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero
