export enum SelectedPage{
    Home="home",
    Contact="contact",
    Pricing="pricing",
}

export interface Plan {
    title:string,
    star:Array<number>,
    price:number,
    time:string,
    dropRate:string,
    guarantee:string,
}