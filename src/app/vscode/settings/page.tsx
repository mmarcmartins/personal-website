import { GistContent } from '@/components/GistContent'

export const metadata = {
  title: 'VSCode Settings',
}

export default async function Settings() {
  {/* @ts-expect-error Server Component */}
  return <GistContent gistUrl="https://gist.githubusercontent.com/mmarcmartins/a4d1adfc36c2f111520aa5b8739f2b3f/raw/729e1501bd8aa595c6133524dbfa9da698aa41e5/settings.json" />
}