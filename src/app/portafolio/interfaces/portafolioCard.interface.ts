export interface PortafolioCard{

  id:string,
  dataTarget?:string,
  imgDestacada:string,
  title:string,
  subTitle:string,
  summary:string,
  date:string,
  objetivo:string,
  metodologia:string[],
  tecnologias:Tecnologias[],
  poster:string[],
  enlace?:string


}


export interface Tecnologias{
  imagen:string,
  texto:string
}