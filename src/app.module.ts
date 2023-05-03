import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {Genre} from "./model/genre.model";
import {Film} from "./model/film.model";
import {Country} from "./model/country.model";
import {FilmGenre} from "./model/film_genre.model";
import {Occupation} from "./model/occupation.model";
import {FilmCountry} from "./model/film_country.model";
import {CountryViewer} from "./model/country_viewer.model";
import {FilmOccupation} from "./model/film_occupation.model";
import {MainActor} from "./model/main_actor.model";
import {Person} from "./model/person.model";
import {PersonGenre} from "./model/person_genre.model";
import {SimilarFilm} from "./model/similar_film.model";
import {MarriedCouple} from "./model/married_couple.model";
import {PersonBestFilm} from "./model/person_best_film.model";

@Module({
    imports: [
        // ConfigModule.forRoot({
        //     envFilePath: `.${process.env.NODE_ENV}.env`
        // }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: 'localhost',
            port: 5434,
            username: 'postgres',
            password: '123',
            database: 'dbKinopoisk',
            models: [
                Country,
                CountryViewer,
                Film,
                FilmCountry,
                FilmGenre,
                FilmOccupation,
                Genre,
                MainActor,
                MarriedCouple,
                Occupation,
                Person,
                PersonBestFilm,
                PersonGenre,
                SimilarFilm,
            ],
            autoLoadModels: true
        }),
        // SequelizeModule.forFeature([Genre, Film, Country, FilmGenre]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
