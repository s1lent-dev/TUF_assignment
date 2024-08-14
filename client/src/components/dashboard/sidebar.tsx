import { Gear, User, PencilSimple, Command, House, SignOut } from "@phosphor-icons/react"
import { useState } from "react"
const Sidebar = () => {

  const [activeTab, setActiveTab] = useState("house");
  const handleClick = (tab : string) => {
    setActiveTab(tab);
  }
  return (
    <aside>
      <House weight="fill" className={activeTab === "house" ? "active" : ""} onClick={()=> handleClick("house")} />
      <User weight="fill" className={activeTab === "user" ? "active" : ""} onClick={()=> handleClick("user")}/>
      <PencilSimple weight="fill" className={activeTab === "edit" ? "active" : ""} onClick={()=> handleClick("edit")}/>
      <Command className={activeTab === "command" ? "active" : ""} onClick={()=> handleClick("command")}/>
      <Gear weight="fill" className={activeTab === "gear" ? "active" : ""} onClick={()=> handleClick("gear")}/>
      <SignOut  weight="fill" className={activeTab === "signout" ? "active" : ""} onClick={()=> handleClick("signout")}/>
    </aside>
  )
}

export default Sidebar
