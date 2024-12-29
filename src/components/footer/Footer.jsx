import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full bg-neutral-800 text-neutral-50">
        {" "}
        <footer className="flex flex-col items-center py-8 gap-6">
          <h2 className="font-title text-2xl">MovieGPT</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-[36px] h-[36px] flex items-center justify-center bg-[#e50914] rounded-full"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              className="w-[36px] h-[36px] flex items-center justify-center bg-[#e50914] rounded-full"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-[36px] h-[36px] flex items-center justify-center bg-[#e50914] rounded-full"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <p className="text-sm">© 2023 MovieGPT. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
