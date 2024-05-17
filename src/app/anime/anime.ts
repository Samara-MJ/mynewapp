export class Anime {
        id: number;
        name: string;
        categoria: string;
        calificacion: string;
        image: string;
        
       
        constructor(
            id: number,
            name: string,
            categoria: string,
            calificacion: string,
            image: string,
            
        ) {
        this.id = id;
          this.name = name;
          this.categoria = categoria;
          this.calificacion = calificacion;
          this.image = image;
        
       }
}
