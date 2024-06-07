"use client";

import React from "react";

const SearchForm = () => {
	return (
		<>
			<div>
				<h3 className="text-black font-bold text-[22px] leading-none mb-[15px]">
					Search
				</h3>
				<form>
					<input
						type="text"
						placeholder="Search your course"
						className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
					/>
				</form>
			</div>
		</>
	);
};

export default SearchForm;
