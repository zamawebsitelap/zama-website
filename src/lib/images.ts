// ===================================================================
//  IMAGE RESOLVER
//  Content files keep simple image paths like "/images/photo.jpg",
//  but the files themselves live in src/assets/images/ so Astro can
//  resize them and convert them to WebP at build time. This module
//  maps those paths to the processed assets.
//
//  To add a photo: drop it in src/assets/images/ and reference it as
//  "/images/<filename>" in the content files — same as before.
// ===================================================================
import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,svg}',
  { eager: true }
);

const assets: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  assets[path.replace('../assets/images', '/images')] = mod.default;
}

/**
 * Returns the pipeline-processed asset for a "/images/..." path, or
 * undefined when the file lives in /public instead (served as-is).
 */
export function resolveAsset(src: string): ImageMetadata | undefined {
  return assets[src];
}
