import {food} from"./App"


export default function receipt(receipt: food[])
{

    return (
        <>
            receipt.map(item => <Item item = {item}/>);

        </>
    );
}