// import { faMoon } from "@fortawesome/free-regular-svg-icons";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const LeftBar = () => {
  const [inputcity, setInputCity] = useState("Mumbai");
  const [time, setTime] = useState("");
  const [city, setCity] = useState("Mumbai");

  const [wind, setWind] = useState("");

  const [data, setData] = useState([]);

  // FETCHTIME API
  useEffect(() => {
    const timeAPI = `https://api.weatherapi.com/v1/current.json?key=ccdd5b85427c407e93a54806242710&q=${inputcity}&aqi=no`;

    const fatchTime = async () => {
      const resTime = await axios.get(timeAPI);
      setTime(resTime.data.location.localtime);

      console.log(resTime.data);
    };

    fatchTime();
  }, [inputcity]);

  //FETCH-WEATHER-DATA-API

  useEffect(() => {
    const API = `https://api.openweathermap.org/data/2.5/find?q=${inputcity}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`;

    // const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=1&units=metric`;

    const fatchData = async () => {
      try {
        const response = await axios.get(API);
        // setData(response.data.current);
        // setCity(response.data.location.name);
        // setCity(response.data.location.name);

        setData(response.data.list[0].main.temp);
        console.log("temp => " + response.data.list[0].main.temp);

        setWind(response.data.list[0].wind.speed);

        setCity(response.data.list[0].name);
        console.log("city => " + response.data.list[0].name);

        // setCity(response);
        // console.log(response);
        // console.log(setCity);
      } catch (error) {
        console.log(error);
      }
    };

    fatchData();
  }, [inputcity]);

  return (
    <>
      <div className=" px-4 py-5">
        <div className=" flex items-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setInputCity(e.target.value)}
            className=" h-14 w-full border text-xl pl-2 outline-none font-medium bg-transparent  bg-slate-900"
          />
          {/* <FontAwesomeIcon icon={faLocationDot} className=" text-2xl" />
           */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-8"
          >
            <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>

        <div className=" flex flex-col items-center gap-y-12">
          {/* SUN ICON */}

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-14 text-yellow-400"
          >
            <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg> */}

          <div className=" text-2xl font-semibold">{city}</div>

          {/* MOON ICON */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-12 "
          >
            <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg> */}

          <h1 className=" text-4xl font-bold">
            {data}
            <span>°c</span>
          </h1>
          <h1 className=" text-2xl font-bold">
            <div className=" flex gap-4">
              Wind Speed
              <p> {wind} </p>
            </div>
          </h1>
          <h1 className=" text-xl font-medium text-nowrap">Today . {time} </h1>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
