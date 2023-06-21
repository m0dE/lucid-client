import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VideoTutorialPopup = (props) => {
  const { videoUrl, className, buttonLabel, icon, customStyle } = props;
  const [videoPopup, setVideoPopup] = useState(false);

  const popupContent = (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg p-2'>
        <div className='flex justify-end'>
          <button onClick={() => setVideoPopup(false)}>
            <FontAwesomeIcon
              className='text-gray-500 mb-1 hover:text-gray-700'
              icon={faTimes}
            />
          </button>
        </div>
        <div className='aspect-w-16 aspect-h-9'>
          <iframe
            width='1080'
            height='760'
            src={videoUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        className={`inline-block text-sm text-white bg-blue-500 rounded-md hover:bg-blue-700 duration-500 focus:outline-none ${className}`}
        onClick={() => setVideoPopup(true)}
        style={customStyle}>
        <FontAwesomeIcon className='mr-2' icon={icon} />
        {buttonLabel}
      </button>
      {videoPopup &&
        ReactDOM.createPortal(
          popupContent,
          (document as any).getElementById('modal-root')
        )}
    </div>
  );
};

export default VideoTutorialPopup;
