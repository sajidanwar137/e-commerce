import React, {useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Logout from '../logout/Logout'
import { getAdmin } from "store/admin/actions";
import {getLocalStorageByKey} from 'utility/helper';
import {headerBearer} from 'utility/utility';
import './index.scss';
function Header() {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state?.admin?.data);
  const token = getLocalStorageByKey('__auth', ['token'])
  useEffect(() => {
    if(adminData && adminData?.length === 0){
      dispatch(getAdmin(headerBearer(token?.token)));
    }
  }, [dispatch, adminData]);

  return (
    <div className='admin__header d-flex py-12 px-15 align-items-center justify-content-between'>
      <h5>Hi! {adminData[0]?.name}</h5>
      <Logout/>
    </div>
  )
}

export default Header
