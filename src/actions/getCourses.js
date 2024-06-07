import prisma from "@/libs/prismadb";

export async function getCourses(params) {
	const { q, sort, page = 1, pageSize = 9 } = params;

	const getOrderByClause = () => {
		switch (sort) {
			default:
				return { created_at: "desc" }; // Default sorting option
		}
	};

	const parsedPage = parseInt(page, 10);
	const parsedPageSize = parseInt(pageSize, 10);
	const skip = (parsedPage - 1) * parsedPageSize;

	try {
		let where = {};
		if (q) {
			where.OR = [
				{
					title: {
						contains: q,
					},
				},
				{
					overview: {
						contains: q,
					},
				},
			];
		}
		where.approved = true;

		const totalCourses = await prisma.course.count({
			where,
		});
		const totalPages = Math.ceil(totalCourses / parsedPageSize);

		const courses = await prisma.course.findMany({
			where,
			skip: skip,
			take: parsedPageSize,
			orderBy: getOrderByClause(),
			include: {
				user: true,
				reviews: true,
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		// console.log(courses);

		return { courses, totalPages, totalCourses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function getHomepageCourses() {
	try {
		const home_courses = await prisma.course.findMany({
			where: { approved: true },
			take: 5,
			orderBy: {
				id: "asc",
			},
			include: {
				user: true,
				reviews: true,
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		// console.log(courses);

		return { home_courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
