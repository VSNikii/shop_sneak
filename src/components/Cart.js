function Cart({ onClickClose, items, onRemove }) {
    return (
        <div className="overlay" >
            <div className="cart d-flex flex-column">
                <h3 className="d-flex justify-between">Корзина <img className="cartRemove cu-p" src="/img/deleteCart.svg" alt="Close" onClick={onClickClose} /></h3>
                {items.length === 0 ?
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img width={120} height={120} className="mb-20" src="/img/emptyCart.svg" alt="Empty" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6 text-center">Добавьте хотя бы одну пару, чтобы сделать заказ</p>
                        <button className="greenButton mt-30 cu-p" onClick={onClickClose}><img className="arrow" src="/img/next.svg" alt="Arrow" />Вернуться назад</button>
                    </div> :
                    <div>
                        <div className="items">
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartImg"></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img className="cartRemove cu-p" onClick={(id) => onRemove(obj.id)} src="/img/deleteCart.svg" alt="Close" />
                                </div>
                            ))}
                        </div>

                        <div className="totalBlock d-flex flex-column">
                            <ul>
                                <li className="d-flex">
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>21 498 </b>
                                </li>
                                <li className="d-flex">
                                    <span>Налог 5%</span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>
                            <button className="greenButton">Оформить заказ <img src="/img/next.svg" alt="next" /></button>
                        </div>
                    </div>
                }
            </div>
        </div>);
}

export default Cart;