export default async function getAllAnimal() {
    try {
        const res = await fetch("https://animal-app-server.vercel.app/allAnimal", { cache: "no-store" });
        return res.json();
    } catch (error) {
        console.error("Error fetching animal data:", error);
        throw error;
    }
}
