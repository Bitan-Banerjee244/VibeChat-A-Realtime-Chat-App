import {
  MessageCircleMore,
  CircleFadingArrowUp,
  LogOut,
} from "lucide-react";
import personImg from "../assets/person.png";

import SideBarMain from "@/components/SideBarMain";

function SideBar() {
  

  return (
    <>
      <div className="w-screen h-screen relative">
        {/* // Left Bar  */}
        <div className="w-[50px] h-full bg-[#15151df1] fixed top-0 left-0 flex justify-between items-center flex-col ">
          <div
            id="mainPart"
            className="w-full h-[24%] flex flex-col justify-evenly items-center text-white"
          >
            <span className=" p-3 rounded-xl cursor-pointer">
              <MessageCircleMore />
            </span>
            <span className=" p-3 rounded-xl cursor-pointer">
              <CircleFadingArrowUp />
            </span>
            <div className="w-8 h-8 cover rounded-[50%]  bg-black cursor-pointer">
              <img
                src={personImg}
                alt=""
                className="w-full h-full contain rounded-[inherit]"
              />
            </div>
          </div>
          <span className="text-red-400 mb-4">
            {" "}
            <LogOut />
          </span>
        </div>

        <SideBarMain />
       
      </div>
    </>
  );
}

export default SideBar;
