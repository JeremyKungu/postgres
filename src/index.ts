import { AppDataSource } from "./data-source";
import { Image } from "./entity/Image";

AppDataSource.initialize()
  .then(async () => {
    const photoRepository = AppDataSource.getRepository(Image);    

    const allPhotos = await photoRepository.find();
    console.log("All photos from the db: ", allPhotos);
  })
  .catch((error) => console.log(error));
