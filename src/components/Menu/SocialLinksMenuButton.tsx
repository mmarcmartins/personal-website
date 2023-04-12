"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  FlaskConical,
  Github,
  Instagram,
  Linkedin,
  Rocket,
  Twitter,
  User,
  Youtube
} from 'lucide-react'
import { MenuButton } from './MenuButton'

const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/mmarcmartins',
    icon: Github
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/mmarcmartins',
    icon: Instagram
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/marcelo-de-souza-martins/',
    icon: Linkedin
  },
]

export function SocialLinksMenuButton() {
  return (
    <>
        {socialLinks.map((socialItem) => 
          <a 
            href={socialItem.url}
            target="_blank"
            rel="noreferrer"
            key={socialItem.url}
            className="w-full hover:bg-[#454066]">
              <MenuButton icon={socialItem.icon}/>
          </a>
        )}
    </>
  )
}