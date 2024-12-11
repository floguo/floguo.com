export interface MediaItem {
    type: 'image' | 'video'
    src: string
  }
  
  export interface Project {
    id: number
    title: string
    tags: string[]
    media: MediaItem[]
    //backgroundColor: string
  }