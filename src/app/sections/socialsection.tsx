import Image from "next/image";

export default function socialSection() {
    return (
        <div className="flex">
        <div className="flex fixed -rotate-90 right-0 top-1/2 cursor-pointer gap-4">

        
          <a className="" href="https://github.com/itsYaraso" target="_blank">
            <img
              src="/github.svg"
              className="cursor-pointer hover:scale-150 ease-in-out duration-200 2xl:w-2/4"
              width={24}
              height={24}
              alt="itsYaraso"
            />
          </a>

          <a className="" href="https://www.linkedin.com/in/benjamin-gregg-9a514397/" target="_blank">
            <img
              src="/linkedin.svg"
              className="invert cursor-pointer hover:scale-150 ease-in-out duration-200 2xl:w-5/6"
              width={24}
              height={24}
              alt="Linkedin"
            />
          </a>
        </div>
      </div>
    );
}