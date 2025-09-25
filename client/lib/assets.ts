/**
 * Get the correct asset path for both development and production environments
 * In development: uses root path "/"
 * In production (GitHub Pages): uses "/vickash/" base path
 */
export function getAssetPath(assetPath: string): string {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // In production, we need to include the base path
  if (import.meta.env.PROD) {
    return `/vickash/${cleanPath}`;
  }
  
  // In development, use root path
  return `/${cleanPath}`;
}

/**
 * Common portfolio image paths
 */
export const portfolioImages = {
  tharunam: getAssetPath('tharunam.png'),
  leadstitch: getAssetPath('leadstitch.png'),
  timesmart: getAssetPath('timesmart.png'),
  nandhuvino: getAssetPath('nandhuvino.png'),
  solarprospects: getAssetPath('solarprospects.png'),
  sai_20krisshna: getAssetPath('sai_20krisshna.png'),
  placeholder: getAssetPath('placeholder.svg'),
} as const;
