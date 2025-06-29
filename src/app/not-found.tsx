import { MoveLeft } from "lucide-react";

function NotFoundPage() {
	return (
		<div className='h-screen text-5xl flex flex-col pt-40 items-center gap-10 bg-black text-white'>
            <h1>Not Found</h1>
			<p className="font-bold text-9xl">404</p>
			<p>This is page doesn't exist or maybe it removed.</p>
			<MoveLeft/>
		</div>
	);
}
export default NotFoundPage;
