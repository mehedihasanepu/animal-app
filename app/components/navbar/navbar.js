"use client";
import Link from "next/link";
import AddAnimal from "../addAnimal";
import AddCategory from "../addCategory";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [navLinks, setNavLinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://animal-app-server.vercel.app/categories', { cache: "no-store" });
            const data = await response.json();
            setNavLinks(data);
        }
        fetchData();
    }, []);

    const pathName = usePathname();

    return (
        <div className="flex justify-between items-center">
            <div className="my-10 ">
                <ul className="flex gap-7">
                    {
                        navLinks.map((link) => {
                            const isActive = pathName.startsWith(link.href);


                            return (
                                <li key={link._id}><Link className={isActive ? " py-3 px-7 text-[#058F34] border border-[#058F34] rounded-full" : "py-3 px-7 text-[#EF0D0D] border border-[#EF0D0D] rounded-full"} href={link.href}> {link.name}</Link></li>

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