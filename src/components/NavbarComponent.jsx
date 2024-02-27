import React from 'react'

//images
import logo from '../assets/logo.png'

//icons
import { CiUser,CiHeart,CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { useSelector } from 'react-redux';

//framer 
import { motion } from "framer-motion";

function NavbarComponent() {

    const {totalProduct} = useSelector (state=>state.cartStore);
    const {favoritTotal} = useSelector (state=>state.favoriteStore);

  return (

    <div className='bg-mainBlue py-[10px] xl:py-[0px]  lg:h-[100px] flex items-center'>
        <div className='container mx-auto flex justify-between lg:flex-row items-center flex-col gap-[15px]'>
        <Link to={'/'}>
            <img 
                src={logo} 
                alt='Shopelectron logo'
                className=''
            />
        </Link>
            {/*Search component*/}
            <div className='bg-textWhite rounded-[20px] flex'>
                <input type='text' placeholder='Search Product' className='px-[25px] py-[17px] rounded-[20px] outline-none placeholder:text-black text-[14px]'/>
                <button className='rounded-[20px] bg-mainOrange text-textWhite px-[41px] text-[14px]  '>Search</button>
            </div>
            {/*General info*/}
            <div className='flex items-center gap-[10px] text-textWhite'>
            {/*login Fix please implement clerck!*/}
                <div className='flex items-center gap-[5px]'>
                    <CiUser size={30} />
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                    <UserButton  afterSignOutUrl='/' appearance={{
                        variables :{
                            colorText : 'black'
                        },
                        elements : {
                        avatarBox : 'w-[40px] h-[40px]',
                        }
                }}/>
                    </SignedIn>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-[5px]'>
                        <CiHeart size={30} />
                        <span className='bg-mainOrange rounded-full w-[25px] h-[25px] flex items-center justify-center'>{favoritTotal}</span>
                    </div>
                        <motion.div
                        whileTap={{
                            scale: 1.5
                        }}
                    >
                        <Link to='/favorites'>Favorit</Link>
                    </motion.div>
                   
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center gap-[5px]'>
                        <CiShoppingCart size={30} />
                        <span className='bg-mainOrange rounded-full w-[25px] h-[25px] flex items-center justify-center'>{totalProduct}</span>
                    </div>
                    <motion.div
                        whileTap={{
                            scale: 1.5
                        }}
                    >
                     <Link to='/cardProducts'>Cart</Link>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent
