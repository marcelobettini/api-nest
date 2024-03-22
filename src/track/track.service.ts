import { Injectable } from '@nestjs/common';
import { iTrack } from './track.interface';
const base_url: string = 'http://localhost:3030/tracks/';
@Injectable()
export class TrackService {
  async getTracks(): Promise<iTrack[]> {
    const res = await fetch(base_url);
    const tracks = await res.json();
    return tracks;
  }
  async getTrackById(id: number): Promise<iTrack> {
    const res = await fetch(base_url + id);
    const track = await res.json();
    return track;
  }


  async addTrack(track: iTrack): Promise<iTrack> {
    const id = await this.createId();
    const newTrack = { ...track, id };
    const res = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrack),
    });
    const parsed = await res.json();
    return parsed;
  }

  private async createId(): Promise<number> {
    const tracks = await this.getTracks();
    const lastTrack = tracks[tracks.length - 1];
    const id = Number(lastTrack.id) + 1;
    return id;
  }


}
