import { NextSeoProps } from 'next-seo'

const defaultSeo = () => {
  const title = 'Sar-El Tours'
  const titleLong = 'Sar-El Confrences & Tours'
  const description = 'Israeli Tourism Company'
  const image = {
    url: 'https://images.unsplash.com/photo-1522010675502-c7b3888985f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    alt: 'girl picturing NY',
    dimensions: {
      width: 687,
      height: 1031,
    },
  }
  const url = 'sarellanding.com'

  const seo: NextSeoProps = {
    titleTemplate: `%s | ${title}`,
    title,
    description,
    defaultTitle: titleLong,
    canonical: url,
    openGraph: {
      site_name: title,
      title,
      description,
      type: 'website',
      url,
      images: [
        {
          url: image.url,
          alt: image.alt || '',
          width: image.dimensions?.width,
          height: image.dimensions?.height,
        },
      ],
    },
    twitter: {
      site: title,
      cardType: 'photo',
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
      },
      { rel: 'icon', href: '/favicons/favicon.ico' },
      { rel: 'manifest', href: '/site.manifest' },
    ],
  }

  return seo
}

export default defaultSeo
