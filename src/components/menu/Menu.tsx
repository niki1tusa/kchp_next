'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menu } from '../../shared/data/menu.data';
import type { IMenuItem } from '../../shared/types/menu.type';
import {match} from 'path-to-regexp'
export function Menu() {
	const pathname = usePathname();
	return (
		<nav className='flex gap-6 text-white/80'>
			{menu.map((item: IMenuItem) => (
				<Link
					key={item.id}
					href={item.link}
					className={clsx(!!match(item.link)(pathname) ? 'text-white border-b' : '')}
				>
					{item.title}
				</Link>
			))}
		</nav>
	);
}
