import { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
  const [users, setusers] = useState(null);

  useEffect(() => {
    axios("data.json").then((response) => {
      setusers(response.data);
    });
  }, []);
  console.log(users);
  return (
   
    ( users &&
      <div className="p-8 m-8 h-screen bg-white">
        {users.map((res) => {
          return(
         
            <div key={res.id} className="w-auto border-2 border-gray-400  p-4 m-4  bg-blue-200 rounded-md">
            
            <div className="text-xl font-bold">
            {res.name}
            </div>
            <div className=" text-gray-500">
                {res.address}
            </div>

            </div>
            
          ) 
        })}
      </div>
    )
  );
};

export default Users;
