// import DataShow from "./DataShow";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const RightBar = (props) => {

//     const [inputcity, setInputCity] = useState("Mumbai");
//     //   const [city, setCity] = useState("");
    
//       const [mph, setMph] = useState(0);
//       const [humaditi,setHumadity] = useState(0)
    
//       useEffect(() => {
//         const API = `https://api.weatherapi.com/v1/current.json?key=ccdd5b85427c407e93a54806242710&q=${inputcity}&aqi=no`;
    
//         // setCity(inputcity);
    
//         const fatchHighlightData = async () => {
//           const response = await axios.get(API);
    
//           console.log(response.data.current.wind_mph);
    
//           setMph(response.data.current.wind_mph);
//           setHumadity(response.data.current.humidity)
//         };
    
//         fatchHighlightData();
//       }, []);

//   return (
//     <>
//       <div className=" text-white py-5">
//         <p className=" text-lg font-semibold pb-5">Today's Highlights</p>

//         <div className=" grid grid-cols-2 gap-4">
//           <DataShow NAME="Wind Status" MPH={mph + "mph"} />
//           <DataShow NAME="Humadity" HUMIDITY={humaditi} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default RightBar;
