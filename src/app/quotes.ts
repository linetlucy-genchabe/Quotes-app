
export class Quotes {
    showDescription: boolean = false;
  isFavorite!: boolean;
  upvotes!: number;
  downvotes!: number;
 

    constructor(public id: number,public name: string,public description: string,public startDate: Date, upvotes:number,downvotes:number,){
     this.upvotes=upvotes;
     this.downvotes=downvotes;
    }
}
