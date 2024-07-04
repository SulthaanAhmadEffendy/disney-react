import React from 'react';

function HeaderItem({ name, Icon }) {
  return (
    <div
      className='text-white flex items-center gap-3 
    text-[15px] font-semibold cursor-pointer hover:underline
     underline-offset-8 mb-3'
    >
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  );
}

export default HeaderItem;
// https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
