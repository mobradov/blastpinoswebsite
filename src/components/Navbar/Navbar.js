
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

import SocialLink from '../Shared/SocialLink';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
/*nachträglich in ul 
<li className='pt-8'> <Link
                        href="https://twitter.com/BlastPinosNFT">Twitter</Link></li>
          <li className='pt-8'><Link
                        href="https://etherscan.io/address/0xdcf9bd5f26b58b82d4a8ec8fdf52069c7417c9c7">Blastscan</Link></li>
          <li className='pt-8'> <Link
                        href="https://opensea.io/collection/ether-fellas">Elemental</Link></li> */
  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
      <h1 className='mr-20 w-full text-3xl font-bold text-blyellow'>Blast Pinos</h1>
      <ul className='hidden md:flex gap-4'>
      
        <li className='p-4'><button
                        className="w-32 h-12 bg-blyellow uppercase tracking-wider font-righteous text-base small-shadow text-black"
                        onClick={() => {
                            const element = document.getElementById('mint');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Mint Here
                    </button></li>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-bl-yellow m-4'>BlastPinos</h1>
          <li className='p-4 border-b border-gray-600'> <Link
                        href="https://twitter.com/BlastPinosNFT">Twitter</Link></li>
          
      </ul>
     
    </div>
    );
};
/* nachträglich in ul
<li className='p-4 border-b border-gray-600'><Link
                        href="https://etherscan.io/address/0xdcf9bd5f26b58b82d4a8ec8fdf52069c7417c9c7">Blastscan</Link></li>
          <li className='p-4 border-b border-gray-600'> <Link
                        href="https://opensea.io/collection/ether-fellas">Elemental</Link></li>*/
export default Navbar;


