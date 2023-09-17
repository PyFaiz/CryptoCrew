import React from "react";
import { Link } from "react-router-dom";
import goodimg from "../../images/da_img.png";
const Welcome = () => {
    return (
        <div className="min-h-screen">
        <div className="flex w-full justify-between items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white py-1">
            <br />
              Generate and Validate <br /> Certificates Easily
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            A Decentralized Certificate Generation and Verification dApp <br />to create certificates and verify that are 
            Immutable, <br />Cryptographically Secured, and have Zero Downtime.
            All powered by decentralized Ethereum Smart Contracts By Team CryptoCrew
            </p>
            <div className="mt-4">
            <Link to="/hi">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mr-4">Issue Certificate</button>
            </Link>
            <Link to="/by">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md">View Certificate</button>
            </Link>
          </div>
            </div>
            </div>
            <br />
            <img src={goodimg} className="md:ml-10 mt-20" style={{width: '600px'}}/>
        </div>
        </div>
    );
}
  export default Welcome;