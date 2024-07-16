"use client";

import { useState } from "react";

export default function AddCategory() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const categoryName = e.target.categoryName.value;
        console.log({ categoryName });
        setShowModal(false);
    };

    return (
        <div className="container mx-auto p-4">
            <button
                className=" py-3 px-7 text-white border border-white rounded-full w-44"
                onClick={() => setShowModal(true)}
            >
                Add Category
            </button>

            {showModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black ">Add Category</h2>
                            <button
                                className="text-black text-xl font-bold"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="categoryName"
                                    placeholder="Name"
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-black hover:bg-gray-800 text-white w-full py-2 px-4 mt-7 rounded-lg focus:outline-none focus:shadow-outline"
                                >
                                   Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}