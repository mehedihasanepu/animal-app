export default async function getAllcategorizeAnimal({ category }) {
    try {
        const res = await fetch(`https://animal-app-server.vercel.app/animals?category=${category}`, { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.error("Error fetching animal data:", error);
        throw error;
    }
}