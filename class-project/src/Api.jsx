

// import React, { useEffect, useState } from 'react';
// import Header from "./commonComponent/02Headerfile";


// const Api = () => {
//     const [users, setUsers] = useState([])

//     const fetchUserData = () => {
//       fetch("https://api.opencagedata.com/geocode/v1/json?q=Ahmedabad&key=faed4d9eb29d483a866000c901ccb680")
//         .then(response => {
//           return response.json()
//         })
//         .then(data => {
//           setUsers(data)
//         })
//     }

//     useEffect(() => {
//       fetchUserData()
//     }, [])

//     return (
//       <div>
//         <Header/>
//         {users.length > 0 && (
//           <ul>
//             {users.map(user => (
    //               <li key={user.documentation}>{user.licenses}</li>
    //             ))}
    //           </ul>
    //         )}
//       </div>
//     );
//   }

// export default Api;


import React, {  useEffect, useState } from 'react';
import Header from "./commonComponent/02Headerfile";

function Api() {
    const [user, setUser] = useState([]);
    const [mark, decimal_mark] = useState([]);
    const [components1, components] = useState([]);
    const [blog, stay_informed] = useState([]);


    const fetchData = () => {
        fetch("https://api.opencagedata.com/geocode/v1/json?q=Ahmedabad&key=faed4d9eb29d483a866000c901ccb680")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.results[2].annotations.timezone)
                decimal_mark(data.results[0].annotations.currency.alternate_symbols)
                components(data.results[2].components)
                stay_informed(data.stay_informed)
            })
    }
    // console.log(components1)
    useEffect(() => {
        fetchData();
    }, [])
    // useLayoutEffect(() => {
    //     fetchData();
    // }, [])


    return (
        <>
            <Header />
            {/* {Object.keys{user.map((vishal,sagar)=>{console.log(vishal);})}} */}
            {/* <button onClick={fetchData}>Hi</button> */}
            <ul>
                {Object.keys(user).map((vishal, sagar) =>
                    <li key={vishal}>
                        {vishal}: <span className='red'>{user[vishal]}</span>

                    </li>
                )}
            </ul>
            <br />
            <ul>
                {Object.keys(mark).map((vishal, sagar) =>
                    <li key={vishal}>
                        <p>Alternate_symbols: <span className='red'>{mark[sagar]}</span> </p>

                    </li>
                )}
            </ul>
            <br />
            <ul>
                {Object.keys(components1).map((vishal, sagar) =>
                    <li key={vishal}>
                        <p>{vishal}:<span className='red'>{components1[vishal]}</span> </p>
                    </li>
                )}
            </ul>
            <br />
            <ul>
                {Object.entries(blog).map((vishal, sagar) =>
                    <li key={vishal}>
                        <p>{vishal[0]}:<span className='red'><a  href={vishal[1]} >{vishal[1]}</a></span> </p>
                        {console.log(vishal)}
                    </li>
                )}
            </ul>
        </>
    );
}
export default Api;






