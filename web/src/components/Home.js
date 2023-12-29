import React from "react";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div
      id="home"
      className="flex justify-between sm:ml-auto pt-36 pb-24 lg:p-24 lg:pt-36 relative"
    >
      <div className="pl-4  sm:pl-auto xl:px-6 lg:pt-[6rem] relative">
        <h1 class="text-xl sm:px-2 sm:block sm:pl-auto sm:text-3xl font-bold">
          Hello👋<br/>Welcome to<span class="text-[#FFA800] font-bold font-serif text-2xl"> ZenithGraphics</span>
        </h1>
        <p class="text-lg font-semibold max-w-full ">
          <span>
          We specialize in crafting visually stunning designs that 
          captivate and inspire. Our team of creative minds transforms
           concepts into captivating visuals, ensuring your brand stands out in a crowded market. 
           Elevate your business with our commitment to innovation and precision.
          </span>
        </p>
      </div>
      <div className="absolute md:absolute w-96 xl:h-auto lg:ml-[20rem] lg:mt-[24rem] xl:ml-[34rem] xl:mt-[26rem] bg-green-400 opacity-80 p-4 rounded-lg shadow-lg shadow-orange-300 hidden lg:block">
        <p className="text-black text-md font-bold italic">
          <span class="font-bold font-serif text-xl text-black">"</span>
          Design is not just what it looks like and feels like. Design is how it
          works.
          <span class="font-bold font-serif text-xl text-black">"</span>
        </p>
        <p className="text-right text-md text-yellow-600 font-bold text-sm mt-4">-- Steve Jobs</p>
      </div>
      <img
        className="hidden rounded-xl ml-24 w-56 h-56 sm:block lg:w-[30rem] lg:h-[35rem]"
        src={profile}
        alt=""
      />
    </div>
  );
};

export default Home;
