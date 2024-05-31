import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  const navLinks = ["Home", "Class", "Promo", "Online Class", "Contact"];
  return (
    <header>
      <nav class="bg-transparent py-2 md:py-4">
        <div class="container px-10 mx-auto md:flex ">
          <div class="flex justify-between">
            <a href="#" class="font-bold text-xl text-indigo-600">
              <img src={Logo} alt="" />
            </a>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <div
            class="hidden md:flex flex-col md:flex-row  mt-3 md:mt-0 pl-14"
            id="navbar-collapse"
          >
            {navLinks.map((link, index) => {
              return (
                <a href="#" class="p-2 px-5 pb-0 lg:px-4 md:mx-2 text-white self-end" key={index}>
                  {link}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
    // <div class="header-2">

    //   <div class="bg-indigo-100 py-6 md:py-12">
    //     <div class="container px-4 mx-auto">
    //       <div class="text-center max-w-2xl mx-auto">
    //         <h1 class="text-3xl md:text-4xl font-medium mb-2">
    //           Get the header you needed for your awesome website.
    //         </h1>
    //         <button class="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">
    //           Get Started
    //         </button>
    //         <div class="mt-4">
    //           <img
    //             src="//via.placeholder.com/1000x785/fff?text=iMac+Mockup"
    //             alt="mockup"
    //             class="d-block max-w-full rounded shadow-md"
    //           />
    //         </div>
    //       </div>

    //       <div class="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
    //         <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
    //           <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
    //           <h5 class="text-xl font-medium uppercase mb-4">Fresh Design</h5>
    //           <p class="text-gray-600">
    //             FWR blocks bring in an air of fresh design with their creative
    //             layouts and blocks, which are easily customizable
    //           </p>
    //         </div>

    //         <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
    //           <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
    //           <h5 class="text-xl font-medium uppercase mb-4">Clean Code</h5>
    //           <p class="text-gray-600">
    //             FWR blocks are the cleanest pieces of HTML blocks, which are
    //             built with utmost care to quality and usability.
    //           </p>
    //         </div>

    //         <div class="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
    //           <span class="w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3"></span>
    //           <h5 class="text-xl font-medium uppercase mb-4">Perfect Tool</h5>
    //           <p class="text-gray-600">
    //             FWR blocks is a perfect tool for designers, developers and
    //             agencies looking to create stunning websites in no time.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
