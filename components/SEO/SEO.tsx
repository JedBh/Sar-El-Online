import { NextSeo } from 'next-seo'
import type { TypeSEO } from 'types/SEO'

const SEO: React.FC<TypeSEO> = ({
  title,
  description,
  path,
  image,
  noindex = false,
}) => {
  // const url = `${layout.seoUrl}${path}`

  const url = `https://sarelonline.com${path}`

  return (
    <NextSeo
      title={title || ''}
      description={description || ''}
      canonical={url || ''}
      noindex={noindex}
      openGraph={{
        site_name: title || '',
        title: title || '',
        description: description || '',
        url: url || '',
        images: [
          {
            url: image?.url || '',
            alt: image?.alt || '',
            width: image?.dimensions?.width,
            height: image?.dimensions?.height,
          },
        ],
      }}
      twitter={{ site: title || '' }}
    />
  )
}

export default SEO
