import { MessageCircle } from "lucide-react";
import loginBackgroundImage from "../assets/loginBackground.png";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import { Routes, Route } from "react-router-dom";
import Otp from "@/components/Otp";

function AuthPage() {
  return (
    <>
      <div className="w-screen h-screen text-white">
        <div className="w-full h-full p-3 lg:p-5 bg-black flex justify-center items-center gap-3 relative">
          {/* // Name of the APP i.e. Logo*/}
          <span className="absolute  top-3 left-5 lg:top-20 lg:left-20 z-100 text-2xl lg:text-5xl flex items-center">
            <MessageCircle className="mr-1 lg:mr-3 text-violet-400 w-10 lg:w-15 lg:h-15" />{" "}
            Vibe<i className="text-violet-400">Chat</i>
          </span>

          {/* Image Part */}
          <div
            id="image-container"
            className="w-[55%] h-full hidden lg:block relative"
          >
            {/* // Image */}
            <div className="w-full h-full rounded-2xl ">
              <img
                src={loginBackgroundImage}
                alt="loginImage"
                className="w-full h-full overflow-hidden rounded-[inherit] opacity-70"
              />
              <span className="absolute left-20 bottom-20 text-3xl text-[#ffffff73]">
                Access Your World in One Click.
              </span>
            </div>
          </div>

          {/* Signin,Login,OTP and change password Page */}
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/verify" element={<Otp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
