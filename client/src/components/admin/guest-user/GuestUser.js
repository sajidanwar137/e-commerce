import React, { useState } from "react";
import AdminPageTitle from "components/admin/page-title/AdminPageTitle";
import "./index.scss";

const GuestUser = () => {
  return (
    <>
      <AdminPageTitle
        icon="dc-icon-setting"
        title="Guest User List"
        subheading="This is an example dashboard created using build-in elements and components."
      />
      <div className="border box-shadow mb-15 guest-user">
        <div className="border-b px-10 py-7 d-flex justify-content-start align-items-center">
          <span className="dc-icon-address-book me-5"></span>
          <h5 className="fw-400">User list</h5>
        </div>
        <div className="px-10 py-15">
          <div className="guest-user__list d-flex align-items-center justify-content-start">
            <table className="guest-user__table border-s border-t">
              <thead>
                <tr>
                  <th scope="col" className="border-b border-e p-3">#</th>
                  <th scope="col" className="border-b border-e p-3">Name</th>
                  <th scope="col" className="border-b border-e p-3">Email</th>
                  <th scope="col" className="border-b border-e p-3">Status</th>
                  <th scope="col" className="border-b border-e p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border-b border-e p-3">1</th>
                  <td className="border-b border-e p-3">Mark</td>
                  <td className="border-b border-e p-3">Otto</td>
                  <td className="border-b border-e p-3">@mdo</td>
                  <td className="border-b border-e p-3">@mdo</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-e p-3">2</th>
                  <td className="border-b border-e p-3">Mark</td>
                  <td className="border-b border-e p-3">Otto</td>
                  <td className="border-b border-e p-3">@mdo</td>
                  <td className="border-b border-e p-3">@mdo</td>
                </tr>
                <tr>
                  <th scope="row" className="border-b border-e p-3">3</th>
                  <td className="border-b border-e p-3">Mark</td>
                  <td className="border-b border-e p-3">Otto</td>
                  <td className="border-b border-e p-3">@mdo</td>
                  <td className="border-b border-e p-3">@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestUser;
