import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm"
import { Author } from "./Author"
import { Album } from "./Album"

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column("double precision")
    views: number

    @Column()
    isPublished: boolean

    @ManyToOne(() => Author, (author) => author.images)
    author: Author;

    @ManyToMany(() => Album, (album) => album.images)
    albums: Album[]
}