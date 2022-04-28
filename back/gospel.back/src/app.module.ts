import { Module } from '@nestjs/common';
import { RedisProviderModule } from './config/cache/redis/config.module';
import { MongoProviderModule } from './config/database/mongo/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './modules/common/common.module';
import { UserModule } from './modules/user/user.module';
import { ChurchModule } from './modules/church/church.module';

@Module({
  imports: [
    RedisProviderModule,
    MongoProviderModule,
    AuthModule,
    UserModule,
    CommonModule,
    ChurchModule
  ],
})
export class AppModule {}
