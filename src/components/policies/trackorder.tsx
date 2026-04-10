export default function TrackOrder() {
    return (
        <section className="bg-[var(--ag-page)]">
            <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-10">

                <p className="text-sm sm:text-base mb-6 text-gray-700">
                    To track your order please enter your Order ID in the box below and press
                    the "Track" button. This was given to you on your receipt and in the
                    confirmation email you should have received.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">

                    <div>
                        <label className="block mb-2 text-base font-medium">
                            Order ID
                        </label>
                        <input
                            type="text"
                            placeholder="Found in your order confirmation email."
                            className="w-full border border-gray-300 p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-base font-medium">
                            Billing email
                        </label>
                        <input
                            type="email"
                            placeholder="Email you used during checkout."
                            className="w-full border border-gray-300 p-3 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-sm sm:text-base transition">
                    Track
                </button>

            </div>
        </section>
    )
}