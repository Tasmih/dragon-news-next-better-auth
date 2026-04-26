import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  { id: 1, title: "Breaking: Major Earthquake Hits Coastal Region" },
  { id: 2, title: "Breaking: Stock Markets See Sudden Drop Worldwide" },
  { id: 3, title: "Breaking: New Tech Policy Announced by Government" },
  { id: 4, title: "Breaking: International Summit Begins Today" },
  { id: 5, title: "Breaking: Severe Weather Alert Issued" }
];

const BreakingNews = () => {
  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
      
      <button className='btn bg-pink-500 text-white'>
        Latest News
      </button>

      <Marquee pauseOnHover={true} speed={100}>
        {news.map(n => {
  return <span key={n.id}>{n.title}</span>;
})}
;      </Marquee>

    </div>
  );
};

export default BreakingNews;