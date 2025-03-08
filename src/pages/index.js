import { getAllPosts } from 'lib/api'
import { generateSitemap } from 'lib/generateSitemap'
import { buildAlgoliaIndexes } from 'lib/buildAlgoliaIndexes'

import Home from 'components/Home'

const HomePage = ({ posts }) => {
  return <Home posts={posts} />
}

export async function getStaticProps() {
  const posts = getAllPosts()

  if (process.env.NODE_ENV !== 'development') {
    console.log(`
      Production build enabled...
      Generating sitemap and algolia indexes.
    `)
    await generateSitemap(posts)
    await buildAlgoliaIndexes(posts)
  }

  return {
    props: {
      posts
    }
  }
}

export default HomePage
