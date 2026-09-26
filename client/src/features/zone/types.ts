export interface ZoneComment {
  name: string;
  when: string;
  text: string;
}

export interface ZoneImage {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  blurDataURL?: string;
}

export interface ZonePost {
  id: string;
  image: ZoneImage;
  place: string;
  likes: number;
  likedBy?: string[];
  comments: ZoneComment[];
  text: string;
  remote?: boolean;
}
