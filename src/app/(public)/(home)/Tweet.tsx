import Image from 'next/image';
import Link from 'next/link';

import { PAGES } from '@/config/pages.config';

import type { ITweet } from '@/shared/types/tweet.interface';

export const Tweet = ({ author, text }: ITweet) => {
	return (
		<div className='border border-white/10 rounded-xl p-4 bg-black text-white shadow-md'>
			<div className='flex items-center gap-3 mb-2 '>
				<Image src='/x-logo.svg' alt='logo' width={30} height={30} />
			</div>
			<Link href={PAGES.PROFILE(author)} className='font-semibold'>
				@{author}
			</Link>
			<p className='text-white/90'>{text}</p>
		</div>
	);
};
