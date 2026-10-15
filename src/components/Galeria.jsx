import Zdjecia from "./Zdjecia.jsx";
import "./Produkt.css"

function Galeria()
{
    return (
        <div className="Galeria">
            <Zdjecia tytul="Jajko" adres="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeX3mkkF8BqI3ZSU6FnDssf0lZ6OHnDv_YHK3CZSx1jw&s=10" polubienia={200}/>
            <Zdjecia tytul="Malpa" adres="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtzEXkgzRNubbQW36DGc7M7C24nDUKAIawtSLPzK9Xg&s=10" polubienia={90}/>
            <Zdjecia tytul="Skoda" adres="https://cdn.skoda-auto.com/images/external/69e4d32379949c96298a2f03f0cc93b3/DerivativeIntroductionModule/517a7c8aa96236dc9d8954f4916e42718d6bf87515b75d7ab74272b3bc3277bf/Default_bp1920_1.webp" polubienia={300}/>
        </div>
    )
}
export default Galeria