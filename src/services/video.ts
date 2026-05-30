export type TimelineClip = { id: string; uri: string; start: number; end: number; layer: number };
export type ExportFormat = 'story' | 'reel' | 'carousel';

export function splitClip(clip: TimelineClip, at: number): TimelineClip[] {
  if (at <= clip.start || at >= clip.end) return [clip];
  return [{ ...clip, id: `${clip.id}_a`, end: at }, { ...clip, id: `${clip.id}_b`, start: at }];
}

export function buildFfmpegCommand(clips: TimelineClip[], format: ExportFormat) {
  const size = format === 'carousel' ? '1080x1350' : '1080x1920';
  const inputs = clips.map((clip) => `-i "${clip.uri}"`).join(' ');
  return `ffmpeg ${inputs} -filter_complex "scale=${size},fps=30,format=yuv420p" -c:v libx264 -preset veryfast glam-export-${format}.mp4`;
}
