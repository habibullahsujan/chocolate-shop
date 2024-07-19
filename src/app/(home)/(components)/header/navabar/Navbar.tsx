import Link from 'next/link'
import React, { useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";

import BrandedFoods from './BrandedFoods';

const Navbar = () => {

    const [submenuOpen, setSubmenuOpen] = useState(false);
    console.log(submenuOpen)
    const handleMouseEnter = () => {

        setSubmenuOpen(true);
    };

    const handleMouseLeave = () => {
        setSubmenuOpen(false);
    };
    return (
        <nav className='py-6'>
            <section className='flex items-center justify-between'>
                <div className=''>
                    {/* logo */}
                    <Link href={'/'} className='font-bold text-4xl text-yellow-700 font-pacifico'>Siwar</Link>
                </div>
                <div className='hidden md:block'>
                    {/* menuItem */}
                    <ul className='flex justify-between gap-x-12 text-white'>
                        <Link href={'/home'}><li>Home</li></Link>
                        <button onMouseEnter={handleMouseEnter}
                            className=' relative'><li>Branded Foods</li>
                            {submenuOpen && <BrandedFoods handleMouseLeave={handleMouseLeave} />}
                        </button>
                        <Link href={'/home'}><li>Chocolate</li></Link>
                        <Link href={'/home'}><li>Gift Boxes</li></Link>
                        <Link href={'/home'}><li>Pages</li></Link>
                        <Link href={'/home'}><li>New Collection</li></Link>
                    </ul>
                </div>
                <div className='flex items-center gap-x-4 text-white'>
                    <Link href={'/favorite'}><MdFavoriteBorder size={30} /></Link>
                    <Link href={'/cart'}><CiShoppingCart size={30} />
                    </Link>
                    <Link href={'/'}>
                        <CgDetailsMore size={30} />
                    </Link>
                </div>


            </section>

        </nav>
    )
}

export default Navbar