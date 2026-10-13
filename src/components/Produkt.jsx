import "./Produkt.css"

function KartaProduktu()
{
    const nazwa = "Japki"
    var cena = 6.50
    let czyDostepna = true;
    return (
        <div className="Produkt-container">
            <h1>{nazwa} - {cena}zł</h1>
            <p>z VAT - {cena+cena*0.23}</p>
            <p>Dostępna: {czyDostepna ? "Tak":"Nie"}</p>
        </div>
    );
}

export default KartaProduktu;