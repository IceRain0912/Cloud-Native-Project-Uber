import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
class Position extends BaseEntity {
    @PrimaryGeneratedColumn() positionID: number;

    @Column({ type: "int" })
    UserID: number;

    @Column({ type: "float" })
    Longtitude: number;

    @Column({ type: "float" })
    Latitude: number;
}

export default Position;