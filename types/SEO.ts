import type { TypeImage } from 'types/Items/Image'

export type TypeSEO = {
  title: string | null
  description?: string | null
  path?: string
  image?: TypeImage
  noindex?: boolean
}
