import Image from "next/image";
import profile from "../public/images/my-profile.jpg";

const Profile = () => {
  return (
    <section className="md:fixed flex flex-col items-center">
      <div className="relative">
        <Image
          src={profile}
          width={350}
          height={350}
          alt="Profile"
          className="rounded-lg"
        />
      </div>
      <h1 className="font-bold text-3xl text-center mt-6">Mohamed Hafid</h1>
      <h2 className="font-medium text-[18px] text-center">
        Full stack Developer
      </h2>
      <button className="bg-black text-white px-4 py-2 rounded-lg mt-5 mx-auto">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View My Resume</a>
      </button>
    </section>
  );
};

export default Profile;
