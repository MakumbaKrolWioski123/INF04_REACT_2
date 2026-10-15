
function KartaZdjecia({tytul,adres,polubienia})
{
    return (
        <div>
            <img src={adres} alt={tytul} height={200}/>
            <p>{polubienia >100 ? "popularne":""}</p>
        </div>
    );
}

export default KartaZdjecia;