import { Injectable } from '@nestjs/common';
import { iTrack } from './track.interface';
const base_url: string = 'http://localhost:3030/tracks';
@Injectable()
export class TrackService {
  async getTracks(): Promise<iTrack[]> {
    const res = await fetch(base_url);
    const tracks = await res.json();
    return tracks;
  }
}
