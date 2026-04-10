export default function RefundPolicy() {
    return (
        <section className="bg-[var(--ag-page)]">
            <div className="w-full max-w-6xl mx-auto p-4">

                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-black">
                        REFUND POLICY
                    </h1>
                    <p className="text-center text-base mt-6 text-gray-700">
                        A comprehensive refund policy is essential for any business as it helps to build trust with customers and sets clear expectations.
                    </p>
                </div>

                <div className="max-w-6xl mt-10 ">
                    <h2 className="font-semibold text-lg text-gray-900">
                        What are the terms and conditions for refund?
                    </h2>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-base text-gray-700">
                        <li>
                            You can ask for a refund/free replacement against any of your order within 7 days of its date of delivery.
                        </li>
                        <li>
                            All refunds will be credited either into your bank account or as Absolute Global Credits as per your convenience.
                        </li>
                        <li>
                            If you are a guest user, you will need to register with the email address which you had used to place your order to access your account.
                        </li>
                        <li>
                            For any other requests or queries regarding this, kindly write to us at {" "}
                            <a
                                href="mailto:info@absoluteglobal.in"
                                className="text-blue-600 underline"
                            >
                                info@absoluteglobal.in
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h2 className="font-semibold text-lg text-gray-900">
                        How long the refund procedure takes?
                    </h2>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-base text-gray-700">
                        <li>
                            Once the order has been picked up, the refund will be initiated to your selected mode within 7-10 working days from the date your order is picked, subject to your returns passing the quality check.
                        </li>
                        <li>Refund will reflect as per below-mentioned timelines:</li>
                        <li>Wallet refund will get credited within a few minutes.</li>
                        <li>NEFT refund will take 5 to 7 working days.</li>
                        <li>
                            Payment Gateway refund process takes 5 to 7 working days excluding Saturdays/Sundays and Bank Holidays.
                        </li>
                    </ul>
                </div>

                <div className="mt-10">
                    <h2 className="font-semibold text-lg text-gray-900">
                        Where should I return my product?
                    </h2>
                    <p className="mt-3 text-base text-gray-700">
                        You are requested to courier the product to us at the address mentioned below and we will reimburse your courier charges in case of manufacturing defects only. (If courier costs more than Rs.100, please retain your invoice and we will reimburse you accordingly). To avail the refund of courier charges you have to mail us the screenshot of the courier POD.
                    </p>
                </div>
                <div className="mt-10">
                    <h2 className="font-semibold text-lg text-gray-900">
                        You will have to self-ship the products to the address mentioned below:
                    </h2>

                    <div className="mt-3 space-y-1 text-base text-gray-700">
                        <p>
                            ABSOLUTE GLOBAL WORK PRIVATE LIMITED
                        </p>
                        <p>
                            F316 2nd Floor, Lado Sarai, Lado Sarai, New Delhi, Delhi,110030
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="font-semibold text-lg text-gray-900">
                        I haven't received my refund yet. What should I do?
                    </h2>
                    <ul className="list-disc pl-6 mt-3 space-y-2 text-base text-gray-700">
                        <li>
                            We update our customers through emails once we initiate the refund procedure.
                        </li>
                        <li>
                            If our last email states that we have initiated the refund procedure, kindly wait for the process to complete.
                        </li>
                    </ul>
                </div>

                <p className="mt-10 text-base">
                    For queries you can write to us at {" "}
                    <a
                        href="mailto:info@absoluteglobal.in"
                        className="text-blue-600 underline"
                    >
                        info@absoluteglobal.in
                    </a>
                </p>
            </div>
        </section>
    );
}