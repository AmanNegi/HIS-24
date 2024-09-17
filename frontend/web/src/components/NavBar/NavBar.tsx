import { PiFarmBold } from "react-icons/pi";
import { GiFarmer } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className=" text-white fixed top-0 z-[2] h-[8vh] w-[100%] bg-white-700 flex px-2 md lg:px-10  items-center shadow-md ">
      <div className="">
        <PiFarmBold size={40} color="black" />
      </div>
      <div className="flex-1"></div>
      <div className="flex gap-5">
        <Button className=" flex-1 flex-end">Home</Button>
        <Button className="w-40 flex-1 flex-end">Contact Us</Button>
      </div>

      <div className="ml-20 flex justify-end border-white">
        <button onClick={() => navigate("/signup")} className="text-black">
          Sign In
        </button>
      </div>
    </div>
  );
}
