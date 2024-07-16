export default async function getAllCategory() {
    try {
        const res = await fetch("https://animal-app-server.vercel.app/categories", {cache: "no-store"});
        return res.json();
    } catch (error) {
        console.error("Error fetching animal data:", error);
        throw error;
    }
}
