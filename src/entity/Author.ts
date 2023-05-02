import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Image } from "./Image";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Image, (image) => image.author)
    images: Image[]
}
