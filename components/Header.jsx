import Image from "next/image";
const Header = () => {
  return (
    
      <header>
       
        {/* left  */}
        <div className="relative flex items-center h-20 cursor-pointer">
            <Image src="https://links.papareact.com/qd3" width={200} height={200} style={{objectPosition:'left'}} />
        </div>

        {/* middle  */}
        <div></div>

        {/* right  */}
        <div></div>
      </header>
   
  );
};

export default Header;
