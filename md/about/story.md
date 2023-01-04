---
layout: docs
title: Our Story
lang: en-US
---

# {{ $frontmatter.title }}


We started in 2019 as Software House with an idea to build developer tools.
During the Years we have created modularized tools for frontend and backend development.
Today we want to bring the software development to the next level.

Our goal is building software in minutes with humanless software development systems.





<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/5669657?s=96&v=4',
    name: 'Tom Sapletta',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tom-sapletta-com' }
    ]
  },
 {
    avatar: 'https://logo.dialogware.com/dialogware-logo-pivot.png',
    name: 'Join us!',
    title: 'Software Developer',
    links: [
       { icon: 'linkedin', link: 'https://www.linkedin.com/showcase/dialogware/' }
    ]
  }
]

const partners = [
  {
    avatar: 'https://img.dialogware.com/ionos.png',
    name: 'Ionos',
    title: 'Service provider',
    links: [
      { icon: 'website', link: 'https://www.ionos.de' }
    ]
  },
 {
    avatar: 'https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png',
    name: 'softreck.com',
    title: 'DevOps',
    links: [
       { icon: 'website', link: 'https://softreck.pl' }
    ]
  }
]
</script>


## Our Team

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title></template>
    <template #lead>The development of DIALOGWARE is guided by an international
      team, some of whom have chosen to be featured below.</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Organization they support our project </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>


![DIALOGWARE](https://logo.dialogware.com/3/cover.png)
