import type { Metadata } from 'next';
import { Suspense } from 'react';

import Explore from './explore';

export const metadata: Metadata = {
	title: 'explore',
};

export default function ExplorePage() {
	return (
		<Suspense>
			<Explore />
		</Suspense>
	);
}
