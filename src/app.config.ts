// App Config
// https://nuxt.com/docs/guide/directory-structure/app-config

import { markRaw } from 'vue'
import {
  CheckBadgeIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  UsersIcon,
} from '@heroicons/vue/20/solid'

export default defineAppConfig({
  sitename: 'RUSHER MC',
  address: 'rushermc.dapit.net:19100',
  tagline: 'Your potential will explode here',
  navigation: [
    {
      label: 'for the first timers',
      to: '/guide',
      icon: markRaw(RocketLaunchIcon),
    },
    {
      label: 'service specifications',
      to: '/docs',
      children: [
        {
          label: 'Service Specifications',
          description: 'View the Minecraft server specifications',
          to: '/docs/spec',
        },
        {
          label: 'Rules',
          description: 'View the rules for using the service',
          to: '/docs/rules',
        },
        {
          label: 'Policies',
          description: 'View the policies of the management team',
          to: '/docs/policies',
        },
      ],
      icon: markRaw(DocumentTextIcon),
    },
    {
      label: 'Community',
      to: '/community',
      children: [
        {
          label: 'Blog',
          description: 'View community activities',
          to: '/community/blog',
        },
        {
          label: 'Announcements',
          description: 'View announcements from the management team',
          to: '/community/news',
        },
        {
          label: 'Wiki',
          description: 'View the awesome encyclopedia',
          href: 'https://wiki.jaoafa.com/',
        },
      ],
      icon: markRaw(UsersIcon),
    },
    {
      label: 'Support',
      to: '/support',
      children: [
        {
          label: 'Contact',
          description: 'Check contact options when you need help',
          to: '/support/inquiry',
        },
        {
          label: 'FAQ',
          description: 'View frequently asked questions',
          to: '/support/faq',
        },
        {
          label: 'Team Info',
          description: 'View information about the management team',
          to: '/support/profiles',
        },
      ],
      icon: markRaw(CheckBadgeIcon),
    },
  ],
  social: {
    discord: {
      url: 'https://discord.gg/YVUJGZAJDE',
    },
    github: {
      url: 'https://github.com/jaoafa',
    },
    twitter: {
      id: '@jaoafa',
      url: 'https://twitter.com/jaoafa',
    },
    youtube: {
      url: '',
    },
  },
  gtmId: 'GTM-58VVRGD',
})
