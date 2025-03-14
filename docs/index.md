---
layout: home
title: Home

hero: 
  name: SPOONI
  text: Development
  image:
    src: /logo.svg
    alt: SPOONI Development logo
  tagline: Scripts & Mappings
  actions:
    - theme: brand
      text: Tebex Store
      link: https://spooni-mapping.tebex.io/
    - theme: alt
      text: Props
      link: https://spooni.de/props/

features:
  - icon: 🗿
    title: Mappings
    details: How long have you dreamed of living in your own home or simply benefiting from the city's most important properties? With great attention to detail and authenticity, we offer excellent mappings. Our goal is to give you a new perspective on your favorite places and integrate them seamlessly into your roleplay.
  - icon: 💡
    title: Custom Request
    details: Do you have a personal request? We also offer private commissions. Whether it's a script, mapping or placeable props - anything is possible. With specific ideas from you and our understanding of authenticity and good role-playing, we can help you fulfill your wish and put a smile on your face.
  - icon: 💻
    title: Server Service 
    details: Do you want your own RedM server but need help with setup or troubleshooting? No problem! Buy your server through our partner and get a guide on contacting us. Our expert developers will support you with setup, troubleshooting, and tailored advice for your project.
    link: https://iceline-hosting.com/spooni
    linkText: Get your server.
---

<div class="center-arrow">
  <a href="#sponsors" style="text-decoration: none;">
    <img src="/arrow.svg" alt="Scroll Down" style="width: 75px; height: 75px;" />
  </a>
</div>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const sponsors = [
  {
    avatar: 'https://cdn.discordapp.com/icons/1317242352682663937/e821fa7ea65a8a9968d92f761a54142d.webp?size=128',
    name: 'FAT LADY',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/fatlady' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1070353246121623594/81697cd7f6bb599fc56897df53134696.webp?size=128',
    name: 'The Last Days',
    title: 'RDR2 Survial Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/the-last-days-1070353246121623594' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1153427642297614398/a_deec25fe81c88ac8d5cd8e58539da396.webp?size=128',
    name: 'American Dreams',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/eck4zVn3Zm' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1262666167089369119/183cf88a13fc4739fa4097850ae88cc4.webp?size=128',
    name: 'Babylon 1918',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/UKDZ5euhd5' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1143862512937336933/99dec736bccbd1b0902d8f613eec5075.webp?size=128',
    name: 'Golden Plains',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/MFnB9BDcYP' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1251628443104448714/ec83d24a2a9c877580bb8aba3aa68a46.webp?size=128',
    name: 'WILD CREEK RP',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/nyvjmTruJS' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/1225905970035822734/3ac67d6e5c9511f452016648ee37f136.webp?size=128',
    name: 'Bluestone Falls',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/6j83qWXEXm' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/939204524466393149/dafafab983a9061e4bc87a1dd263e188.webp?size=128',
    name: 'Misty Mountain',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/8Azu5NGUGn' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/613827325225861130/82329991f11e62a7a860ac2ee31525aa.webp?size=128',
    name: 'La Hermandad Roleplay',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/la-hermandad-roleplay-613827325225861130' },
    ]
  },
  {
      avatar: 'https://cdn.discordapp.com/icons/1217371173319348266/84f97ee9178d0d52d354d9adb670be1f.webp?size=128',
    name: 'Spirit Frontier 1899',
    title: 'RDR2 Roleplay',
    links: [
        { icon: 'discord', link: 'https://discord.gg/4mfa4JdKcA' },
    ]
  },
]
</script>

<VPTeamPage id="sponsors">
  <VPTeamPageTitle>
    <template #title>Sponsored projects</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="sponsors" />
</VPTeamPage>