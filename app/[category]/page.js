import getAllcategorizeAnimal from "@/lib/getAllcategorizeAnimal";
import Image from "next/image";

export default async function CategorizeAnimal({ params }) {
    const { category } = params;
    const animals = await getAllcategorizeAnimal({ category });
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-10">
            {animals.map((animal) => (
                <div key={animal._id}>
                    <div key={animal._id} className="text-center">
                        <Image src={animal?.animal_img} alt={animal?.animal_name} width={200} height={200} />
                        <h1>{animal?.animal_name}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}