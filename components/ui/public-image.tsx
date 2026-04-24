"use client"

import NextImage, { type ImageProps } from "next/image"

/** Next.js <Image> for assets in `/public` (served as local static files). */
export function PublicImage(props: ImageProps) {
  return <NextImage {...props} />
}
