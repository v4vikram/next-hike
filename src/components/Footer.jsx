import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 pt-12 pb-8 text-black bg-white-900">
      <div className="container flex flex-col justify-between px-10 mx-auto overflow-hidden lg:flex-row">
        <a
          href="/"
          className="block mr-24 w-[50%] py-2  text-black uppercase font-medium tracking-wide"
        >
          About
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            ipsam explicabo. Consequuntur voluptatibus reprehenderit saepe dicta
            amet perspiciatis delectus optio? Nostrum, quam similique eum
            doloribus doloremque tenetur omnis recusandae nihil?
          </p>
          <img
            src="https://i.imgur.com/JYin6lK.png"
            className="w-40 ml-4 lg:ml-0"
            alt="logo"
          />
        </a>
        <div className="block w-2/3 mt-6 text-sm sm:flex lg:mt-0">
          <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
            <li className="inline-block px-3 py-2 font-medium tracking-wide text-black uppercase">
              About
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                FAQ
              </a>
            </li>
          </ul>
          <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
            <li className="inline-block px-3 py-2 font-medium tracking-wide text-black uppercase">
              About
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Terms of Service
              </a>
            </li>
          </ul>
          <ul className="flex flex-col w-full p-0 font-thin text-left text-gray-700 list-none">
            <li className="inline-block px-3 py-2 font-medium tracking-wide text-black uppercase">
              About
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Developer API
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-black"
              >
                Guides
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
