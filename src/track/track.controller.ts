/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  HttpStatus,
  Res,
  HttpCode,
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
  async getTrackById(@Res() response, @Param('id') id: string): Promise<any> {
    try {
      const responseFromService = await this.trackService.getTrackById(id);
      if (Object.keys(responseFromService).length) {
        return response.status(HttpStatus.OK).json(responseFromService);
      } else {
        return response
          .status(HttpStatus.NOT_FOUND)
          .json({ error: 'track no existe' });
      }
    } catch (error) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ error: 'el id de ese track no existe' });
    }
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
  @HttpCode(204)
  updateTrackById(
    @Param('id') id: string,
    @Body() body: iTrack,
  ): Promise<void> {
    return this.trackService.updateTrackById(id, body);
  }
}
