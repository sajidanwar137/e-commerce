import React, {useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Logout from '../logout/Logout';
import { getAdmin } from "redux/thunks/admin/adminThunk";
import {getLocalStorageByKey} from 'utility/helper';
import {headerBearer} from 'utility/utility';
import './index.scss';

function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.admin);
  const token = getLocalStorageByKey('__auth', ['token'])
  useEffect(() => {
    if(data && (data?.data?.length === 0 && data?.success === false)){
      dispatch(getAdmin(headerBearer(token?.token)));
    }
  }, [dispatch, data]);

  return (
    <div className='admin__header d-flex py-12 px-15 align-items-center justify-content-between'>
      <h5>Hi! {data?.data[0]?.name}</h5>
      <Logout/>
    </div>
  )
}

export default Header
