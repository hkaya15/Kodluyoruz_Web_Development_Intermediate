import axios from "axios";

const getData = async (number)=>{
    const {data:user}=await axios('https://jsonplaceholder.typicode.com/users/'+ number)
    const {data:posts}=await axios('https://jsonplaceholder.typicode.com/posts?userId='+number)
    return {user, posts}
}
export default getData;