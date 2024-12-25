import type { NextApiRequest, NextApiResponse } from "next";
import { getPreviewPost } from "../../lib/api";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { secret, id, slug } = req.query;

  console.log("Preview request:", { secret, id, slug });

  // Check the secret and next parameters
  if (
    !process.env.WORDPRESS_PREVIEW_SECRET ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET ||
    (!id && !slug)
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // Fetch WordPress to check if the provided `id` or `slug` exists
    const post = await getPreviewPost(id || slug, id ? "DATABASE_ID" : "SLUG");
    console.log("Preview post data:", post);

    // If the post doesn't exist prevent preview mode from being enabled
    if (!post) {
      return res.status(401).json({ message: "Post not found" });
    }

    // Enable Preview Mode by setting the cookies
    const previewData = {
      post: {
        id: post.databaseId,
        slug: post.slug,
        status: post.status,
      },
    };
    console.log("Setting preview data:", previewData);

    res.setPreviewData(previewData);

    // Redirect to the path from the fetched post
    const redirectPath = `/lowdown/posts/${post.databaseId}`;
    console.log("Redirecting to:", redirectPath);

    res.writeHead(307, { Location: redirectPath });
    res.end();
  } catch (error) {
    console.error("Preview error:", error);
    return res.status(500).json({ message: error.message });
  }
}
