import Image from "next/image";


export default function LandAnimal() {
    const animals = [
        {
            "id": 1,
            "animal_name": "Elephant",
            "animal_img": "https://i.ibb.co/Sd0D59W/Elephant.png",
            "animal_category": "Land Animal"
        },
        {
            "id": 2,
            "animal_name": "Horse",
            "animal_img": "https://i.ibb.co/tqsjzHn/Horse.png",
            "animal_category": "Land Animal"
        },
        {
            "id": 3,
            "animal_name": "Fox",
            "animal_img": "https://i.ibb.co/zr0cmsW/Fox.png",
            "animal_category": "Land Animal"
        },
        {
            "id": 4,
            "animal_name": "Cockatoo",
            "animal_img": "https://i.ibb.co/6RxtK2w/Cockatoo.png",
            "animal_category": "Bird"
        },
        {
            "id": 5,
            "animal_name": "Phoenix",
            "animal_img": "https://i.ibb.co/fpR33bC/Phoenix.png",
            "animal_category": "Bird"
        },
        {
            "id": 6,
            "animal_name": "Sparrow",
            "animal_img": "https://i.ibb.co/hWPh2Qw/Sparrow.png",
            "animal_category": "Bird"
        },
        {
            "id": 7,
            "animal_name": "Tuna",
            "animal_img": "https://i.ibb.co/SKjsgS4/Tuna.png",
            "animal_category": "Fish"
        },
        {
            "id": 8,
            "animal_name": "Red Fish",
            "animal_img": "https://i.ibb.co/y5sdpNM/Red-Fish.png",
            "animal_category": "Fish"
        },
        {
            "id": 9,
            "animal_name": "Pomfret",
            "animal_img": "https://i.ibb.co/FVVMx7L/Pomfret.png",
            "animal_category": "Fish"
        },
        {
            "id": 10,
            "animal_name": "Lady Bug",
            "animal_img": "https://i.ibb.co/rbfhg91/Lady-Bug.png",
            "animal_category": "Insect"
        },
        {
            "id": 11,
            "animal_name": "Butterfly",
            "animal_img": "https://i.ibb.co/F5Z86kv/Butterfly.png",
            "animal_category": "Insect"
        },
        {
            "id": 12,
            "animal_name": "Bee",
            "animal_img": "https://i.ibb.co/S7GGb9S/Bee.png",
            "animal_category": "Insect"
        }
    ]

    return (
        <div>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-10">
           {animals.map((animal) => (
                <div key={animal.id} className="text-center">
                    <Image src={animal.animal_img} alt={animal.animal_name} width={200} height={200} />
                    <h1>{animal.animal_name}</h1>
                </div>
            ))}
           </div>
        </div>
    );
}