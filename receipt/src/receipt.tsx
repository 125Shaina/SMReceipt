interface food{
    type:string;
    price:number;
}
interface cookie extends food{
    quantity:number;
    variety:string;
}
interface cake extends food{
    shape: string;
    radius?: number;
    message: string;
    flavor: string;
    length?: number;
    width?:number;
}
interface doughnut extends food{
    flavor:string;
    quantity:number;
}
export default function receipt(receipt: food[])
{

    return (
     receipt.map(item => <Item item = {item}/>);
    );
}