import { MessageCircle, Search } from "lucide-react";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import profileImage from "../assets/person.png";

export default function SideBarMain() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`fixed top-0 left-[50px] h-screen bg-gray-900 text-white transition-all duration-300
        ${isCollapsed ? "w-22" : "w-95"} flex flex-col`}
    >
      {/* Collapse/Expand Icon */}
      <div className="p-3 flex justify-center items-center">
        <span className="flex justify-center items-center gap-2">
          {" "}
          <MessageCircle
            className="text-violet-400 w-8 h-8"
            onClick={toggleSidebar}
          />{" "}
          {!isCollapsed && (
            <span className="text-white flex justify-center items-center text-2xl">
              Vibe<span className="text-violet-500">Chat</span>
            </span>
          )}
        </span>
      </div>

      {/* // Search Bar  */}
      <div className="w-full h-[50px] p-3 flex justify-center items-center">
        {isCollapsed ? (
          <Search />
        ) : (
          <InputGroup className="w-full h-full px-1 py-5">
            <InputGroupInput placeholder="Enter Name to search" />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        )}
      </div>

      {/* Sidebar Content */}

      <div className="p-4 flex flex-col gap-4">

        {/* // One Contact Icon */}
        <div className="flex items-center justify-between hover:bg-gray-700 p-2 rounded cursor-pointer">
          {/* Left: Profile + Name */}
          <div className="flex items-center gap-3 py-2">
            {/* Profile Image */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-500">
              <img
                src={profileImage}
                alt="person"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and Subtitle */}
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-white font-semibold text-md">
                  John Doe
                </span>
                <span className="text-gray-400 text-sm">Hi How are you</span>
              </div>
            )}
          </div>

          {/* Right: Date / Link */}
          {!isCollapsed && (
            <div className="text-gray-400 text-xs">Yesterday</div>
          )}
        </div>


      </div>

      
    </div>
  );
}
