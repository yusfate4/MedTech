import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#064b75] text-white pt-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Tell-A-Doc</h2>
          <p>
            Tell-A-Doc simplifies healthcare with a user-friendly platform for
            telehealth services, booking appointments, reviewing patients, and
            managing patient records.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:you.tell.a.doc@gmail.com"
              className="hover:underline"
            >
              you.tell.a.doc@gmail.com
            </a>
          </p>
          <p>
            Phone No:{" "}
            <a href="tel:08077746342" className="hover:underline">
              08077746342
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://x.com/Tell_A_Doc"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tell-a-doc-670969314/"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/tell.adoc/"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561391154002&mibextid=YIjw0uDPbU8WYW2J"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-1xl font-bold py-8  text-center">
        Copyright &copy; 2024 Tell-A-Doc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
