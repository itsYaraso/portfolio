export default function socialSection() {
    return (
        <div className="flex ">
        <div className="flex fixed -rotate-90 right-0 top-1/2 cursor-pointer gap-4">

        
          <a className="cursor-pointer" href="https://github.com/itsYaraso">
            <img
              src="/github.svg"
              className="cursor-pointer"
              width={32}
              height={32}
              alt="itsYaraso"
            />
          </a>

          <a className="cursor-pointer" href="https://github.com/">
            <img
              src="/linkedin.svg"
              className="invert"
              width={32}
              height={32}
              alt="Linkedin"
            />
          </a>


        </div>
      </div>
    );
}