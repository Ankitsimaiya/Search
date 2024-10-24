import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/fetchData";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert,setAlert] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((e) => e.data.status);

  const SearchItems = async () => {
    console.log(search === "")
    if (!(search === "")) {
      setLoading(true)
      dispatch(fetchData(search))
        .unwrap() // Ensures that the promise is unwrapped so you can handle it directly
        .then(() => {
          setLoading(false)
          setAlert(false)
          navigate("/result");
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }else{
      setAlert(true)
      navigate('/')
    }
  };

  return (
    <div className="q
     flex flex-col justify-center items-center h-full mt-4">
      {/* "Ankit" near the left corner */}
      {/* <div className="absolute left-8 text-lg font-semibold">Ankit</div> */}

      {/* Search Input in the center */}
      <div className="flex-grow sm:w-2/4">
        <div className="flex">
          <input
            className="border-[1px] border-green-400 focus:outline-none rounded-l-full sm:pl-4 p-2 pl-4 w-full"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-green-400 border-[1px] border-green-400 rounded-r-full p-2"
            onClick={SearchItems}
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <div className="loader">
                {" "}
                {/* Loading Spinner */}
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
      <div className="block"> 
         {alert ? "Please enter something " : " " }
      </div>
    </div>
    
  );
}

export default SearchBar;
