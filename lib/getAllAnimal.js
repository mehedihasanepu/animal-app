export default async function getAllAnimal() {
    try {
        const res = await fetch("/public/animal.json");
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching animal data:", error);
        throw error;
    }
}
