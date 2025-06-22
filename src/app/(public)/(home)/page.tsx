import { Tweet } from './Tweet';
import { tweets } from '@/shared/data/tweet.data';

export default function Home() {
	return (
		<div>
			<h1 className='text-3xl font-bold mb-6'>Home Page</h1>
			<div className='space-y-3'>
				{tweets.map(tweet => (
					<Tweet
						key={`${Math.random() * 8}-${tweet.author}`}
						author={tweet.author}
						text={tweet.text}
					/>
				))}
			</div>
		</div>
	);
}
