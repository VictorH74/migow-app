'use client'
import React from 'react';
import useUserActivities from "./useUserActivities"


export default function UserActivities() {
  const hook = useUserActivities();

  // TODO: fetch user activities in date order while display loading

  return (
    <div>
      <div className='flex justify-between'>
        <h2>
          Activities
        </h2>
        <div className='flex gap-1 overflow-hidden rounded-2xl'>
          <button ref={hook.allBtnRef} className='p-2 bg-gray-500 text-white'>All</button>
          <button ref={hook.postsBtnRef} className='p-2 bg-gray-500 text-white'>Posts</button>
          <button ref={hook.commentsBtnRef} className='p-2 bg-gray-500 text-white'>Comments</button>
          <button ref={hook.reactionsBtnRef} className='p-2 bg-gray-500 text-white'>Reactions</button>
        </div>
      </div>

      <div>
        {/* owner: post, comments aand reactions */}
      </div>
    </div>
  );
}