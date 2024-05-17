export class Anime {
        id: number;
        name: string;
        description: string;
        Rating: string;
        episode: string;
        categorie: string;
        studio: string;
        img: string;
        
       
        constructor(
          id: number,
          name: string,
          description: string,
          Rating: string,
          episode: string,
          categorie: string,
          studio: string,
          img: string
            
        ) {
        this.id = id;
        this.id = id;
          this.name = name;
          this.categorie = categorie;
          this.description = description;
          this.Rating = Rating;
          this.episode = episode;
          this.studio = studio;
          this.img = img;
          
        
       }
}
