import { Farm } from "../User/Farm";
import Contract from "./components/Contract";
import image from "../../assets/PMFBY.jpg";
import { useState } from "react";

function handleConflict(setDisplayName: React.Dispatch<React.SetStateAction<string>>){
    setDisplayName("Conflicts");
    // console.log("Conflict");
}
function handlePending(setDisplayName: React.Dispatch<React.SetStateAction<string>>){
    setDisplayName("Pending Contracts");
    // console.log("Pending");
}

export default function AdminPage() {
    const [displayName, setDisplayName] = useState("Pending Contracts");
    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />

            <div className="">
                <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
                    <div className="flex items-center justify-between py-2 text-5x1">
                        <div className="font-bold text-green-900 text-xl">
                            Admin<span className="text-green-600">Panel</span>
                        </div>
                        <div className="flex items-center text-green-950">
                            <span className="material-icons-outlined p-2 text-sm">search</span>
                            <span className="material-icons-outlined p-2 text-sm">notifications</span>
                            <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row pt-24 px-10 pb-4">
                    <div className="w-2/12 mr-6">
                        <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                            <a href="#" className="inline-block text-green-950 hover:text-green-900 my-4 w-full">
                                <span className="material-icons-outlined float-left pr-2">face</span>
                                Profile
                                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                            </a>
                            <a href="#" className="inline-block text-green-950 hover:text-green-900 my-4 w-full">
                                <span className="material-icons-outlined float-left pr-2">power_settings_new</span>
                                Log out
                                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                            </a>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                            <a  onClick={(e) => {
                                    e.preventDefault();
                                    handlePending(setDisplayName);
                                }} href="#" className="inline-block text-green-950 hover:text-green-900 my-4 w-full">
                                <span className="material-icons-outlined float-left pr-2">tune</span>
                                Pending Contracts
                                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                            </a>
                            <a
                                href="#"
                                className="inline-block text-green-950 hover:text-green-900 my-4 w-full"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleConflict(setDisplayName);
                                }}
                            >
                                <span className="material-icons-outlined float-left pr-2">file_copy</span>
                                Conflicts
                                <span className="material-icons-outlined float-right">keyboard_arrow_right</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-10/12">
                        <div className="flex flex-row ">
                            <div className="bg-no-repeat bg-green-300 border border-green-300 rounded-xl w-7/12 mr-2 p-6">
                                <p className="text-5xl">
                                    <strong>
                                        {displayName}
                                        <br /> <div className="mt-10">07</div>
                                    </strong>
                                </p>
                            </div>

                            <div className="bg-no-repeat bg-green-300 border border-green-300 rounded-xl w-5/12 ml-2 p-6">
                                <p className="text-5xl">
                                    <strong>
                                        Total Contracts
                                        <br /> <div className="mt-10">19</div>
                                    </strong>
                                </p>
                                <a
                                    href="#"
                                    className="bg-green-950 text-xl text-white hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
                                >
                                    <strong>See History</strong>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row h-64 mt-6 flex-wrap gap-24">
                            <div className="flex flex-row h-64 mt-6">
                                <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-6/12 h-max">
                                    <Contract />
                                </div>
                                <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-6/12 h-max">
                                    <Contract />
                                </div>
                            </div>
                            <div className="flex flex-row h-64 mt-6">
                                <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-6/12 h-max">
                                    <Contract />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
