
import { tweets } from "@/shared/data/tweet.data";
import { Tweet } from "./Tweet";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <div className="space-y-3"> {tweets.map(tweet=>(
          <Tweet key={`${Math.random()*8}-${tweet.author}`} author={tweet.author} text={tweet.text} />
        ))}
        </div> 
        
      </div>
    </div>
  );
}
