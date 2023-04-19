import React from "react";

const AdminDashboardMainContent = () => {
  return (
    <>
      <div className="page-header">
        <h1>Dashboard</h1>
        <small>Home / Dashboard</small>
      </div>

      <div className="page-content">
        <div className="analytics">
          <div className="card">
            <div className="card-head">
              <h2>107,200</h2>
              <span className="las la-user-friends"></span>
            </div>
            <div className="card-progress">
              <small>User activity this month</small>
              <div className="card-indicator">
                <div className="indicator one w60"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <h2>340,230</h2>
              <span className="las la-eye"></span>
            </div>
            <div className="card-progress">
              <small>Page views</small>
              <div className="card-indicator">
                <div className="indicator two w80"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <h2>$653,200</h2>
              <span className="las la-shopping-cart"></span>
            </div>
            <div className="card-progress">
              <small>Monthly revenue growth</small>
              <div className="card-indicator">
                <div className="indicator three w65"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <h2>47,500</h2>
              <span className="las la-envelope"></span>
            </div>
            <div className="card-progress">
              <small>New E-mails received</small>
              <div className="card-indicator">
                <div className="indicator four w90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardMainContent;
