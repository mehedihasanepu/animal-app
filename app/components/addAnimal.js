"use client";

import { useState } from "react";

export default function AddAnimal() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const animalName = e.target.animalName.value;
        const animalCategory = e.target.animalCategory.value;
        console.log({ animalName, animalCategory });
        setShowModal(false);
    };

    return (
        <div className="container mx-auto p-4">
            <button
                className=" py-3 px-7 text-white border border-white rounded-full"
                onClick={() => setShowModal(true)}
            >
                Add Animal
            </button>

            {showModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black ">Add Animal</h2>
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
                                    id="animalName"
                                    placeholder="Animal Name"
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="animalCategory"
                                    placeholder="Animal Category"
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <div className="flex justify-between items-center shadow appearance-none border rounded w-full py-3 px-3">
                                    <label htmlFor="animalImage" className="text-lg font-medium text-gray-700 pl-2">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        id="animalImage"
                                        className="hidden"
                                    />
                                    <button
                                        onClick={() => document.getElementById('animalImage').click()}
                                        className="shadow appearance-none border text-sm rounded-lg py-1 px-3 bg-[#CCCCCC] text-black focus:outline-none focus:shadow-outline"
                                    >
                                        Upload
                                    </button>
                                </div>

                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-black hover:bg-gray-800 text-white w-full py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                                >
                                    Add Animal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    );
}