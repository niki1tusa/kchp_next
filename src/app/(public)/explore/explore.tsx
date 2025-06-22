'use client';

import { MoveLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { PAGES } from '@/config/pages.config';

export default function Explore() {
	const router = useRouter();
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
	return (
		<div className='flex flex-col  justify-center gap-10'>
			<button className=' w-1/5 border flex   justify-center'>
				<MoveLeft onClick={() => router.push(PAGES.HOME)} />
			</button>
			<h1>Explore  {tag && `by #${tag}`}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni?</p>

		</div>
	);
}
