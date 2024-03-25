import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
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
  getTrackById(@Param('id') id: string): Promise<iTrack> {
    return this.trackService.getTrackById(id);
  }

  @Post()
  create(@Body() track: iTrack) {
    return this.trackService.addTrack(track);
  }

  @Delete(':id')
  deleteTrackById(@Param('id') id: string) {
    return this.trackService.deleteTrackById(id);
  }

  @Put(':id')
  updateTrackById(
    @Param('id') id: string,
    @Body() body: iTrack,
  ): Promise<void> {
    return this.trackService.updateTrackById(id, body);
  }
}
