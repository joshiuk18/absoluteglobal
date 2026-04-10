export default function ShippingPolicy() {
    return (
        <section className="bg-[var(--ag-page)]">
            <div className="w-full max-w-6xl mx-auto p-4">

                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold  text-black mb-6">
                        Shipping Policy
                    </h1>
                    <p className="text-gray-700 text-base mb-8">
                        A clear and detailed shipping policy helps set customer expectations and improves their shopping experience.
                    </p>
                </div>

                <div className="max-w-6xl mt-6">
                    <h2 className="font-medium text-lg text-gray-900">
                        What is the Shipping Philosophy of {" "}
                        <a
                            href="https://www.absoluteglobal.in"
                            target="_blank"
                            className="text-blue-600 underline"
                        >
                            www.absoluteglobal.in
                        </a>{" "}
                        ?
                    </h2>
                    <div className="mt-3 space-y-4 text-base text-gray-700">
                        <p>
                            We promise our patrons one of the best experiences of online shopping that is hassle free and reliable. We take care of all parameters that ensure your delivery reaches you in a sound state.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mt-6">
                    <h2 className="font-medium text-lg text-gray-900">
                        What is the delivery time period?
                    </h2>
                    <div className="mt-3 space-y-4 text-base text-gray-700">
                        <p>
                            Orders within India are delivered within 3 - 4 working days, and International orders are delivered in 15 to 20 working days. Delivery time may vary depending upon the shipping address.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mt-6">
                    <h2 className="font-medium text-lg text-gray-900">
                        Do you apply any shipping charges?
                    </h2>
                    <div className="mt-3 space-y-4 text-base text-gray-700">
                        <p>
                            Within India,{" "}
                            <a
                                href="https://www.absoluteglobal.in"
                                target="_blank"
                                className="text-blue-600 underline"
                            >
                                www.absoluteglobal.in
                            </a>{" "}
                            provides Free Shipping for Prepaid orders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}