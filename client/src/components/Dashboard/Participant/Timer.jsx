// import React, { useState, useEffect } from 'react';

// const Timer = ({ targetTime }) => {
//   const [timeRemaining, setTimeRemaining] = useState('');

//   useEffect(() => {
//     const calculateTimeRemaining = () => {
//       const now = new Date();
//       const distance = new Date(targetTime) - now;
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeRemaining("EXPIRED");
//       } else {
//         setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//       }
//     };

//     const timer = setInterval(calculateTimeRemaining, 1000);

//     return () => clearInterval(timer);
//   }, [targetTime]);

//   return (
//     <div>{timeRemaining}</div>
//   );
// };

// export default Timer;

// import React, { useState } from "react";

// const Timer = () => {
//   const finalDateIST = new Date("2024-03-08T15:30:00");
//   const finalEpochTimeIST = Math.floor(finalDateIST.getTime() / 1000);

//   const [remDays, setRemDays] = useState("00");
//   const [remHours, setRemHours] = useState("00");
//   const [remMinutes, setRemMinutes] = useState("00");

//   function interval() {
//     const currentEpochTimeUTC = Math.floor(new Date().getTime() / 1000);
//     const currentEpochTimeIST = currentEpochTimeUTC;
//     const difference = finalEpochTimeIST - currentEpochTimeIST;

//     const days = Math.floor(difference / (60 * 60 * 24));
//     const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
//     const minutes = Math.floor((difference % (60 * 60)) / 60);

//     if (days < 10 && days >= 0) {
//       setRemDays("0" + days);
//     } else if (days < 0) {
//       setRemDays("00");
//     } else {
//       setRemDays(days);
//     }
//     if (hours < 10 && hours >= 0) {
//       setRemHours("0" + hours);
//     } else if (hours < 0) {
//       setRemHours("00");
//     } else {
//       setRemHours(hours);
//     }
//     if (minutes < 10 && minutes >= 0) {
//       setRemMinutes("0" + minutes);
//     } else if (minutes < 0) {
//       setRemMinutes("00");
//     } else {
//       setRemMinutes(minutes);
//     }
//   }

//   setInterval(interval, 1000);

//   return (
//     // <div>
//     //     <div
//     //     //   style={{
//     //     //     height: "43.5vh",
//     //     //     backgroundColor: "#FF781699",
//     //     //     margin: "20px",
//     //     //     borderRadius: "20px",
//     //     //     textAlign: "center",
//     //     //     marginBottom: "10px",
//     //     //   }}
//     //     >
//     //       <h2
//     //         // style={{
//     //         //   color: "#F66700",
//     //         //   fontFamily: "DM Serif Text",
//     //         //   fontWeight: "400",
//     //         //   paddingTop: "20px",
//     //         // }}
//     //       >
//     //         Time Left
//     //       </h2>
//     //       <div
//     //         // style={{
//     //         //   position: "relative",
//     //         //   display: "flex",
//     //         //   justifyContent: "center",
//     //         // }}
//     //        >
//     //         <div>
//     //           <p
//     //             // style={{
//     //             //   top: "12.5%",
//     //             //   fontSize: "90px",
//     //             //   fontFamily: "Inria Sans",
//     //             //   fontWeight: 400,
//     //             //   marginBottom: "-55px",
//     //             // }}
//     //             id="RemDays"
//     //           >
//     //             {remDays}:
//     //           </p>
//     //           <br></br>
//     //           <p
//     //         //   style={{ fontFamily: "Inria Sans", fontSize: "20px" }}
//     //           >
//     //             Day(s)
//     //           </p>
//     //         </div>
//     //         <div>
//     //           <p
//     //             // id="RemHours"
//     //             // style={{
//     //             //   top: "12.5%",
//     //             //   fontSize: "90px",
//     //             //   fontFamily: "Inria Sans",
//     //             //   fontWeight: 400,
//     //             //   marginBottom: "-55px",
//     //             // }}
//     //           >
//     //             {remHours}:
//     //           </p>
//     //           <br></br>
//     //           <p
//     //         //   style={{ fontFamily: "Inria Sans", fontSize: "20px" }}
//     //           >
//     //             Hour(s)
//     //           </p>
//     //         </div>
//     //         <div>
//     //           <p
//     //             // id="RemMinutes"
//     //             // style={{
//     //             //   top: "12.5%",
//     //             //   fontSize: "90px",
//     //             //   fontFamily: "Inria Sans",
//     //             //   fontWeight: 400,
//     //             //   marginBottom: "-55px",
//     //             // }}
//     //           >
//     //             {remMinutes}
//     //           </p>
//     //           <br></br>
//     //           <p
//     //         //   style={{ fontFamily: "Inria Sans", fontSize: "20px" }}
//     //           >
//     //             Min(s)
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     // </div>
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div>
//         <p>{remDays}</p>
//         <br />
//         <p>Days</p>
//       </div>
//       <div>
//         <p>{remHours}</p>
//         <br />
//         <p>Hours</p>
//       </div>
//       <p>{remMinutes}</p>
//       <br />
//       <p>Min</p>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from "react";

const Timer = () => {
  const finalDateIST = new Date("2024-03-13T15:30:00");
  const finalEpochTimeIST = Math.floor(finalDateIST.getTime() / 1000);

  const [remDays, setRemDays] = useState("00");
  const [remHours, setRemHours] = useState("00");
  const [remMinutes, setRemMinutes] = useState("00");

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function updateTime() {
    const currentEpochTimeUTC = Math.floor(new Date().getTime() / 1000);
    const currentEpochTimeIST = currentEpochTimeUTC;
    const difference = finalEpochTimeIST - currentEpochTimeIST;

    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((difference % (60 * 60)) / 60);

    setRemDays(formatTimeUnit(days));
    setRemHours(formatTimeUnit(hours));
    setRemMinutes(formatTimeUnit(minutes));
  }

  function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "center", margin: "0 20px" }}>
        <p style={{ fontSize: "30px", fontWeight: "bold", margin: "0" }}>
          {remDays}
        </p>
        <p style={{ margin: "0" }}>Days</p>
      </div>
      <div style={{ textAlign: "center", margin: "0 20px" }}>
        <p style={{ fontSize: "30px", fontWeight: "bold", margin: "0" }}>
          {remHours}
        </p>
        <p style={{ margin: "0" }}>Hours</p>
      </div>
      <div style={{ textAlign: "center", margin: "0 20px" }}>
        <p style={{ fontSize: "30px", fontWeight: "bold", margin: "0" }}>
          {remMinutes}
        </p>
        <p style={{ margin: "0" }}>Minutes</p>
      </div>
    </div>
  );
};

export default Timer;
