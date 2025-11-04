import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ConflictException,
  UseGuards
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CurrentUser, HankoUser } from '../common/decorators/user.decorator';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) { }

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    // Ensure profile with email does not exist
    const profile = await this.profilesService.findOne({
      email: createProfileDto.email,
    });
    if (profile)
      throw new ConflictException('Profile with email already exist!');
    // Proceed to create new profile
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  findAll(@Query() filter: JSON) {
    return this.profilesService.findAll(filter);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  findCurrentUser(@CurrentUser() user: HankoUser) {
    return this.profilesService.findOne({ email: user.email.address });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne({ _id: id });
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profilesService.updateOne({ _id: id }, updateProfileDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.profilesService.deleteOne({ _id: id });
  }
}
