import { Link } from "react-router-dom";

import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/insta.svg";
import youtubeIcon from "../../assets/youtube.svg"; 

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Address */}
          <div className=" lg:pl-10">
            <h5 className="font-medium text-gray-800 mb-4 uppercase text-xl ">Address</h5>
            <address className="not-italic text-base text-gray-600 leading-6">
              iCubes Tech Ltd <br />
              Unit 1 CBC <br />
              Bristol Way <br />
              Slough <br />
              SL1 3TD
            </address>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-medium text-gray-800 mb-4 uppercase text-xl">Let's Get Social!</h5>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://www.facebook.com/icubespc" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" className="w-7 h-7 transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a href="https://x.com/iCubes_uk" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="Twitter" className="w-7 h-7 transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a href="https://www.instagram.com/icubes.co.uk/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-7 h-7 transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="w-7 h-7 transition-transform duration-300 hover:-translate-y-2" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-medium text-gray-800 mb-4 uppercase text-xl">Contact</h5>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <a href="tel:01753552222" className="transition-colors duration-200 hover:text-[#00AEEF]">
                  01753 552222
                </a>
              </li>
              <li>
                <a href="mailto:sales@icubes.co.uk" className="transition-colors duration-200 hover:text-[#00AEEF]">
                  sales@icubes.co.uk
                </a>
              </li>
              <li className="time">Mon-Fri from 9:00 am to 5:30 pm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-4 text-sm md:text-base text-gray-500">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2025 iCubes Software Services All Rights Reserved.</p>
          <p>
            Website By:{" "}
            <a
              href="https://sdssoftwares.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-[#00AEEF]"
            >
              sdssoftwares.co.uk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
