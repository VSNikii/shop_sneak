function Card(){
    return (
        <div className="card">
    <div className="favourite">
        <img src="/img/unliked.svg" alt="UnLiked" />
    </div>
    <img width={133} height={112} src="/img/sneakers/sneak1.jpg" alt="Sneakers" />
    <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
        </div>
        <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
    </div>
</div>
    );
}
export default Card;