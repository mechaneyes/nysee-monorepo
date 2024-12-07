import { getFeed } from '@/lib/bluesky'
import { PostCard } from '@/components/post-card'

export const revalidate = 60 // Revalidate every minute

export default async function Page() {
  const posts = await getFeed('nysee.nyc')

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-2xl mx-auto space-y-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Bluesky Feed</h1>
        <p className="text-muted-foreground">Posts from @nysee.nyc</p>
      </header>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.cid} post={post} />
        ))}
      </div>
    </main>
  )
}

