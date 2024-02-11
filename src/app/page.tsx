import Image from "next/image";
import Patientloginin from "./(auth)/signup/page";
import Hero from "@/components/Hero";
import TabsDemo from "@/components/component/exampletabs";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="[background:radial-gradient(50%_10%_at_125%_125%,#6a3aed_100%,#8762ff33_40%)]">
      <Hero />
      <TabsDemo/>
      <section className="w-full py-6 md:py-12 bg-gray-100">
        <div className="container flex flex-col flex-end items-center gap-14 px-4 md:gap-10 md:flex-row md:px-6 ">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get started in minutes</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Create an account to get access to the platform and start building your app.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
          <Link href="/signup">
            <button className="group ml-32 relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
              Sign Up
            </button>
            </Link>
            <Link href="/login">
            <button className="group relative ml-32 inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
              Login
            </button>
            </Link>
          </div>
        </div>
      </section>
      <div className=" bg-black py-4 text-gray-300 items-center  align-middle flex flex-row space-x-3">
        <p className="ml-28">Crafted with Care by Team Iterative Bytes</p>
        <Heart width={20} color="red" stroke="red"/>
      </div>
      {/* Landing */}
    </main>
  );
}
