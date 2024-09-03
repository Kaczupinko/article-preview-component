import React, { useState } from 'react';

// Importowanie ikon
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
		<div className="max-w-[327px] bg-[#FFFFFF] rounded-xl shadow-md overflow-hidden relative">
		<img src={image} alt="Article" className="w-full h-[210px] object-cover" />
		<div className="px-8 pt-8 pb-5">
			<h2 className="text-[#48556A] font-manrope text-[16px] leading-[24px] tracking-[0.2px] font-semibold mb-3">{title}</h2>
			<p className="text-[#6E8098] font-manrope text-[13px] leading-[20px] tracking-[0.122px] font-medium mb-5">{description}</p>
			<div className="flex items-center">
			<img src={authorImage} alt={author} className="w-10 h-10 rounded-full mr-4" />
			<div className="">
				<p className="text-[#48556A] font-manrope text-[13px] leading-[20px] tracking-[0.122px] font-bold ">{author}</p>
				<p className="text-[#9DAEC2] font-manrope text-[13px] leading-[20px] tracking-[0.122px] font-medium">{date}</p>
			</div>
			<button
				onClick={toggleShare}
				className={`absolute right-8 text-white p-2 rounded-full ${isShareVisible ? 'bg-[#ECF2F8]' : 'bg-[#ECF2F8'} hover:bg-gray-900 transition`} 
			>
				<img src={shareIcon} alt="Share" className="h-4 w-4" />
			</button>
			</div>
		</div>
		{isShareVisible && (
			<div className="absolute bottom-0 left-0 right-0 bg-[#48556A] p-4 rounded-b-xl flex justify-around items-center text-white">
			<span className="uppercase text-[#9DAEC2] font-manrope text-[13px] leading-[20px] tracking-[5px] font-normal">Share</span>
			<div className="flex space-x-4">
				<img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
				<img src={twitterIcon} alt="Twitter" className="h-5 w-5" />
				<img src={pinterestIcon} alt="Pinterest" className="h-5 w-5" />
			</div>
			<button
				onClick={toggleShare}
				className="bg-gray-500 p-2 rounded-full hover:bg-gray-900 transition"
			>
				<img src={shareIcon} alt="Share" className="h-4 w-4" />
			</button>
			</div>
		)}
		</div>
	);
};

export default ArticlePreview;
