import "reflect-metadata"
import { DataSource } from "typeorm"
import { Image } from "./entity/Image"
import { ImageMetadata } from "./entity/ImageMetadata"
import { Author } from "./entity/Author"
import { Album } from "./entity/Album"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "raja.db.elephantsql.com",
    port: 5432,
    username: "qkzpbeml",
    password: "Dl5UV1ERsw73KRf_pRwsLgbHCmKcuQEo",
    database: "qkzpbeml",
    synchronize: true,
    logging: true,
    entities: [Image, ImageMetadata, Author, Album],
    migrations: [],
    subscribers: [],
})
