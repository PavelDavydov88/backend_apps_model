import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Film} from "./film.model";
import {Person} from "./person.model";

interface MarriedCoupleCreationAttrs {
    person_id: number,
    couple_person_id: number,
}

@Table({tableName: 'married_couple', createdAt: false, updatedAt: false})
export class MarriedCouple extends Model<MarriedCouple, MarriedCoupleCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER, unique: 'uniqueTag', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    person_id: number;

    @BelongsTo(() => Person)
    person: Person;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER, unique: 'uniqueTag', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    couple_person_id: number;

    @BelongsTo(() => Person)
    couple_person: Person;

}