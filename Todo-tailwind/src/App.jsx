const App = () => {
    return (
        <>
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">
                            Todo
                        </h1>
                        <button>Luna</button>
                    </div>
                    <form className="bg-white rounded-md overflow-hidden py-4">
                        <input type="text" placeholder="Create a new todo..." />
                    </form>
                </header>
                <main className="container mx-auto px-4">
                    <article>
                        <button>circulo</button>
                        <p>Complete online JavaScript Curse</p>
                        <button>X</button>
                    </article>
                    <article>
                        <button>circulo</button>
                        <p>Complete online JavaScript Curse</p>
                        <button>X</button>
                    </article>
                    <article>
                        <button>circulo</button>
                        <p>Complete online JavaScript Curse</p>
                        <button>X</button>
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
