import { Details, Navbar, Profile } from "@/components";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Mohamed Hafid | Portfolio",
  description: "My personal portfolio",
  manifest: "/web.manifest",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="flex-col lg:flex-row mt-24 px-4 sm:px-8 md:px-12 lg:px-24 w-full">
        <Profile />
        <div className="md:ml-[400px]">
          <Suspense fallback={<Loading />}>
            <Details />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
