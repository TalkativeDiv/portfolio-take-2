import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { Title } from './';
// import framer motion
import { motion } from 'framer-motion';
const GET_POSTS = gql`
  query GetPosts {
    user(username: "talkativediv") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
          coverImage
        }
      }
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {
            x: 0,
            y: 50,
            opacity: 0,
          },
          show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              tween: true,
              delay: 0.1,
              duration: 0.5,
            },
          },
        }}
        className="flex flex-col md:flex-row justify-center mb-20"
      >
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {data.user.publication.posts.map((post, key) => (
              <div
                key={key}
                className="border-2 border-slate-900 dark:border-slate-300 rounded-md overflow-hidden w-full"
                onClick={() =>
                  window.open('https://abhirath.codes/' + post.slug)
                }
              >
                <p>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full cursor-pointer"
                  />
                </p>
                <div className="w-full p-4">
                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                    {post.title}
                  </h3>
                  <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {post.brief}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
