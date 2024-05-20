import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams,useNavigate } from "react-router-dom";
const Users = () => {
  const [users, setusers] = useState(null);
  const [searchParams, setsearchParams] = useSearchParams();
  const Navigate=useNavigate()
  useEffect(() => {
    axios("/data.json").then((response) => {
      setusers(response.data);
    });
  }, []);

  const search = searchParams.get("class");
  const handleSearchParam = (evt) => {
    setsearchParams({ class: evt.target.value });
  };
  return (
    users && (
      <div className="p-8 m-8 max-h-full bg-white">
        <div className="pl-5 ">
          <div className="text-xl font-bold">
            Select Class
            <div className="m-2">
              <select
                className="border border-black "
                onChange={handleSearchParam}
              >
                <option value="all">All</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
        {users
          .filter((res) => {
            if (!search) {
              return true;
            }
            return search === "all" ? true : search === res.class;
          })
          .map((res) => {
            return (
              <div
                key={res.id}
                className="w-auto border-2 border-gray-400  p-4 m-4  bg-blue-200 rounded-md"
                onClick={() => {
                     Navigate(`/details/${res.id}`,{state:{data:res}})
                }}>
                <div className="text-xl font-bold">
                  <Link to={`/details/${res.id}`}>{res.name}</Link>
                </div>
                <div className=" text-gray-500">{res.address}</div>
                <div className=" text-gray-500">Class : {res.class}</div>
              </div>
            );
          })}
      </div>
    )
  );
};

export default Users;
