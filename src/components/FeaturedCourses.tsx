'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string, 
}
const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className="py-12 bg-gray-900 px-4">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
        <p className="capitalized mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn with the best</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {
            featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-xl mb-2 text-black dark:text-neutral-200 font-bold">{course.title}</p>
                  <p className="text-neutral-600 dark:text-neutral-400">{course.description}</p>
                  <Link href={`/courses/${course.slug}`} className="mt-4 rounded-sm font-bold text-white">Learn More</Link>
                  </div>
                </BackgroundGradient>
                </div>
            ))
          }
        </div>


      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"} className=" bg-white text-neutral-700 transition duration-200 px-4 py-2 rounded border border-neutral-600">View All Courses</Link>
      </div>
    </div>
  )
}
export default FeaturedCourses