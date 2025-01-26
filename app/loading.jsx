import Image from 'next/image';
import spinner from "@/public/icons/spinner.png";

const Loading = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Image src={spinner} alt="spinner" className="w-10 h-10 animate-spin" />
    </div>
  );
}

export default Loading