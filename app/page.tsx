

import Image from 'next/image';

export default function Home() {
  return (
   <div className="w-full h-20 bg-white py-5 px-10">
    <div className="w-12 h-12 border-2 rounded-full border-black">
      <Image src="https://cdn-icons-png.flaticon.com/128/3018/3018447.png" alt="Add Icon" width={48} height={48} />
    </div>
   </div>
  );
}
