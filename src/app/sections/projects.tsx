
export default function projectsSection() {

    return (

        <section>
            <p className="text-5xl mb-4 text-">projects</p>
            <hr className="m-4 mx-auto"></hr>

            <div className="group mb-6">
                <span className="w-full gap-2 px-3 py-2 border border-white rounded-md bg-neutral-50 bg-opacity-5 border-opacity-10 p-4 text-center">
                    <a href="https://github.com/itsYaraso/todotome" target="_blank"> <button className="flex justify-center">ToDoToMe</button> </a>
                </span>
                <span className="group-hover:opacity-100 transition-opacity
                 bg-neutral-900 px-1 border rounded-md absolute opacity-0 m-8 mx-auto text-wrap max-w-xs"
                 >Fully Dynamic to do task list with advanced features</span>
            </div>
            
        </section>

    )
}