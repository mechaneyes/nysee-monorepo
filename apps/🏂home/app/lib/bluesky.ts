export interface Post {
  uri: string
  cid: string
  author: {
    did: string
    handle: string
    displayName?: string
    avatar?: string
  }
  record: {
    text: string
    createdAt: string
    embed?: {
      $type: string
      images?: Array<{
        alt?: string
        image: {
          $type: string
          ref: { $link: string }
        }
      }>
    }
  }
}

export async function getFeed(username: string): Promise<Post[]> {
  try {
    const response = await fetch(`https://api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${username}`)
    if (!response.ok) throw new Error('Failed to fetch feed')
    
    const data = await response.json()
    return data.feed.map((item: any) => ({
      uri: item.post.uri,
      cid: item.post.cid,
      author: item.post.author,
      record: {
        text: item.post.record.text,
        createdAt: item.post.record.createdAt,
        embed: item.post.record.embed
      }
    }))
  } catch (error) {
    console.error('Error fetching Bluesky feed:', error)
    return []
  }
}

