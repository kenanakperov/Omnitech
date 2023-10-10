// import { useState } from "react";

// const PhoneNumberInput = () => {
//    let [number, setNumber] = useState({
//      startNum: "",
//      num: "",
//    });

//    const handleChange = (event) => {
//      let value = event.target.value;
//      let name = event.target.name;

//      setNumber((prevalue) => {
//        return {
//          ...prevalue,
//          [name]: value,
//        };
//      });
//    };
//   return (
//     <div className="phoneNumInp">
//       <select name='startNum' onChange={handleChange}>
//         <option value="">000</option>
//         <option value="055">055</option>
//         <option value="070">070</option>
//         <option value="077">077</option>
//         <option value="010">010</option>
//         <option value="050">050</option>
//       </select>
//       <input
//         name="num"
//         onChange={handleChange}
//         type="number"
//         placeholder="000 00 00"
//       />
//       <button onClick={() => console.log(number)}>salam</button>
//     </div>
//   );
// };

// export default PhoneNumberInput;
