import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";



async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  console.log(`NODE_ENV = ${process.env.NODE_ENV}`);



  const config = new DocumentBuilder()
      .setTitle('Мой первый бойлерплат')
      .setDescription('nest-jwt-socket-sequelize-boilerplate')
      .setVersion('0.0.001')
      .addTag('nest jwt socket sequelize')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);


  await  app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start();