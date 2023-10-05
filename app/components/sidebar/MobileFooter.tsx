'use client'

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import SettingsModal from './SettingsModal';
import { useState } from "react";
import { User } from "@prisma/client";
import { Avatar } from "../Avatar";

interface DesktopSidebarProps{
  currentUser:User
}

const MobileFooter:React.FC<DesktopSidebarProps> = ({
  currentUser
}) =>{
  const routes=useRoutes();
  const {isOpen}=useConversation();
  const [isSettingsOpen,SetIsOpen]=useState(false);
  if(isOpen)
  {
    return null;
  }
  return(
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((route)=>(
        <MobileItem
        key={route.href}
        href={route.href}
        active={route.active}
        icon={route.icon}
        onClick={route.onClick}
        />
      ))}
       <nav className='mt-2 mr-4 flex flex-col justify-between items-center'>
          <div onClick={()=>SetIsOpen(true)}
          className='cursor-pointer hover:opacity-75 transition'
          >
            <Avatar user={currentUser}/>
          </div>
      </nav>
       <SettingsModal
      currentUser={currentUser}
      isOpen={isSettingsOpen}
      onClose={()=> SetIsOpen(false)}
    />

    </div>
  )
}

export default MobileFooter;