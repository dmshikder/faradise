import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
const Header = () => {
  return (
    
      <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md p-4 ">
       
        {/* left  */}
        <div className="relative flex items-center h-20 cursor-pointer">
            <Image src="https://links.papareact.com/qd3" width={200} height={200}  />
        </div>

        {/* middle  */}
        <div className='flex items-center md:border-2 rounded-full h-14 md:shadow-sm'>
          <input className='flex-grow pl-5 bg-transparent outline-none text-lg text-gray-600' type="text" placeholder="Start Your query"/>
          <MagnifyingGlassIcon className='hidden lg:inline-flex h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
        </div>

        {/* right  */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
          <p className='hidden md:inline cursor-pointer'>Become a host</p>
          <GlobeAltIcon className='h-10'/>

          <div className='flex items-center space-x-2 border-2 p-2 rounded-full shadow-sm'>
          <Bars3Icon className='h-6'/>
          <UserCircleIcon className='h-6'/>
          </div>
        </div>
      </header>
   
  );
};

export default Header;
