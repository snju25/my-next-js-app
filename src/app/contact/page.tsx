'use client'

import React from "react";
import { Meteors } from "@/components/ui/meteors";
const page = () => {
  return (
    <div className="bg-[#101523] min-h-screen pt-40 flex flex-col items-center gap-10">
        <p className="text-4xl md:text-7xl font-bold text-white">Contact Us</p>
        <p className="mx-auto max-w-[500px] text-center text-neutral-400">We are here to help with any questions about our course, programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>
        <form  className="flex flex-col gap-10  mt-4 w-[60%]">
          <input type="email" placeholder="Your email address"
          className="rounded-md p-4 bg-neutral-700 w-full"
          />
          <textarea placeholder="Your message here" className="rounded-md p-4 bg-neutral-700"/>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
       <Meteors number={20} />
    </div>
  )
}
export default page