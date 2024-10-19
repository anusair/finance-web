import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from "react-icons/fa";

export const NavHeader = ["Home", "Company", "Resources", "About", "Contact"];
export const cards = [
    {
        title: "Single User" ,
        img: Single ,
        price: "149$" ,
        features: [
            "500GB Storage",
            "1 Granted User" ,
            "Send up to 2 GB"
        ]
    } ,
    {
        title: "Double User" ,
        img: Double ,
        price: "149$" ,
        features: [
            "500GB Storage",
            "1 Granted User" ,
            "Send up to 2 GB"
        ]
    } , 
    {
        title: "Triple User" ,
        img: Triple ,
        price: "149$" ,
        features: [
            "500GB Storage",
            "1 Granted User" ,
            "Send up to 2 GB"
        ]
    }
]

export const SocialIcons = []

export const FooterInfo = [
    {
        title: "Solutions" ,
        info: ["Analytics" ,"Marketing" , "Commerce" , "Insight"]
    } , 
    {
        title: "Support" , 
        info: ["Pricing" , "Documentation" , "Guides" , "API Status"]
    }, 
    {
        title: "Company" ,
        info: ["About" , "Blog" , "Jobs" , "Press" , "Careers"]
    }, 
    {
        title: "Legal" , 
        info: ["Claim" , "Policy" , "Terms"]
    }
]