import Image from 'next/image'
const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
    <Image src="https://i.ibb.co/XCp8SS0/1.webp" fill objectFit='cover' alt='pic'/>

    <div className='absolute top-1/2 w-full text-center'>
      <p className='text-sm sm:text-lg'>Not sure where to go?</p>
      <button className='text-purple-500 font-bold bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible</button>
    </div>
    </div>
  )
}

export default Banner