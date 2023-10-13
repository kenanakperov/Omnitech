// import { useState } from "react";
// import SideBar from "../component/SideBar";
// import TopBar from "../component/TopBar";

// const Users = () => {
//   const [activeNum, setActiveNum] = useState("activeNum");
//   const [nonActiveNum, setNonActiveNum] = useState("nonActiveNum");

//   const activeChanger = () => {
//     if (activeNum === "nonActiveNum") {
//       setActiveNum("activeNum");
//       setNonActiveNum("nonActiveNum");
//     }
//   };
//   const activeChanger1 = () => {
//     if (nonActiveNum === "nonActiveNum") {
//       setActiveNum("nonActiveNum");
//       setNonActiveNum("activeNum");
//     }
//   };
//   return (
//     <div>
//       <SideBar />
//       <TopBar />
//       <div className="usersTT">
//         <div className="users">
//           <div className="usersTitle">
//             <h2>İstifadəçilər</h2>
//             <div className="searchInp">
//               <input
//                 type="text"
//                 className="searchInp"
//                 name="search"
//                 placeholder="Tiket axtar"
//               />
//             </div>
//           </div>
//           <table id="usersTable">
//             <thead>
//               <tr>
//                 <th>İstifadəçi</th>
//                 <th>Şöbə</th>
//                 <th>Vəzifə</th>
//                 <th>Əlaqə</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="trFirstChild">
//                   <img src={require("../images/People.png")} alt="" />
//                   Kenan
//                 </td>
//                 <td>Texniki</td>
//                 <td>Sistem admin</td>
//                 <td>+994552001010</td>
//                 <td>Aktiv</td>
//               </tr>
//               <tr>
//                 <td className="trFirstChild">
//                   <img src={require("../images/People.png")} alt="" />
//                   Kenan
//                 </td>
//                 <td>Texniki</td>
//                 <td>Sistem admin</td>
//                 <td>+994552001010</td>
//                 <td>Aktiv</td>
//               </tr>
//               <tr>
//                 <td className="trFirstChild">
//                   <img src={require("../images/People.png")} alt="" />
//                   Kenan
//                 </td>
//                 <td>Texniki</td>
//                 <td>Sistem admin</td>
//                 <td>+994552001010</td>
//                 <td>Aktiv</td>
//               </tr>
//               <tr>
//                 <td className="trFirstChild">
//                   <img src={require("../images/People.png")} alt="" />
//                   Kenan
//                 </td>
//                 <td>Texniki</td>
//                 <td>Sistem admin</td>
//                 <td>+994552001010</td>
//                 <td>Aktiv</td>
//               </tr>
//               <tr>
//                 <td className="trFirstChild">
//                   <img src={require("../images/People.png")} alt="" />
//                   Kenan
//                 </td>
//                 <td>Texniki</td>
//                 <td>Sistem admin</td>
//                 <td>+994552001010</td>
//                 <td>Aktiv</td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="prevNext">
//             <span>
//               <span>Əvvəlki</span>
//             </span>
//             <h3 className={activeNum} onClick={activeChanger}>
//               <span>1</span>
//             </h3>
//             <h4 className={nonActiveNum} onClick={activeChanger1}>
//               <span>2</span>
//             </h4>
//             <h5>
//               <span>Sonraki</span>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Users;
