import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Send, Settings, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 flex fixed w-full top-0 z-40 backdrop-blur-lg ">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* logo */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-all"
            >
              <div className=" rounded-lg flex items-center justify-center hover:bg-cyan-300/80 p-2">
                <Send className="w-5 h-5 text-black" />
                <h1 className="text-lg font-bold">Let's Chat!</h1>
              </div>
            </Link>
          </div>
          {/* links */}
          <div className="flex items-center gap-4">
            {/* <Link
              to={"/settings"}
              className={`btn btn-sm gap-2 transition-colors`}
            >
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline">Settings</span>
            </Link> */}
            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="w-5 h-5" />
                  <span className=" sm:inline">Profile</span>
                </Link>
                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="w-5 h-5" />
                  <span className=" sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
