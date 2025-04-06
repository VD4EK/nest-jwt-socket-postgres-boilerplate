import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: "users"})
export class User extends  Model<User, UserCreationAttrs>{

    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
    declare id: number;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    declare email: string;

    @Column({type: DataType.STRING, allowNull: false})
    declare password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    declare banned: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    declare banReason: string;

}