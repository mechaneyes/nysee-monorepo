import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import HeroSplit from "../../components/hero-split";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPostsForHome, getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

export default function Post({ post, posts, preview, allPosts }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${post.title} | NYSee Lowdown`}</title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              {isDesktopOrLaptop ? (
                <HeroSplit
                  title={post.title}
                  coverImage={post.featuredImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={undefined}
                />
              ) : (
                <HeroPost
                  title={post.title}
                  coverImage={post.featuredImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={undefined}
                />
              )}
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const originalSlug = params?.slug?.toString().replace(/-revision-v1$/, '');
  
  const data = await getPostAndMorePosts(originalSlug, preview, previewData);
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: {
      allPosts,
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
