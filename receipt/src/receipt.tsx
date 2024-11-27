import {food, cookie, cake, doughnut} from"./App"


export default function Receipt({receipt}: {receipt: food[]})
{

    return (
        <>
            {receipt.map(item => <Item item = {item}/>)}

        </>
    );
}
function Item({item}: {item: food})
{
    if (item.type === "cake")
    {
        var cakeItem  = item as cake;// Check flavour, then shape

        if(cakeItem.flavor === "chocolate")
        {
            if (cakeItem.shape === "round")
            {

                return<><img style = {{height: "50px", width: "50px"}}
                             src = " https://cakebycourtney.com/wp-content/uploads/2015/12/Triple-Chocolate-Cake-4-e1560549461693.jpg"
                    />{cakeItem.flavor}{cakeItem.shape}{cakeItem.radius}{cakeItem.message}</>;
            }
            else
            {
                return <><img style = {{height: "50px", width: "50px"}}
                              src = "https://aprettylifeinthesuburbs.com/wp-content/uploads/2022/02/The-BEST-Chocolate-Cake-9x13-11a.jpg"
                   /> {cakeItem.flavor}{cakeItem.shape}{cakeItem.width}{cakeItem.length}{cakeItem.radius}</>;
            }
        }
        else if(cakeItem.flavor === "yellow")
        {
            if (cakeItem.shape === "round")
            {
                return<><img src = "https://www.hy-vee.com/webres/Image/catalog/thumbnail.aspx?img=10030_2_round_4539.jpg"
                    />{cakeItem.flavor}{cakeItem.shape}{cakeItem.radius}{cakeItem.message}</>;
            }
            else
            {
                return <><img src = "https://images.freshop.com/00210454000000/ebb256a9706bccd0bc1789d355818e72_large.png"
                   /> {cakeItem.flavor}{cakeItem.shape}{cakeItem.width}{cakeItem.length}{cakeItem.radius}</>;
            }
        }
        else
        {
            if (cakeItem.shape === "round")
            {
                return<><img src = "https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Blog-1a.jpg"
                    />{cakeItem.flavor}{cakeItem.shape}{cakeItem.radius}{cakeItem.message}</>;
            }
            else
            {
                return <><img src = "https://www.shutterstock.com/image-photo/selective-focus-square-red-velvet-260nw-1993396556.jpg"
                    />{cakeItem.flavor}{cakeItem.shape}{cakeItem.width}{cakeItem.length}{cakeItem.radius}</>;
            }
        }
    }
    else if (item.type === "cookie")
    {
        var cookieItem = item as cookie;

        if(cookieItem.variety === "biscotti")
        {
            return<><img src= "https://tatyanaseverydayfood.com/wp-content/uploads/2014/12/Classic-Italian-Biscotti-4-768x1024.jpg"
            />{cookieItem.price}{cookieItem.quantity}{cookieItem.variety}</>;
        }
        else if(cookieItem.variety === "chocolate-chip")
        {
            return<><img src= "https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/master/pass/chocolate-chip-cookie.jpg"
            />{cookieItem.price}{cookieItem.quantity}{cookieItem.variety}</>;
        }
        else if(cookieItem.variety === "white-chocolate-macadamia")
        {
            return<><img src= "https://sallysbakingaddiction.com/wp-content/uploads/2012/09/white-chocolate-macadamia-nut-cookies-1.jpg"
            />{cookieItem.price}{cookieItem.quantity}{cookieItem.variety}</>;
        }
        else if (cookieItem.variety === "oatmeal-raisin")
        {
            return<><img src= "https://www.eatingbirdfood.com/wp-content/uploads/2024/02/oatmeal-raisin-cookies-hero-new.jpg"
            />{cookieItem.price}{cookieItem.quantity}{cookieItem.variety}</>;
        }
        else
        {
            return<><img src= "https://www.saveur.com/uploads/2011/12/14/Italian-Rainbow-Cookies-Recipe-Saveur-02-scaled.jpg?auto=webp"
            />{cookieItem.price}{cookieItem.quantity}{cookieItem.variety}</>;
        }

    }
    else if (item.type === "doughnut")
    {
        var doughnutItem = item as doughnut;

        if(doughnutItem.flavor === "boston-cream")
        {
            return<><img src= "https://richanddelish.com/wp-content/uploads/2023/12/Boston-Cream-Donuts-1.jpg"
            />{doughnutItem.price}{doughnutItem.flavor}{doughnutItem.quantity}</>;
        }
        else if(doughnutItem.flavor  === "chocolate-glaze")
        {
            return<><img src=  "https://www.rockrecipes.com/wp-content/uploads/2007/12/Choclate-glazed-homemade-donuts-on-white-serving-plate-480x480.jpg"
            />{doughnutItem.price}{doughnutItem.flavor}{doughnutItem.quantity}</>;
        }
        else if(doughnutItem.flavor  === "strawberry-frosted")
        {
            return<><img src= "https://kitchenswagger.com/wp-content/uploads/2020/03/strawberry-frosted-doughnuts4.jpg"
            />{doughnutItem.price}{doughnutItem.flavor}{doughnutItem.quantity}</>;
        }
        else if (doughnutItem.flavor  === "chocolate-munchkin")
        {
            return<><img src= "https://cosetteskitchen.com/wp-content/uploads/2019/03/munchkin-2-of-8-1-683x1024.jpg"
            />{doughnutItem.price}{doughnutItem.flavor}{doughnutItem.quantity}</>;
        }
        else if (doughnutItem.flavor  === "powdered-munchkin")
        {
            return<><img src= "https://peanutbutterandjilly.com/wp-content/uploads/2020/11/IMG_5560-1-e1706652451106.jpg"
            />{doughnutItem.price}{doughnutItem.flavor}{doughnutItem.quantity}</>;
        }
        else
        {
            return<><img src= "https://olivesnthyme.com/wp-content/uploads/2024/01/Powdered-Sugar-Donuts-18.jpg"
            />{doughnutItem.price}{doughnutItem.flavor}{doughnutItem.quantity}</>;
        }
    }
    return <Item item={item}/>;
}