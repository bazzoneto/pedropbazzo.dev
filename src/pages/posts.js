import { getAllPosts } from 'lib/api'

import PostList from 'components/PostList'

const Post = ({ posts }) => {
  return <PostList posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      posts
    }
  }
}

export default Post
