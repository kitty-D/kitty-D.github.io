
export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  audio: string;
}

/**
 * 音乐播放列表
 * - 音频：public/music/audio/
 * - 封面：public/music/covers/
 * - 也可运行 node scripts/add-song.cjs 添加
 */
export const MUSIC_PLAYLIST: Song[] = [
  {
    id: 'whispered-corners',
    title: 'Whispered Corners',
    artist: '罗诗粟',
    cover: '/music/covers/music1.jpg',
    audio: '/music/audio/Whispered Corners-罗诗粟.mp3',
  },
];
