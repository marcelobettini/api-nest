import { Controller, Get } from '@nestjs/common';
import { TrackService } from './track.service';
import { iTrack } from './track.interface';

@Controller('tracks')
export class TrackController {
  public constructor(private readonly trackService: TrackService) {}
  @Get()
  getTracks(): Promise<iTrack[]> {
    return this.trackService.getTracks();
  }
}
