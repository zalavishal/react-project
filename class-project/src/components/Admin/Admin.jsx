import React, { Component } from 'react';
import Headers from './commonComponent/02Headerfile';
import './Admins.css'

class Admin extends Component {
    render() {
        return (
            <>
            <div className="pso">

                <Headers />
            </div>

                <div className="niche">
                    <input type="checkbox" id="menu-toggle" />
                    <div className="sidebar">
                        <div className="side-header">
                            <h3>L<span>ogo</span></h3>
                        </div>

                        <div className="side-content">
                            <div className="profile">
                                <div className="profile-img bg-img fat1"></div>
                                <h4>David Green</h4>
                                <small>Art Director</small>
                            </div>

                            <div className="side-menu">
                                <ul className='p0'>
                                    <li>
                                        <a href='' className="active">
                                            <span className="las la-home"></span>
                                            <small>Dashboard</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="las la-user-alt"></span>
                                            <small>Profile</small>  
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="las la-envelope"></span>
                                            <small>Mailbox</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="las la-clipboard-list"></span>
                                            <small>Projects</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="las la-shopping-cart"></span>
                                            <small>Orders</small>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="las la-tasks"></span>
                                            <small>Tasks</small>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="main-content">

                        <header>
                            <div className="header-content">
                                <label for="menu-toggle">
                                    <span className="las la-bars"></span>
                                </label>

                                <div className="header-menu">
                                    <label >
                                        <span className="las la-search"></span>
                                    </label>

                                    <div className="notify-icon">
                                        <span className="las la-envelope"></span>
                                        <span className="notify">4</span>
                                    </div>

                                    <div className="notify-icon">
                                        <span className="las la-bell"></span>
                                        <span className="notify">3</span>
                                    </div>

                                    <div className="user">
                                        <div className="bg-img fat2" ></div>

                                        <span className="las la-power-off"></span>
                                        <span>Logout</span>
                                    </div>
                                </div>
                            </div>
                        </header>


                        <main>

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
                                                <div className="indicator three w65" ></div>
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


                                <div className="records table-responsive">

                                    <div className="record-header">
                                        <div className="add">
                                            <span>Entries</span>
                                            <select name="" id="">
                                                <option value="">ID</option>
                                            </select>
                                            <button>Add record</button>
                                        </div>

                                        <div className="browse">
                                            <input type="search" placeholder="Search" className="record-search" />
                                            <select name="" id="">
                                                <option value="">Status</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th><span className="las la-sort"></span> CLIENT</th>
                                                    <th><span className="las la-sort"></span> TOTAL</th>
                                                    <th><span className="las la-sort"></span> ISSUED DATE</th>
                                                    <th><span className="las la-sort"></span> BALANCE</th>
                                                    <th><span className="las la-sort"></span> ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat3" ></div>
                                                            <div className="client-info">
                                                                <h4>Andrew Bruno</h4>
                                                                <small>bruno@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $3171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        -$205
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat1"></div>
                                                            <div className="client-info">
                                                                <h4>Exty Bruno</h4>
                                                                <small>exty@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $3171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        -$205
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat1" ></div>
                                                            <div className="client-info">
                                                                <h4>Exty Bruno</h4>
                                                                <small>exty@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $2171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        <span className="paid">Paid</span>
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat3"></div>
                                                            <div className="client-info">
                                                                <h4>Andrew Bruno</h4>
                                                                <small>bruno@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $3171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        -$205
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat1" ></div>
                                                            <div className="client-info">
                                                                <h4>Exty Bruno</h4>
                                                                <small>exty@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $3171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        <span className="paid">Paid</span>
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat1"></div>
                                                            <div className="client-info">
                                                                <h4>Exty Bruno</h4>
                                                                <small>exty@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $2171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        <span className="paid">Paid</span>
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat3"></div>
                                                            <div className="client-info">
                                                                <h4>Andrew Bruno</h4>
                                                                <small>bruno@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $3171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        -$205
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat1"></div>
                                                            <div className="client-info">
                                                                <h4>Exty Bruno</h4>
                                                                <small>exty@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $3171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        -$205
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#5033</td>
                                                    <td>
                                                        <div className="client">
                                                            <div className="client-img bg-img fat1" ></div>
                                                            <div className="client-info">
                                                                <h4>Exty Bruno</h4>
                                                                <small>exty@crossover.org</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $2171
                                                    </td>
                                                    <td>
                                                        19 April, 2022
                                                    </td>
                                                    <td>
                                                        <span className="paid">Paid</span>
                                                    </td>
                                                    <td>
                                                        <div className="actions">
                                                            <span className="lab la-telegram-plane"></span>
                                                            <span className="las la-eye"></span>
                                                            <span className="las la-ellipsis-v"></span>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>

                        </main>

                    </div>
                </div>
            </>
        );
    }
}

export default Admin;