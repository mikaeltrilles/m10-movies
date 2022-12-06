export class Movie {
  constructor(
    public _id: string,
    public title: string,
    public details: string,
    public desc: string,
    public img: string,
    public poster: string,
    public original: string,
    public genres: string[],
    public duree: number,
  ) {}
}