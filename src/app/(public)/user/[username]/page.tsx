import type { Metadata } from 'next';
import { Profile } from './Profile';
type Params = {username: string}
export async function generateMetadata({params}:{
	params: Promise<Params>
}): Promise<Metadata>{
return {
	title: '@'+ (await params).username
}
}



export default function ProfilePage() {
	return <div><Profile/> </div>;
}
