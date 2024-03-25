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
  async getTrackById(id: string): Promise<iTrack> {
    const res = await fetch(base_url + id);
    const track = await res.json();
    return track;
  }

  async addTrack(track: iTrack): Promise<iTrack> {
    const newTrack = { ...track };
    const res = await fetch(base_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrack),
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }

  async deleteTrackById(id: string): Promise<any> {
    const res = await fetch(base_url + id, {
      method: 'DELETE',
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }

  async updateTrackById(id: string, body: iTrack): Promise<void> {
    const isTrack = await this.getTrackById(id);
    if (!Object.keys(isTrack).length) return; //early return
    const updatedTrack = { ...body, id };
    const res = await fetch(base_url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTrack),
    });
    const parsedResponse = await res.json();
    return parsedResponse;
  }
}
