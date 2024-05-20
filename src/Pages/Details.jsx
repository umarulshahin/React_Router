import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate,useLocation,NavLink,Outlet } from "react-router-dom";


const Details = () => {
  const Navigate =useNavigate()

  const location = useLocation();
  const state = location.state || {};
  const { userid } = useParams();
  const [User, setUser] = useState(state.data);


  useEffect(() => {
    if (!User){
      axios("/data.json").then((response) => {
        const item = response.data.find((res) => res.id === parseInt(userid));
        setUser(item);
      });
    }
   
  }, [userid,User]);

  return (
    User && (
      <div className="p-8 m-8  h-screen bg-white">
        <div className="p-8 text-2xl font-bold bg-blue-200 ">{User.name}</div>
        <div className="font-medium text-gray-400">
          <div>Address : {User.address}</div>
          <div>Phone : {User.phone}</div>

          <div>Class : {User.class}</div>
        </div>
        <div className="m-4">
          <NavLink to="" end className='text-2xl mr-2 p-2 place-items-start bg-gray-400 text-white font-bold'><span>Mark</span></NavLink>
          <NavLink to="Sport" className='text-2xl mr-2 p-2 bg-gray-400 text-white font-bold'><span >Sports</span></NavLink>
          <NavLink to="Remark" className='text-2xl p-2 bg-gray-400 text-white font-bold'><span >Remark</span></NavLink>
        </div>
        <div>
          <Outlet context={User}/>
        </div>
        <div>
          <button className="m-2 px-2 border border-black bg-slate-300" onClick={()=>{
            Navigate(-1)
          }}>Back</button>
        </div>
        
      </div>
    )
  );
};

export default Details;
