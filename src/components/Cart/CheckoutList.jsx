"use client";
import { useParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CheckoutList = ({
	id,
	image,
	title,
	user,
	slug,
	before_price,
	regular_price,
	lessons,
	duration,
	access_time,
	onRemove,
}) => {
	const { lang } = useParams();
	return (
		<tr className="border-b border-[#051F0D]">
			<td className="px-4 py-6 font-medium text-black">
				<div className="flex items-center space-x-[20px] rtl:space-x-reverse">
					<div className="bg-[#CBE2D0]">
						<Image
							src={image}
							alt="product"
							className="w-[100px]"
							width={100}
							height={74}
						/>
					</div>
					<Link
						href={`/${lang}/course/${slug}`}
						className="hover:text-[#717FF8]"
					>
						{title}
					</Link>
				</div>
			</td>

			<td className="px-4 py-4 font-medium text-black text-center line-through italic">
				${before_price}
			</td>

			<td className="px-4 py-4 font-medium text-black text-center">
				${regular_price}
			</td>

			<td className="px-4 py-4 font-medium text-black text-end">
				<button
					onClick={() => onRemove(id)}
					className="text-[25px] mr-[20px] hover:text-[#FF7A00]"
				>
					<i className="ri-close-line"></i>
				</button>
			</td>
		</tr>
	);
};

export default CheckoutList;
