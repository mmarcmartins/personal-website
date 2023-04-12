import { CodePreview } from '@/components/CodePreview'
import { getCodeBlockFromNotion } from '@/lib/notion-client'
import { getNotionPagesId } from '@/lib/vercel-edge-config'
import shiki from 'shiki'


export const revalidate = 1800 // revalidate every 30 minutes
export const metadata = {
  title: 'Curriculum',
}

export default async function Curriculum() {
  const { curriculum } = await getNotionPagesId()
  const { content } = await getCodeBlockFromNotion(curriculum)

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(content, { lang: 'markdown' })

  return <CodePreview code={code}>
    <a 
    href="/MARCELOMARTINS.pdf"
    className="
      absolute 
      flex 
      items-center 
      right-0 
      mx-8 
      gap-x-2 
      text-sm 
      font-medium 
      z-30 
      bg-[#2a273f] 
      px-3 
      py-2 
      rounded-md 
      text-[#E0DEF2] 
      ring-2 
      ring-[#2b283b]"      
    download
    >Download PDF</a>
  </CodePreview>
}
