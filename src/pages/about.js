import { NextSeo } from 'next-seo'

import {
  BLOG_HOST,
  BLOG_TITLE,
} from 'lib/constants'
import About from 'components/About'

const AboutPage = () => (
  <>
    <NextSeo
      title={`Sobre mim | ${BLOG_TITLE}`}
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: `https://${BLOG_HOST}`,
        site_name: BLOG_TITLE,
        title: BLOG_TITLE,
        images: [
          {
            url: `https://${BLOG_HOST}/assets/img/blog-cover.png`,
            width: 1200,
            height: 630,
            alt: `${BLOG_TITLE} Blog`,
          }
        ]
      }}
    />
    <About />
  </>
)

export default AboutPage
