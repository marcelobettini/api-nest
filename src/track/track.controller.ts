import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { iTrack } from './track.interface';

@Controller('tracks')
export class TrackController {
  public constructor(private readonly trackService: TrackService) {}
  @Get()
  getTracks(): Promise<iTrack[]> {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrackById(@Param('id') id: number): Promise<iTrack> {
    return this.trackService.getTrackById(id);
  }

  @Post()
  create(@Body() track: iTrack) {
    this.trackService.addTrack(track);
    return `data posted`;
  }
}
