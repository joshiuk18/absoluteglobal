import { landingsGuarantees } from "@/config/guarantees";

export function SectionGuarantee() {
    return (
        <section className="py-10 px-4 my-10">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">

                <div>
                    <p className="text-3xl md:text-4xl font-bold mb-2">
                        Get Our
                    </p>
                    <p className="text-3xl md:text-4xl font-bold mb-2">
                        Latest Offers News
                    </p>
                    <p className="text-gray-600 text-sm">
                        Subscribe newsletter
                    </p>
                </div>

                <form className="flex w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full md:w-64 bg-white border border-gray-300 focus:outline-none px-3 py-2 rounded-l"
                    />
                    <button
                        type="submit"
                        className="bg-violet-500 hover:bg-violet-600 text-white px-5 py-2 rounded-r"
                    >
                        Send
                    </button>
                </form>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-6">
                {landingsGuarantees.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="mb-4 h-14 w-14">
                                <Icon />
                            </div>

                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm">
                                {item.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}