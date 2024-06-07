"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const AdminSidebar = () => {
	const { lang } = useParams();
	const pathname = usePathname();
	return (
		<div className="flex-shrink-0 w-full bg-white shadow-md">
			<div className="flex flex-col h-full">
				<div className="h-16 bg-[#717FF8] flex items-center justify-center">
					<span className="text-white font-semibold text-lg">
						Site Admin
					</span>
				</div>
				<div className="flex-1 overflow-y-auto">
					<ul className="py-4">
						<li className="pl-4 mb-1">
							<Link
								href={`/${lang}/admin/dashboard`}
								className={`block p-2 hover:bg-[#717FF8] hover:text-white ${
									pathname === `/${lang}/admin/dashboard` &&
									"bg-[#717FF8] text-white italic"
								}`}
							>
								<i className="ri-dashboard-fill"></i> Dashboard
							</Link>
						</li>
						<li className="pl-4 mb-1">
							<Link
								href={`/${lang}/admin/courses`}
								className={`block p-2 hover:bg-[#717FF8] hover:text-white ${
									pathname === `/${lang}/admin/courses` &&
									"bg-[#717FF8] text-white italic"
								}`}
							>
								<i className="ri-list-check-2"></i> Courses
							</Link>
						</li>
						<li className="pl-4 mb-1">
							<Link
								href={`/${lang}/admin/students`}
								className={`block p-2 hover:bg-[#717FF8] hover:text-white ${
									pathname === `/${lang}/admin/students` &&
									"bg-[#717FF8] text-white italic"
								}`}
							>
								<i className="ri-user-smile-fill"></i> Students
							</Link>
						</li>
						<li className="pl-4 mb-1">
							<Link
								href={`/${lang}/admin/partners`}
								className={`block p-2 hover:bg-[#717FF8] hover:text-white ${
									pathname === `/${lang}/admin/partners` &&
									"bg-[#717FF8] text-white italic"
								}`}
							>
								<i className="ri-image-fill"></i> Partners
							</Link>
						</li>
						<li className="pl-4 mb-1">
							<Link
								href={`/${lang}/admin/testimonials`}
								className={`block p-2 hover:bg-[#717FF8] hover:text-white ${
									pathname ===
										`/${lang}/admin/testimonials` &&
									"bg-[#717FF8] text-white italic"
								}`}
							>
								<i className="ri-feedback-fill"></i>{" "}
								Testimonials
							</Link>
						</li>
						<li className="pl-4 mb-1">
							<Link
								href={`/${lang}/admin/categories`}
								className={`block p-2 hover:bg-[#717FF8] hover:text-white ${
									pathname === `/${lang}/admin/categories` &&
									"bg-[#717FF8] text-white italic"
								}`}
							>
								<i className="ri-map-2-fill"></i> Categories
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AdminSidebar;
