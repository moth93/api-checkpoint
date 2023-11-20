import axios from "axios";


const UserTest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
        console.log('hi')
    } catch (err) {
        console.error(err);
    }
};
export default UserTest()




import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



 const  UserList=() =>{
    const getusers = ()=>async()=>{try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data);
    } catch (err) {
        console.error(err);
    }
     }
     const dispatch=useDispatch()
     useEffect(
       ()=>{
       dispatch(getusers())
       }
     ,[dispatch])
   const user=useSelector(state=>state.user)
   console.log(user)

  return (
    <div>{user}</div>
  )
}
export default UserList()

