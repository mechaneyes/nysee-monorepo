export interface ImageNode {
  node: {
    sourceUrl: string;
  };
}

export interface PostNode {
  node: {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: ImageNode;
    events: {
      eventDate: string;
    };
  };
}
