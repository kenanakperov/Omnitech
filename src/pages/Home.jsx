import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Ticket from "../component/Ticket";
import { Pin, Plus, SilverClose } from "../svg";
import { useRef, useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Checkbox } from "../components/ui/checkbox";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useEffect } from "react";
import axios from "axios";

const Home = ({ setUser }) => {
  const [hideClass, setHideClass] = useState("ticketFilter");
  const [newTicketHide, setNewTicketHide] = useState("false");
  const [hideButton, setHideButton] = useState("");
  const [salaam, setsalaam] = useState("");
  const [data, setData] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [ticketData, setTicketData] = useState({
    title: "", //fullname olmalidi
    // voen: "",
    // kassaId: "",
    // company: "",
    description: "",
    // startNum: "",
    // num: "",
    category: "",
  });
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const handleClick = () => {
    ref.current.value = "";
    ref1.current.value = "";
    ref2.current.value = "";
    ref3.current.value = "";
    ref4.current.value = "";
    ref5.current.value = "";
  };
  // const token = localStorage.getItem("access");
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setTicketData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    axios("http://165.22.81.197:8000/api/tickets/").then((res) => {
      setData(res.data);
      console.log(res.data)
    });
    axios("http://165.22.81.197:8000/api/categories/").then((res) => {
      setDataCategories(res.data);
    });
  }, [refresh]);
  const newTicketButton = () => {
    if (hideClass === "false") {
      setHideClass("ticketFilter");
      setHideButton("newTicketBtn");
      setNewTicketHide("false");
    } else {
      setHideClass("false");
      setNewTicketHide("newTicket");
      setHideButton("false");
    }
  };
  const [query, setQuery] = useState("");

  return (
    <div className="home">
      <SideBar />
      <TopBar setUser={setUser} />
      <div className="tickets">
        <div className="ticketsContent">
          <div className="salamTT">
            <div className="ticketsTitle">
              <h1>Ticketlər</h1>
              <div className="searchInp">
                <Input
                  size="lg"
                  placeholder="Tiket axtar"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <div className={hideButton} onClick={newTicketButton}>
                <Button variant="default">
                  <Plus />
                  <span className="newTicketText">Yeni Tiket</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="ticketFilter">
            <Tabs
              onValueChange={(value) => {
                if (value === "satis") {
                  console.log("satis ticketleri");
                } else {
                  console.log("menim ticketlerim");
                }
              }}
              defaultValue="satis"
              className="w-[400px]"
            >
              <TabsList>
                <TabsTrigger value="satis">Satış qrupun tiketləri</TabsTrigger>
                <TabsTrigger value="mine">Yalnız mənim tiketlər</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="checkBoxTT">
            <Checkbox
              onCheckedChange={(checked) => {
                if (checked === true) {
                  console.log("checked");
                }
              }}
            />
            <label className="checkBoxLabel text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Yalnız təyin edilməmiş tiketlər
            </label>
          </div>
          <div className="ticketsArea">
            {data
              .filter((item) => {
                if (item === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return item;
                } else {
                  return null;
                }
              })
              .map((item,index) => {
                return (
                  <Ticket
                    key={item.id}
                    id={item.id}
                    ticketNum={"Tiket# " + item.id}
                    content={item.title}
                    comment={item.description}
                    setStateRefresh={setRefresh}
                    stateRefresh={refresh}
                    state={item.current_stage}
                    createdBy={item.created_by.username}
                    // circle={item.current_stage.name}
                    // date="Yaradıldı: 01/09/23 - 12:55"
                    // name={item.owner.first_name + " " + item.owner.last_name}
                    // companyName="Mothercare"
                    // phoneNum="+994-XX-XXX-XX-XX"
                    kassaID="0000000"
                    voen="0000000"
                  />
                );
              })
            }
          </div>
        </div>
        <div className={newTicketHide}>
          <div className="newTicketTitle">
            <div className="newTicketR">
              <Pin />
              <span>Yeni tiket</span>
            </div>
            <div onClick={newTicketButton} className="closeIcon">
              <SilverClose />
            </div>
          </div>
          <div className="newTicketDate">
            <span>01/09/2023</span>
          </div>
          <hr className="newTicketHR" />
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label>
                Müraciət edən şəxsin adı soyadı{" "}
                <span className="text-amber-900 text-sm font-medium leading-5">
                  *
                </span>
              </Label>
            </div>
            <Input
              onChange={handleChange}
              name="title"
              placeholder="Ad Soyad"
              ref={ref}
            />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label>VÖEN </Label>
            </div>
            <Input
              name="voen"
              onChange={handleChange}
              placeholder="000 000"
              ref={ref1}
            />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label>
                Kassa nömrəsi{" "}
                <span className="text-amber-900 text-sm font-medium leading-5">
                  *
                </span>
              </Label>
            </div>
            <Input
              onChange={handleChange}
              name="kassaId"
              placeholder="000 000"
              ref={ref2}
            />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label>
                Müraciət edən şirkətin adı{" "}
                <span className="text-amber-900 text-sm font-medium leading-5">
                  *
                </span>
              </Label>
            </div>
            <Input
              onChange={handleChange}
              name="company"
              placeholder="Şirkət"
              ref={ref3}
            />
          </div>
          <div className="phoneNumInp">
            <div className="mb-1">
              <Label>
                Əlaqə nömrəsi{" "}
                <span className="text-amber-900 text-sm font-medium leading-5">
                  *
                </span>
              </Label>
            </div>
            <div className="phoneNumInp">
              <select name="startNum" onChange={handleChange}>
                <option value="">000</option>
                <option value="055">055</option>
                <option value="099">099</option>
                <option value="070">070</option>
                <option value="077">077</option>
                <option value="050">050</option>
                <option value="010">010</option>
                <option value="051">051</option>
                <option value="060">060</option>
                <option value="012">012</option>
              </select>
              <input
                name="num"
                onChange={handleChange}
                type="number"
                placeholder="000 00 00"
                ref={ref4}
              />
            </div>
          </div>
          <div className="newTicketSelect">
            <div className="mb-1">
              <Label>
                Müraciətin növü{" "}
                <span className="text-amber-900 text-sm font-medium leading-5">
                  *
                </span>
              </Label>
            </div>
            <Select name="category" onValueChange={(e) => setsalaam(e)}>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {dataCategories.map((item, index) => {
                    return (
                      <SelectItem key={item.id} value={item.id + 1}>
                        {item.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="newTicketComment">
            <div className="mb-1">
              <Label>Digər</Label>
            </div>
            <Textarea
              onChange={handleChange}
              name="description"
              className="resize-none"
              placeholder="Type your message here."
              id="message"
              ref={ref5}
            />
          </div>
          <Button
            onClick={() => {
              ticketData.category = salaam;
              axios
                .post(
                  "http://165.22.81.197:8000/api/tickets/",
                  ticketData
                  // {
                  //   headers: {
                  //     Authorization: Bearer ${token},
                  //   },
                  // }
                )
                .then((res) => {
                  setRefresh(!refresh);
                  handleClick();
                });
            }}
            type="submit"
            variant="mybtn"
            width="400px"
          >
            <span className="newTicketText">Göndər</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
