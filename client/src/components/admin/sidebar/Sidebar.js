import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAdminLogo } from "store/adminLogo/actions";
import CustomAccordion from '../../common/accordion/CustomAccordion'
import './index.scss';


export default function Sidebar() {
  const data = useSelector((state) => state?.adminlogo?.data[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminLogo());
  }, [dispatch]);

  return (
    <div className='admin-aside'>
      <div className='admin-aside__logo py-13 px-8'>
        {data && <Link to="/dashboard"><img src={`${data.originalurl}?${data.updatedAt}`} alt='' /></Link>}
      </div>
      <div className='admin-aside__menu-text pb-10 px-8 pt-25'>GETTING STARTED</div>
      <CustomAccordion/>
    </div>
  )
}
