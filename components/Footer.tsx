import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-32 pb-20 pr-10 pl-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-10 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:costas.carollina@gmail.com?subject=Let's%20get%20in%20touch&body=Hi%20Costas,%0A%0AI%20would%20like%20to%20discuss%20further%20about%20the%20project.%20Looking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards!">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex-col items-center">
        <p
          className="flex justify-center items-center md:text-base text-sm md:font-normal font-light"
          style={{ marginTop: "20px" }}
        >
          Copyright © 2024 Costas Carolina
        </p>

        <div
          className="flex justify-center items-center md:gap-3 gap-6"
          style={{ marginTop: "20px" }}
        >
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-black-300"
              onClick={() => window.open(info.url, "_blank")} // Navighează către URL într-o filă nouă
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
