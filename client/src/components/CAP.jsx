import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
const CAP = () => {
    return (
        <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-black py-1">Authority Portal</h1>
            </div>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-10 bg-[#2952e3] p-5 rounded-full cursor-pointer hover:bg-[#2546bd]"
              style={{ width: '400px' }}
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">
                Connect Wallet
              </p>
            </button>
        </div>
        </div>
    );
    }
  export default CAP;