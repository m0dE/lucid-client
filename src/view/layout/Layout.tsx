import React from 'react';
import Menu from 'src/view/layout/Menu';
import { useRouteMatch } from 'react-router-dom';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import { useSelector } from 'react-redux';

function Layout(props) {
  const match = useRouteMatch();

  const menuVisible = useSelector(layoutSelectors.selectMenuVisible);

  return (
    <div className='flex h-full dark:bg-gray-600'>
      <Menu url={match.url} />
      <div
        className={`${
          menuVisible ? 'hidden' : 'flex'
        } sm:flex md:flex lg:flex  dark:bg-gray-700 flex-col flex-auto min-h-screen overflow-x-hidden`}
      >
        <div className='p-1'>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
