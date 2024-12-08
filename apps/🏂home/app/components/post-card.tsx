import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/bluesky'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const hasImages = post.record.embed?.images && post.record.embed.images.length > 0
  const createdAt = new Date(post.record.createdAt)

  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex items-center gap-3">
        {post.author.avatar && (
          <Image
            src={post.author.avatar}
            alt={post.author.handle}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <div className="font-semibold">{post.author.displayName || post.author.handle}</div>
          <div className="text-sm text-muted-foreground">@{post.author.handle}</div>
        </div>
        <div className="ml-auto text-sm text-muted-foreground">
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </div>
      </div>
      <p className="text-sm">{post.record.text}</p>
      {hasImages && (
        <div className="grid gap-4">
          {post.record.embed.images.map((img, i) => (
            <div key={i} className="relative w-full aspect-auto">
              <Image
                src={`https://cdn.bsky.app/img/feed_thumbnail/plain/${post.author.did}/${img.image.ref.$link}@jpeg`}
                alt={img.alt || ''}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 42rem"
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <Link
          href={`https://bsky.app/profile/${post.author.handle}/post/${post.uri.split('/').pop()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          View on Bluesky
        </Link>
      </div>
    </div>
  )
}

