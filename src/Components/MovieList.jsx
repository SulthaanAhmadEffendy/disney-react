import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    const fetchMoviesByGenreId = async () => {
      try {
        const response = await GlobalApi.getMovieByGenreId(genreId);
        console.log(response.data.results);
        setMovieList(response.data.results);
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
      }
    };

    fetchMoviesByGenreId();
  }, [genreId]);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className='relative'>
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'} `}
      />

      <div
        ref={elementRef}
        className='flex overflow-x-auto gap-8
    scrollbar-none scroll-smooth pt-5 px-3 pb-3'
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} key={item.id} />
            ) : (
              <MovieCard movie={item} key={item.id} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
      />
    </div>
  );
}

export default MovieList;
// hidden md:block
