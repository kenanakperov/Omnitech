import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Ticket from "../component/Ticket";
import { Pin, Plus, SilverClose } from "../svg";
import { useState } from "react";
import PhoneNumInput from "../component/PhoneNumberInput";
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

const Home = () => {
  const [hideClass, setHideClass] = useState("ticketFilter");
  const [newTicketHide, setNewTicketHide] = useState("false");
  const [hideButton, setHideButton] = useState("");
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
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">
                  Satış qrupun tiketləri
                </TabsTrigger>
                <TabsTrigger value="password">
                  Yalnız mənim tiketlər
                </TabsTrigger>
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
            <Ticket
              circle="blue"
              ticketNum="Tiket# 5"
              content="Kassa"
              date="Yaradıldı: 01/09/23 - 12:45"
              name="Orxan Qasımov"
              companyName="Mothercare"
              phoneNum="+994-XX-XXX-XX-XX"
              comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              ticketFile="ticketFile"
              ticketWhose="ticketWhose"
              ticketWhoseTT="ticketWhoseTT"
            />
            <Ticket
              circle="green"
              ticketNum="Tiket# 4"
              content="Yeni müştəri"
              date="Yaradıldı: 01/09/23 - 12:45"
              name="Kənan Əkbərov"
              companyName="Mothercare"
              phoneNum="+994-XX-XXX-XX-XX"
              ticketFile="false"
              ticketWhose="false"
              ticketWhoseTT="ticketWhoseTTHide"
              HR="false"
            />
            <Ticket
              circle="yellow"
              ticketNum="Tiket# 3"
              content="Lisenziya"
              date="Yaradıldı: 01/09/23 - 12:45"
              name="Orxan Qasımov"
              companyName="Mothercare"
              phoneNum="+994-XX-XXX-XX-XX"
              ticketFile="false"
              ticketWhose="false"
              ticketWhoseTT="ticketWhoseTTHide"
              HR="false"
            />
            <Ticket
              circle="blue"
              ticketNum="Tiket# 2"
              content="MDM"
              date="Yaradıldı: 01/09/23 - 12:45"
              name="Orxan Qasımov"
              companyName="Mothercare"
              phoneNum="+994-XX-XXX-XX-XX"
              ticketFile="ticketFile"
              ticketWhose="ticketWhose"
              ticketWhoseTT="ticketWhoseTT"
            />
            <Ticket
              circle="blue"
              ticketNum="Tiket# 1"
              content="Kassa"
              date="Yaradıldı: 01/09/23 - 12:45"
              name="Orxan Qasımov"
              companyName="Mothercare"
              phoneNum="+994-XX-XXX-XX-XX"
              ticketFile="false"
              ticketWhose="false"
              ticketWhoseTT="ticketWhoseTTHide"
              HR="false"
            />
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
              <Label htmlFor="message">Müraciət edən şəxsin adı soyadı</Label>
            </div>
            <Input placeholder="Ad Soyad" />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label htmlFor="message">VÖEN</Label>
            </div>
            <Input placeholder="000 000" />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label htmlFor="message">Kassa nömrəsi</Label>
            </div>
            <Input placeholder="000 000" />
          </div>
          <div className="newTicketInpBox">
            <div className="mb-1">
              <Label htmlFor="message">Müraciət edən şirkətin adı</Label>
            </div>
            <Input placeholder="Şirkət" />
          </div>
          <div className="phoneNumInp">
            <div className="mb-1">
              <Label htmlFor="message">Əlaqə nömrəsi</Label>
            </div>
            <PhoneNumInput />
          </div>
          <div className="newTicketSelect">
            <div className="mb-1">
              <Label htmlFor="message">Müraciətin növü</Label>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="newTicketComment">
            <div className="mb-1">
              <Label htmlFor="message">Digər</Label>
            </div>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          <Button variant="mybtn" width="400px">
            <span className="newTicketText">Göndər</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
