import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Allusers = () => {
  const [user, setUser] = useState([]);
  // const [mark, decimal_mark] = useState([]);
  // const [components1, components] = useState([]);
  // const [blog, stay_informed] = useState([]);


  const fetchData = () => {
    fetch("https://justjayapi.000webhostapp.com/allusers")
      .then((response) => response.json())
      .then((data) => {
        setUser(data["Data"])
        // decimal_mark(data.results[0].annotations.currency.alternate_symbols)
        // components(data.results[2].components)
        // stay_informed(data.stay_informed)
      })
  }
  const deleteUser =(event)=>{
    // console.log("hellow",e.currentTarget);
    // const abcd=e.target.dataset.value
    console.log("called click");
    console.log(event.target);
    // console.log(event.target.data.value);
    let userId = event.currentTarget.dataset.value;
    console.log(userId);
    fetch(`https://justjayapi.000webhostapp.com/deleteusergetmethod?id=${userId}`)      
    .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setUser(data["Data"])
        // decimal_mark(data.results[0].annotations.currency.alternate_symbols)
        // components(data.results[2].components)
        // stay_informed(data.stay_informed)
      })
  }

  useEffect(() => { 
    fetchData();
  }, [user])
  return (
    <>
      <main>
        <div className="page-header">
          <h1>All Users</h1>
          <small>Home / Dashboard</small>
        </div>

        <div className="page-content">

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
                <input
                  type="search"
                  placeholder="Search"
                  className="record-search"
                />
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
                    <th>
                      <span className="las la-sort"></span> CLIENT
                    </th>
                    <th>
                      <span className="las la-sort"></span> TOTAL
                    </th>
                    <th>
                      <span className="las la-sort"></span> ISSUED DATE
                    </th>
                    <th>
                      <span className="las la-sort"></span> BALANCE
                    </th>
                    <th>
                      <span className="las la-sort"></span> ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(user).map(key=>(
                     <tr key={key}>
                      <td>{user[key]["id"]}</td>
                      <td>{user[key]["username"]}</td>
                      <td>{user[key]["mobile"]}</td>
                      <td>{user[key]["email"]}</td>
                      <td>{user[key]["gender"]}</td>
                      <td><i className="fa fa-trash" onClick={deleteUser} data-value={user[key]["id"]} aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link to={`/admin/edituser/${user[key]["id"]}`} ><i className="fa-solid fa-pencil"></i></Link>
                      </td>
                    </tr>
                  ))}
                  {/* {Object.entries(user).map(key=>(
                     <tr key={key}>
                      <td>{key[1]["id"]}</td>
                      <td>{key[1]["username"]}</td>
                      <td>{key[1]["mobile"]}</td>
                      <td>{key[1]["email"]}</td>
                      <td>{key[1]["gender"]}</td>
                      <td>Delet/Edit</td>
                    </tr> 
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Allusers;