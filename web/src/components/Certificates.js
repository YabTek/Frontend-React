import React from "react";
import certificate from "../assets/certificate.png";

const Certificates = () => {
  return (
    <div>
      <h1 id="certificate" className="text-left ml-24 lg:ml-12 text-3xl font-serif font-bold pt-48 mb-8 text-gray-800">
        Certificates
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-left pl-8 md:px-6">
        <img
          className="h-[20rem] w-[22rem]  xl:h-[30rem] xl:w-[30rem]  mb-8 md:mb-0 shadow-2xl shadow-gray-500"
          src={certificate}
          alt=""
        />
        <img
          className="h-[20rem] w-[22rem]  pt-4 lg:pt-0 xl:h-[30rem] xl:w-[30rem]  mb-8 md:mb-0  shadow-2xl shadow-gray-500"
          src={certificate}
          alt=""
        />
        <img
          className="h-[20rem] w-[22rem]  pt-4 lg:pt-0 xl:h-[30rem] xl:w-[30rem]  shadow-2xl shadow-gray-500"
          src={certificate}
          alt=""
        />
      </div>
    </div>
  );
};

export default Certificates;
