import { AppDataSource } from "./data-source";
import { Album } from "./entity/Album";
import { Image } from "./entity/Image";
import { ImageMetadata } from "./entity/ImageMetadata";

AppDataSource.initialize()
  .then(async () => {
    const album1 = new Album();
    album1.name = "Bears";
    await AppDataSource.manager.save(album1);

    const album2 = new Album();
    album2.name = "Me";
    await AppDataSource.manager.save(album2);

    const image = new Image();
    image.name = "Me and Bears";
    image.description = "I am near polar bears";
    image.filename = "photo-with-bears.jpg";
    image.views = 1;
    image.isPublished = true;
    image.albums = [album1, album2];
    await AppDataSource.manager.save(image);

    const loadedPhoto = await AppDataSource.getRepository(Image).findOne({
      where: {
        id: 1,
      },
      relations: {
        albums: true,
      },
    });

    console.log("loaded photo with the album: ", loadedPhoto)

  })
  .catch((error) => console.log(error));
