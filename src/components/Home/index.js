import Image from 'next/image'

import Newsletter from './Newsletter'
import RecentPosts from './RecentPosts'
import SelfPresentation from './SelfPresentation'

const Home = ({ posts }) => {
  return (
    <>
      <div className="pt-2 pb-5">
        <Newsletter />
      </div>
      
      <svg style={{width: '100%', height: '100%'}} height="100" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L309.757 43.199C313.573 43.7313 317.438 43.8293 321.276 43.4911L622 17L958.738 43.8199C960.244 43.9398 961.757 43.9458 963.263 43.8379L1338 17L1650.5 44L1920 0V100H0V0Z" fill="#F0F0F3"/>
      </svg>
      <div style={{backgroundColor: 'var(--mediumBackground)'}}>
        <SelfPresentation />
      </div>

      <div className="py-4">
        <RecentPosts posts={posts} />
      </div>
    </>
  )
}

export default Home
