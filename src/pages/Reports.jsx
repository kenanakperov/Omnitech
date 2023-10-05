// import { useState } from "react";
import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import { DateI, SendIcon } from "../svg";
import { Button } from "../components/ui/button";
// import { Label } from "../components/ui/label";

const Reports = () => {
  // const [activeNum, setActiveNum] = useState("activeNum");
  // const [nonActiveNum, setNonActiveNum] = useState("nonActiveNum");

  // const activeChanger = () => {
  //   if (activeNum === "nonActiveNum") {
  //     setActiveNum("activeNum");
  //     setNonActiveNum("nonActiveNum");
  //   }
  // };
  // const activeChanger1 = () => {
  //   if (nonActiveNum === "nonActiveNum") {
  //     setActiveNum("nonActiveNum");
  //     setNonActiveNum("activeNum");
  //   }
  // };

  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="reportsTT">
        <div className="reports">
          <div className="reportsTitle">
            <h2>Reportlar</h2>
            <div className="reportsTitleR">
              <Button variant="whitebtn">
                <span className="newTicketTextDate">Tarix</span>
                <DateI />
              </Button>
              <Button variant="mybtn2">
                <SendIcon />
                <span className="newTicketText">Export</span>
              </Button>
            </div>
          </div>
          <table id="customers">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tiketin açılma tarixi</th>
                <th>Tiketi açan əməkdaş</th>
                <th>Qrup</th>
                <th>Mövzu</th>
                <th>İD (kassa nömrəsi)</th>
                <th>Əlaqə nömrəsi</th>
                <th>Son mərhələ statusu</th>
                <th>İcrada olan əməkdaş</th>
                <th>Tiketin yükun tarixi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
              <tr>
                <td>1</td>
                <td>09/10/23</td>
                <td>Dima</td>
                <td>Satış</td>
                <td>Kassa</td>
                <td>GB2231243</td>
                <td>+994XXXXXXXXX</td>
                <td>İcra</td>
                <td>Vlad</td>
                <td>10/11/23</td>
              </tr>
            </tbody>
          </table>
          <div className="prevNext">
            <Button variant="prevNextBtn">Əvvəlki</Button>
            <Button variant="blackNumBtn">1</Button>
            <Button variant="blackNumBtn">2</Button>
            <Button variant="threeDotsBtn">...</Button>
            <Button variant="blackNumBtn">10</Button>

            {/* <h3 className={activeNum} onClick={activeChanger}>
              <Button variant="outline" size="icon">
                1
              </Button>
            </h3>
            <h4 className={nonActiveNum} onClick={activeChanger1}>
              <span>2</span>
            </h4> */}
            <Button variant="prevNextBtn">Sonrakı</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
