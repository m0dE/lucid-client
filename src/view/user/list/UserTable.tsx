import React, { useState, useEffect } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/user/list/userListActions';
import selectors from 'src/modules/user/list/userListSelectors';
import Roles from 'src/security/roles';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import Message from 'src/view/shared/message';
import {
  formatMilliseconds,
  convertMinuteToMs,
} from 'src/utils/FormatMilliseconds';
import ReactDOM from 'react-dom';

import userActions from 'src/modules/auth/authActions';

function UserTable() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const [toggleTimeRemainingModal, setToggleTimeRemainingModal] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [addTime, setAddTime] = useState(0);

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const [users, setUsers] = useState([]);

  const pagination = useSelector(selectors.selectPagination);
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);

  const openTimeRemainingModal = (id) => {
    setUserId(id);
    setToggleTimeRemainingModal(true);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      })
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const onChangeTimeRemaining = (e) => {
    setAddTime(e.target.value);
    if (e.target.value && convertMinuteToMs(e.target.value)) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  const UpdateUserTime = () => {
    setErrorMessage(false);
    if (addTime && convertMinuteToMs(addTime)) {
      const selectedUser = rows.filter((f) => f.id === userId);
      if (selectedUser && selectedUser.length) {
        const currentTimeRemaining = selectedUser[0].timeRemaining
          ? parseInt(selectedUser[0].timeRemaining)
          : 0;
        let payload = {
          id: userId,
          timeRemaining: currentTimeRemaining + convertMinuteToMs(addTime),
        };
        dispatch(userActions.doUpdateProfile(payload, false));
        Message.success('Data saved successfully');
        const tempUsers = [...users];
        // @ts-ignore
        tempUsers
          .filter((s: any) => s.id === userId)
          .map((m: any) => (m.timeRemaining = payload.timeRemaining));
        setUsers(tempUsers);
        setToggleTimeRemainingModal(false);
      }
    } else {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    if (!toggleTimeRemainingModal) {
      // @ts-ignore
      setAddTime(null);
      setUserId(null);
    }
  }, [toggleTimeRemainingModal]);

  useEffect(() => {
    if (rows) {
      setUsers(rows);
    }
  }, [rows]);
  return (
    <>
      <div className='table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border'>
        <table className='border-collapse min-w-full leading-normal'>
          <thead>
            <tr>
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'email'}
                label={i18n('user.fields.email')}
              />
              <TableColumnHeader
                label={i18n('user.fields.roles')}
              ></TableColumnHeader>
              <TableColumnHeader label='Time Remaining'></TableColumnHeader>
              <TableColumnHeader label='ACTION' align='center' />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className='flex justify-center p-5'>
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              users &&
              users.map((row: any) => (
                <tr key={row.id}>
                  <td className='whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm'>
                    {row.email}
                  </td>
                  <td className='whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm'>
                    {row.roles.map((roleId) => (
                      <div key={roleId}>
                        <span>{Roles.labelOf(roleId)}</span>
                      </div>
                    ))}
                  </td>
                  <td className='whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm'>
                    {row.timeRemaining
                      ? formatMilliseconds(row.timeRemaining)
                      : '00:00:00'}
                  </td>
                  <td
                    align='center'
                    className='w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800'
                  >
                    <button
                      className='py-2.5 ml-3 px-4 text-xs tracking-wide text-black transition-colors duration-200 transform bg-green-300 hover:bg-green-500 duration-500 rounded-md disabled:opacity-80 disabled:cursor-default hover:opacity-100 focus:outline-none focus:opacity-100'
                      type='button'
                      onClick={() => openTimeRemainingModal(row.id)}
                    >
                      Add Time{' '}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {toggleTimeRemainingModal &&
        ReactDOM.createPortal(
          <div className='dark'>
            <div
              className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
              tabIndex={-1}
            >
              <div
                className='relative my-6 mx-auto w-96'
                onClick={(event) => event.stopPropagation()}
              >
                <div className='relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none dark:bg-gray-800 dark:text-white group bg-white'>
                  <div className='flex items-center p-5 rounded-t'>
                    <div className='text-lg font-semibold'>ADD TIME</div>
                    <button
                      type='button'
                      className='ml-auto bg-transparent border-0 text-gray-900 float-right text-lg leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setToggleTimeRemainingModal(false)}
                    >
                      <span className='bg-transparent text-white h-6 w-6 text-lg block outline-none focus:outline-none'>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </button>
                  </div>
                  <hr />

                  <label
                    className={`mt-5 flex justify-center block text-sm text-gray-800 dark:text-gray-200`}
                  >
                    Selected User:{' '}
                    <strong className={`ml-1 `}>
                      {rows && rows.filter((u) => u.id === userId)[0].email}
                    </strong>
                  </label>
                  <label
                    className={`mt-5 flex justify-center block text-lg text-gray-800 dark:text-gray-200`}
                  >
                    Time (in mins)
                  </label>
                  <div className='flex justify-center'>
                    <input
                      type={`number`}
                      autoFocus
                      onChange={onChangeTimeRemaining}
                      placeholder={`TIME IN MINUTE`}
                      className={`block px-4 py-2 mt-2 mb-5 bg-white border border-gray-300 rounded-md dark:bg-gray-600 text-md ${
                        errorMessage
                          ? 'dark:border-red-400 dark:text-red-600 dark:focus:border-red-500'
                          : 'dark:text-white dark:border-gray-600 dark:focus:border-green-500'
                      }`}
                      value={addTime || 0}
                    />
                  </div>

                  <div className='flex justify-center mb-3'>
                    <button
                      type='button'
                      className='inline-block px-5 py-2 my-2 mr-6 text-sm text-white border border-white rounded-md hover:bg-gray-300 focus:outline-none dark:hover:text-black'
                      onClick={() => setToggleTimeRemainingModal(false)}
                    >
                      CANCEL
                    </button>
                    <button
                      type='button'
                      onClick={UpdateUserTime}
                      className='inline-block border-green-500 border-2 rounded-md px-4 py-2 my-2 mr-4 text-sm text-green-500 hover:text-white hover:bg-green-500 focus:outline-none focus:border-green-500'
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </div>,
          (document as any).getElementById('modal-root')
        )}
    </>
  );
}

export default UserTable;
