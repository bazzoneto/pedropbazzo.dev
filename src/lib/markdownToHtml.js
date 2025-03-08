import withShiki from '@stefanprobst/remark-shiki'
import fromMarkdown from 'remark-parse'
import * as shiki from 'shiki'
import { unified } from 'unified'
import toHast from 'remark-rehype'
import withHtmlInMarkdown from 'rehype-raw'
import toHtml from 'rehype-stringify'

async function markdownToHtml(markdown) {
  const highlighter = await shiki.getHighlighter({ theme: 'nord' })

  const processor = unified()
    .use(fromMarkdown)
    .use(withShiki, { highlighter })
    .use(toHast, { allowDangerousHtml: true })
    .use(withHtmlInMarkdown)
    .use(toHtml)

  const html = await processor.process(markdown)

  return String(html)
}

export default markdownToHtml;
