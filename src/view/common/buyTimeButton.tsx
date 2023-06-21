import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
import { getHistory } from 'src/modules/store';
export default function BuyTimeButton() {
  return (
    <button
      onClick={() => getHistory().push('/billing')}
      className='py-2.5 ml-3 px-4 text-xs tracking-wide text-black transition-colors duration-200 transform bg-green-300 hover:bg-green-500 duration-500 rounded-md disabled:opacity-80 disabled:cursor-default hover:opacity-100 focus:outline-none focus:opacity-100'
      type='button'>
      {/* <FontAwesomeIcon className="mr-3" icon={faHourglassStart} /> */}
      Add Time{' '}
    </button>
  );
}
