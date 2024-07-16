"use client";

import { useState } from "react";

const imageHostingKey = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


export default function AddAnimal() {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const animal_name = e.target.animalName.value;
        const category = e.target.animalCategory.value;
        const animal_category = category.toLowerCase();

        const image = e.target.animalImage.files[0];
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(imageHostingApi, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                const animal_img = result.data.url;

                await uploadToLocalServer(animal_img, animal_name, animal_category);
                setShowModal(false);
            } else {
                console.error('Image upload failed:', result);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setLoading(false);
        }
    };

    const uploadToLocalServer = async (animal_img, animal_name, animal_category) => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        try {
            const response = await fetch(`${baseUrl}/animals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ animal_img, animal_name, animal_category })
            });

            if (!response.ok) {
                throw new Error('Failed to upload image to local server');
            }
        } catch (error) {
            console.error('Error uploading to local server:', error);
        }
    };


    return (

        <div className="container mx-auto p-4">
            {loading && <div className="mb-5">Loading...</div>}
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

                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="animalCategory"
                                    placeholder="Animal Category"
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"

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