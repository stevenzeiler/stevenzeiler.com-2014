"use client";

import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";

const LanguageSwitcher = () => {
	const { lang } = useParams();
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("q");

	function switchLocale(locale) {
		const currentLocale = pathname.split("/")[1]; // Extract current language code
		const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
		const queryString = query
			? `?${new URLSearchParams({ q: query }).toString()}`
			: ""; // Check if query exists
		router.push(`${newPath}${queryString}`, undefined, { shallow: true });
	}
	return (
		<div className="fixed z-10 lg:top-[20%] bottom-[10px] lg:bottom-auto right-[10px] space-y-1 rtl:right-auto rtl:left-[10px]">
			<button
				className={`block px-4 py-2 text-sm font-medium   border border-gray-200  hover:bg-[#717FF8] hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
					lang === "en"
						? "bg-[#717FF8] text-white"
						: "bg-white text-gray-900"
				}`}
				onClick={() => switchLocale("en")}
			>
				EN
			</button>
			<button
				className={`block px-4 py-2 text-sm font-medium border border-gray-200  hover:bg-[#717FF8] hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
					lang === "ar"
						? "bg-[#717FF8] text-white"
						: "bg-white text-gray-900"
				}`}
				onClick={() => switchLocale("ar")}
			>
				AR
			</button>
			<button
				className={`block px-4 py-2 text-sm font-medium   border border-gray-200  hover:bg-[#717FF8] hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${
					lang === "de"
						? "bg-[#717FF8] text-white"
						: "bg-white text-gray-900"
				}`}
				onClick={() => switchLocale("de")}
			>
				DE
			</button>
		</div>
	);
};

export default LanguageSwitcher;
