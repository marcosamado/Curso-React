import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
                <header className="container mx-auto px-6 pt-8">
                    <div className="flex justify-between">
                        <h1 className=" text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                            Todo
                        </h1>
                        <button className="">Luna</button>
                    </div>
                    <form className="mb-5 mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3.5">
                        <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
                        <input
                            className="w-full text-gray-500 outline-none"
                            type="text"
                            placeholder="Create a new todo..."
                        />
                    </form>
                </header>
                <main className="container mx-auto px-6">
                    <article className="flex gap-2 rounded-md border-2 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button className="flex-none">{<CrossIcon />}</button>
                    </article>
                    <article className="flex justify-between rounded-md border-2 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 rounded-full border-2"></button>
                        <p className="w-auto pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button>{<CrossIcon />}</button>
                    </article>
                    <article className="flex justify-between rounded-md border-2 bg-white px-4 py-3.5">
                        <button className="h-5 w-5 rounded-full border-2"></button>
                        <p className="w-auto pt-0.5 text-xs font-bold text-gray-600">
                            Complete online JavaScript Curse
                        </p>
                        <button>{<CrossIcon />}</button>
                    </article>
                    <section>
                        <span>5 items left</span>
                        <button>Clear Completed</button>
                    </section>
                </main>

                <section className="container mx-auto px-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </section>
            </div>
        </>
    );
};

export default App;
