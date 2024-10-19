import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { FooterInfo } from "../utils/data";

function Footer() {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-maincolor">REACT.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa, nulla voluptatibus exercitationem aperiam consequuntur.</p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaDribbbleSquare  size={30}/>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
        {FooterInfo.map((item) => (
        <div key={item.title}>
        <h6 className="font-medium text-gray-400">{item.title}</h6>
        <ul>
            {item.info.map((info , index) => (
                <li
                className="py-2 text-sm" 
                key={index}>{info}</li>
            ))}
        </ul>
    </div>
        ))}
        </div>

    </footer>
  );
}

export default Footer;
