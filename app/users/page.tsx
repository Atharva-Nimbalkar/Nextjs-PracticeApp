import React, { cache } from 'react'
//rafce
interface User{
  id: number;
  name: string;
  email: string;
}  

const UserPage = async() => {
  // we dont neet here useState and useEffect to declare variable and store data in it.becuase we use another approarch
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'});// {next:{revalidate:10}} //we get data after every 10sec//{cache:'no-store'} by default fectch will cache store data
  //we can use  method in fetch only not in other third party libray like axios
  const users: User[]=await res.json();// here we annotate 
  

  return (
    <>
    <h1>UserPage</h1>
    {/* following content is static */}
    <p>{new Date().toLocaleTimeString()}</p> 
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
          {/* here object type is any so we use typescript here */}
      {users.map(user=><tr key={user.id}>
        <td>{user.name}</td>
      <td>{user.email}</td>
      </tr>)}
      </tbody>
    </table>
    </>
  )
} 
export default UserPage