import React, { useState } from 'react';

// Importing icons
import facebookIcon from './../images/icon-facebook.svg';
import twitterIcon from './../images/icon-twitter.svg';
import pinterestIcon from './../images/icon-pinterest.svg';
import shareIcon from './../images/icon-share.svg';

interface ArticlePreviewProps {
	image: string;
	title: string;
	description: string;
	author: string;
	date: string;
	authorImage: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
	image,
	title,
	description,
	author,
	date,
	authorImage,
}) => {
	const [isShareVisible, setIsShareVisible] = useState(false);

	const toggleShare = () => {
		setIsShareVisible(!isShareVisible);
	};

	return (
		<div className="max-w-[327px] lg:max-w-[730px] bg-[#FFFFFF] rounded-xl shadow-md  relative lg:flex lg:h-[280px]">
			<img
				src={image}
				alt="Article"
				className="w-full h-[200px] object-cover lg:object-left lg:w-[300px] lg:h-full rounded-t-lg lg:rounded-l-lg"
			/>
			<div className="px-8 pt-8 pb-5 lg:px-0 lg:pl-10 lg:pr-10">
				<h2 className="text-[#48556A] font-manrope text-[16px] lg:text-[20px] leading-6 lg:leading-7 tracking-[0.2px] lg:tracking-[0.25px] font-semibold lg:font-bold mb-3">
					{title}
				</h2>
				<p className="text-[#6E8098] font-manrope text-[13px] leading-[20px] tracking-[0.25px] font-medium mb-7">
					{description}
				</p>
				<div className="flex items-center">
					<img
						src={authorImage}
						alt={author}
						className="w-10 h-10 rounded-full mr-4"
					/>
					<div className="">
						<p className="text-[#48556A] font-manrope text-[13px] leading-[20px] tracking-[0.122px] font-bold">
							{author}
						</p>
						<p className="text-[#9DAEC2] font-manrope text-[13px] leading-[20px] tracking-[0.122px] font-medium">
							{date}
						</p>
					</div>
					{/* Share Button */}
					<button
						onClick={toggleShare}
						className={`absolute right-8 lg:right-10 lg:bottom-8 text-white p-2 rounded-full bg-[#ECF2F8] hover:bg-gray-900 transition`}
					>
						<img src={shareIcon} alt="Share" className="h-4 w-4" />
					</button>
				</div>
			</div>

			{/* Share menu for desktop with active state */}
			{isShareVisible && (
				<div className="hidden lg:flex lg:items-center lg:space-x-4 lg:bg-[#48556A] lg:text-white lg:rounded-lg lg:py-2 lg:px-4 lg:absolute lg:-right-1 lg:bottom-[90px] lg:shadow-lg lg:w-[248px] lg:h-[67px] lg:flex lg:justify-around lg:drop-shadow-[0px_10px_10px_rgba(0,0,0,0.2)]">
					{/* Share Text */}
					<span className="uppercase text-[#9DAEC2] font-manrope text-[13px] leading-[20px] tracking-[5px] font-normal">
						Share
					</span>
					{/* Social Icons */}
					<div className="flex space-x-4">
						<img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
						<img src={twitterIcon} alt="Twitter" className="h-5 w-5" />
						<img src={pinterestIcon} alt="Pinterest" className="h-5 w-5" />
					</div>
					{/* Tooltip-like arrow below the share menu */}
					<div className="absolute bg-[#48556A] w-[15px] h-[17px] transform rotate-45 lg:right-[105px] lg:bottom-[-8px]"></div>
				</div>
			)}
		</div>
	);
};

export default ArticlePreview;