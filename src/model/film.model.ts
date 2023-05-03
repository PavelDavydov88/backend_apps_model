import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";


interface FilmCreationAttrs {
  name: string;

}

@Table({ tableName: "film", createdAt: false, updatedAt: false })
export class Film extends Model<Film, FilmCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING,  defaultValue : null})
  name: string;

  @Column({ type: DataType.STRING,  defaultValue : null})
  nameEng: string;

  @Column({ type: DataType.INTEGER, defaultValue : null })
  rating: number;

  @Column({ type: DataType.INTEGER,  defaultValue : null })
  estimation: number;

  @Column({ type: DataType.STRING, defaultValue : null})
  subtitles: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  audio_track: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  film_quality: string;

  @Column({ type: DataType.INTEGER, defaultValue : null})
  year: number;

  @Column({ type: DataType.STRING, defaultValue : null})
  slogan: string;

  @Column({ type: DataType.INTEGER, defaultValue : null})
  budget: number;

  @Column({ type: DataType.INTEGER, defaultValue : null})
  tax_usa: number;

  @Column({ type: DataType.INTEGER, defaultValue : null})
  tax_world: number;

  @Column({ type: DataType.INTEGER, defaultValue : null})
  tax_rus: number;

  @Column({ type: DataType.STRING, defaultValue : null})
  release_world: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  release_rus: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  release_dvd: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  age_restrict: string;

  @Column({ type: DataType.INTEGER, defaultValue : null})
  time_during: number;

  @Column({ type: DataType.STRING, defaultValue : null})
  rating_MPAA: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  trailer: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  picture_URL: string;

  @Column({ type: DataType.STRING, defaultValue : null})
  picture_local_URL: string;

}