"use client";
import Link from "next/link";
import AddAnimal from "../addAnimal";
import AddCategory from "../addCategory";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const navLinks = [
        { name: "Land Animal", href: "/land-animal" },
        { name: "Bird", href: "/bird" },
        { name: "Fish", href: "/fish" },
        { name: "Insect", href: "/insect" },
    ]
    const pathName = usePathname();

    return (
        <div className="flex justify-between items-center">
            <div className="my-10 ">
                <ul className="flex gap-7">
                    {
                        navLinks.map((link) => {
                            const isActive = pathName.startsWith(link.href);
                            return (
                                <li key={link.name}><Link className= {isActive?" py-3 px-7 text-[#058F34] border border-[#058F34] rounded-full": "py-3 px-7 text-[#EF0D0D] border border-[#EF0D0D] rounded-full"} href={link.href}> {link.name}</Link></li>

                            )
                        })
                    }
                </ul>
            </div>
            <div className="flex items-center ">
                <AddAnimal />
                <AddCategory />

            </div>
        </div>
    );
}