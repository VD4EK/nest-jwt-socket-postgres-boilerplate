import {Module} from "@nestjs/common"
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module'
import * as process from "node:process";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/users.model";

if(!process.env.NODE_ENV){
    process.env.NODE_ENV = 'production'
}

@Module( {
  controllers: [],
  providers: [],
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `.env.${process.env.NODE_ENV}.local`,
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User],
          autoLoadModels: true
      }),
      /*TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          entities: [User],
          autoLoadEntities: true,
          synchronize: true,
      }),*/
      UsersModule
  ]
})
export class AppModule {}