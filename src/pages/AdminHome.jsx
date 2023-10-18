import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Ticket from "../component/Ticket";
import { Pin, Plus, RightArrow, SilverClose } from "../svg";
import { useState } from "react";
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

const AdminHome = () => {
  const [hideClass, setHideClass] = useState("ticketFilter");
  const [newTicketHide, setNewTicketHide] = useState("false");
  const [hideButton, setHideButton] = useState("");
  const [salaam, setsalaam] = useState("");

  let [ticketData, setTicketData] = useState({
    fullName: "",
    voen: "",
    kassaId: "",
    company: "",
    other: "",
    startNum: "",
    num: "",
    category: "",
  });

  // useEffect(()=>{
  //   axios.get("url").then((res) => {
  //     console.log(res);
  //   });
  // },[])
  // const sendTicketData = () => {
  //   axios.post("url",ticketData).then(res=>{
  //     console.log(res)
  //   })
  // };

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

  const data = [
    {
      id: 0,
      title: "string",
      description: "string",
      category: {
        id: 0,
        name: "string",
        description: "string",
      },
      owner: {
        id: 0,
        username:
          "74DNICdBGPGrMD_gQVZhOy3DvNhQzogyufzDI@r7r2EpYqoFjg29vWbuX.G6CTvewxh_CIIFHe5qNo8MP0w0WTRMgNgVT4ulIU8",
        email: "user@example.com",
        first_name: "string",
        last_name: "string",
      },
      owner_group: {
        id: 0,
        name: "string",
      },
      state: "string",
    },
    {
      id: 1,
      title: "string",
      description: "string",
      category: {
        id: 0,
        name: "string",
        description: "string",
      },
      owner: {
        id: 0,
        username: "n7BY1AO1B8i0R8wer",
        email: "user@example.com",
        first_name: "string",
        last_name: "string",
      },
      owner_group: {
        id: 0,
        name: "string",
      },
      state: "string",
    },
  ];
  const dataCategories = [
    {
      id: 0,
      name: "salam",
      description: "string",
    },
    {
      id: 1,
      name: "salamm",
      description: "string",
    },
    {
      id: 2,
      name: "salammm",
      description: "string",
    },
    {
      id: 3,
      name: "salammmm",
      description: "string",
    },
  ];
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
  return (
    <div className="home">
      <SideBar />
      <TopBar />
      <div className="tickets">
        <div className="ticketsContent">
          <div className="salamTT">
            <div className="ticketsTitle">
              <h1>Ticketlər</h1>
              <div className="searchInp">
                <Input size="lg" placeholder="Tiket axtar" />
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
            <Tabs defaultValue="hamisi" className="w-250">
              <TabsList>
                <TabsTrigger className="w-40" value="hamisi">
                  Hamısı
                </TabsTrigger>
                <TabsTrigger className="w-40" value="satis">
                  Satış
                </TabsTrigger>
                <TabsTrigger className="w-40" value="yigim">
                  Yığım
                </TabsTrigger>
                <TabsTrigger className="w-40" value="texniki">
                  Texniki
                </TabsTrigger>
                <TabsTrigger className="w-40" value="alis">
                  Alış
                </TabsTrigger>
                <TabsTrigger className="w-40" value="proqramlama">
                  Proqramlama
                </TabsTrigger>
                <TabsTrigger className="w-40" value="planlama">
                  Planlama
                </TabsTrigger>
                <Button variant="prevNextBtn">
                  <RightArrow />
                </Button>
              </TabsList>
            </Tabs>
          </div>
          <div className="checkBoxTT">
            <Checkbox />
            <label
              htmlFor="terms"
              className="checkBoxLabel text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yalnız təyin edilməmiş tiketlər
            </label>
          </div>
          <div className="ticketsArea">
            {data.map((item) => {
              return (
                <Ticket
                  key={item.id}
                  circle="blue"
                  ticketNum={"Tiket# " + item.id}
                  content={item.title}
                  date="Yaradıldı: 01/09/23 - 12:45"
                  name={item.owner.first_name + " " + item.owner.last_name}
                  companyName="Mothercare"
                  phoneNum="+994-XX-XXX-XX-XX"
                  comment={item.description}
                  ticketFile="ticketFile"
                  ticketWhose="ticketWhose"
                  ticketWhoseTT="ticketWhoseTT"
                />
              );
            })}
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
              <Label htmlFor="message">
                Müraciət edən şəxsin adı soyadı{" "}
                <span className="text-amber-900 text-sm font-medium leading-5">
                  *
                </span>
              </Label>
            </div>
            <Input
              onChange={handleChange}
              name="fullName"
              placeholder="Ad Soyad"
            />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label htmlFor="message">VÖEN </Label>
            </div>
            <Input name="voen" onChange={handleChange} placeholder="000 000" />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label htmlFor="message">
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
            />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label htmlFor="message">
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
            />
          </div>
          <div className="phoneNumInp">
            <div className="mb-1">
              <Label htmlFor="message">
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
                <option value="070">070</option>
                <option value="077">077</option>
                <option value="010">010</option>
                <option value="050">050</option>
              </select>
              <input
                name="num"
                onChange={handleChange}
                type="number"
                placeholder="000 00 00"
              />
            </div>
          </div>
          <div className="newTicketSelect">
            <div className="mb-1">
              <Label htmlFor="message">
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
                      <SelectItem key={item.id} value={item.name}>
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
              <Label htmlFor="message">Digər</Label>
            </div>
            <Textarea
              onChange={handleChange}
              name="other"
              className="resize-none"
              placeholder="Type your message here."
              id="message"
            />
          </div>
          <Button
            onClick={() => {
              ticketData.category = salaam;
              console.log(ticketData);
            }}
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

export default AdminHome;
