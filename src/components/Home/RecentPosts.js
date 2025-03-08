import Image from 'next/image'
import Link from 'next/link'

import * as S from './styled'

const RecentPosts = ({ posts }) => {
  return (
    <>
      <div className="container">
        <div className="row pb-2">
          <div className="col">
            <S.Title>Posts recentes</S.Title>
          </div>
        </div>
        <div className="row">
          {posts.map(post => (
            <div className="col-12 col-md-4" key={post.slug}>
              <Link href={post.slug} className="magic-link" legacyBehavior>
                <div className="card mb-3">
                  <Image 
                    src={post.frontmatter.image} 
                    className="card-img-top"
                    width={550} height={250}
                    alt={post.frontmatter.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{minHeight: '48px'}}>{post.frontmatter.title}</h5>
                    <p className="card-text" style={{minHeight: '65px'}}>{post.frontmatter.description}</p>
                    <p className="card-text"><small className="text-muted">{post.frontmatter.date} • {post.timeToRead}</small></p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col">
            <button 
              type="button" 
              className="btn btn-outline-primary"
              onClick={() => window.location = '/posts'}
            >
              Ver mais posts
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentPosts
