"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Nav = () => {
	const currentRoute = usePathname();
	const { lang, courseId } = useParams();
	// console.log(courseId);

	return (
		<>
			<ul className="border-b border-[#D2EFDC] pb-[5px] mb-[30px] space-x-[30px] lg:space-x-[50px] rtl:space-x-reverse">
				<li className="inline-block">
					<Link
						href={`/${lang}/instructor/my-courses`}
						className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
							currentRoute === `/${lang}/instructor/my-courses`
								? "text-[#717FF8]"
								: "text-black"
						}`}
					>
						My Courses
					</Link>
				</li>

				<li className="inline-block">
					<Link
						href={`/${lang}/instructor/course/new`}
						className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
							currentRoute === `/${lang}/instructor/course/new`
								? "text-[#717FF8]"
								: "text-black"
						}`}
					>
						Create Course
					</Link>
				</li>

				<li className="inline-block">
					<Link
						href={
							courseId
								? `/${lang}/instructor/course/${courseId}/video`
								: "#"
						}
						className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
							currentRoute ===
							`/${lang}/instructor/course/${courseId}/video`
								? "text-[#717FF8]"
								: "text-black"
						} ${
							courseId ? "cursor-pointer" : "cursor-not-allowed"
						}`}
					>
						Upload Video
					</Link>
				</li>
				<li className="inline-block">
					<Link
						href={
							courseId
								? `/${lang}/instructor/course/${courseId}/videos`
								: "#"
						}
						className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
							currentRoute ===
							`/${lang}/instructor/course/${courseId}/videos`
								? "text-[#717FF8]"
								: "text-black"
						} ${
							courseId ? "cursor-pointer" : "cursor-not-allowed"
						}`}
					>
						Videos
					</Link>
				</li>

				<li className="inline-block">
					<Link
						href={
							courseId
								? `/${lang}/instructor/course/${courseId}/asset`
								: "#"
						}
						className={`inline-block font-medium text-[18px] transition-all hover:text-[#717FF8] ${
							currentRoute ===
							`/${lang}/instructor/course/${courseId}/asset`
								? "text-[#717FF8]"
								: "text-black"
						} ${
							courseId ? "cursor-pointer" : "cursor-not-allowed"
						}`}
					>
						Upload Asset
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Nav;
