import { getAllTalks } from 'lib/api'

import TalkList from 'components/TalkList'

const TalkPage = ({ talks }) => {
  return <TalkList talks={talks} />
}

export async function getStaticProps() {
  const talks = getAllTalks()

  return {
    props: {
      talks
    }
  }
}

export default TalkPage
