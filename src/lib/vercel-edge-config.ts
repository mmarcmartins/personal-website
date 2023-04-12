import { get } from '@vercel/edge-config'
import { z } from 'zod'

const notionPagesIdStore = z.object({  
  curriculum: z.string(),
  setup_dev: z.string(),
  setup_gaming: z.string(),
})

export async function getNotionPagesId() {
  const pagesId = await get('notion')
  
  return notionPagesIdStore.parse(pagesId);
}
