import React, { useEffect, useRef } from 'react'

const Comments = ({ title }) => {
  const commentBox = useRef(null)

  useEffect(() => {
    let scriptEl = document.createElement('script')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('repo', 'pedropbazzo/')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('label', 'comments')
    commentBox.current.replaceChildren(scriptEl)
  }, [title])

  return <div ref={commentBox} />
}

export default Comments
