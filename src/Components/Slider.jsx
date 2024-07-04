import React, { useEffect, useState, useRef } from 'react';
import getTrendingVideos from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import GlobalApi from '../Services/GlobalApi';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await GlobalApi.getTrendingVideos();
        console.log(response.data.results);
        setMovieList(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className=' text-white text-[30px] absolute
       mx-8 mt-[150px] cursor-pointer hidden md:block'
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className=' text-white text-[30px] absolute
       mx-8 mt-[150px] cursor-pointer right-0 hidden md:block'
        onClick={() => sliderRight(elementRef.current)}
      />
      {/* hidden md:block */}
      <div
        className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'
        ref={elementRef}
      >
        {movieList.length > 0 ? (
          movieList.map((item, index) => (
            <img
              key={index}
              src={IMAGE_BASE_URL + item.backdrop_path}
              // alt={item.title || item.name || 'Movie Image'}
              className='min-w-full md:h-[310px] object-cover
               object-left-top mr-5 rounded-md hover:border-[4px]
                border-gray-400 transition-all duration-100 ease-in-out'
            />
          ))
        ) : (
          <p className='text-white'>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Slider;
