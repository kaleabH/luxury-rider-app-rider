declare module '@env' {
    export const GOOGLE_MAP_API_KEY: string;
  }
  // images.d.ts
declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

// Add other formats as needed
