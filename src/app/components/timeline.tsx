export default function Timeline() {
  return (
    <div className="">
      <p className="text-5xl text-center p-4">Experience </p>
      <span className="flex justify-center w-full gap-2 mt-4 px-3 py-2 border border-white rounded-md bg-neutral-50 bg-opacity-5 border-opacity-10 p-4 text-center">
          <a href="https://github.com/nodejs/nodejs.org" target="_blank">
            {" "}
            <button>nodejs</button>
          </a>
        <span
          className="group-hover:opacity-100 transition-opacity
                 bg-neutral-900 px-1 border rounded-md absolute opacity-0 m-8 mx-auto text-wrap max-w-xs"
        >
          Open source contributions for nodejs.org.
        </span>
        </span>
    </div>
  )
}