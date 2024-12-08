import { getFeed } from '@/lib/bluesky'
import { PostCard } from '@/components/post-card'

export const revalidate = 60 // Revalidate every minute

export default async function Page() {
  const posts = await getFeed('nysee.nyc')

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-2xl mx-auto space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-5xl text-namjunepaik-3 mb-2 font-[cholla-unicase]">@nysee.nyc on Bluesky</h1>
        <p className="text-xl font-light text-namjunepaik-5-light">Posts from ray@nysee.nyc</p>
      </header>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.cid} post={post} />
        ))}
      </div>
    </main>
  )
}

