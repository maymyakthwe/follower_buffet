import { Plan } from "@/types"

export const plans:Array<Plan> = [
    {
    title:"Ultimate Plan",
    star:[1,1,1,1,1],
    price:38000,
    time:"30",
    dropRate:"0",
    guarantee: "60 days",
},{
    title:"Pro Plan",
    star:[1,1,1,1],
    price:25000,
    time:"30",
    dropRate:"2-3",
    guarantee: "60 days",
},{
    title:"Premium Plan",
    star:[1,1,1],
    price:15000,
    time:"30",
    dropRate:"2-3",
    guarantee: "30 days",
},{
    title:"Standard Plan",
    star:[1,1,1],
    price:8000,
    time:"30",
    dropRate:"20",
    guarantee: "60 days",
}
]