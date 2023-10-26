import { useState } from "react";

import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";

import {  SendIcon } from "../svg";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { cn } from "../lib/utils";

const Reports = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const [date, setDate] = useState()
  return (
    <div>
      <SideBar />
      <TopBar />
      <div className="reportsTT">
        <div className="reports">
          <div className="reportsTitle">
            <h2>Reportlar</h2>
            <div className="reportsTitleR">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"calendar"}
                    className={cn(
                      
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
