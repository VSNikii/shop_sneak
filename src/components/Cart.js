function Cart() {
    return (
        <div className="overlay">
            <div className="cart d-flex flex-column">
                <h3 className="d-flex justify-between">Корзина <img className="cartRemove cu-p" src="/img/deleteCart.svg" alt="Remove"></img></h3>
                <div className="items">
                    <div className="cartItem d-flex mt-50 mb-15 align-center">
                        <div style={{ backgroundImage: 'url(/img/sneakers/sneak1.jpg)' }} className="cartImg"></div>
                        <div className="d-flex flex-column">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <span className="mt-10"><b>12 999 руб.</b></span>
                        </div>
                        <img className="cartRemove ml-15 cu-p" src="/img/deleteCart.svg" alt="Remove"></img>
                    </div>
                    <div className="cartItem d-flex mb-15 align-center">
                        <div style={{ backgroundImage: 'url(/img/sneakers/sneak7.jpg)' }} className="cartImg"></div>
                        <div className="d-flex flex-column">
                            <p>Мужские Кроссовки Jordan Air Jordan 11</p>
                            <span className="mt-10"><b>10 799 руб.</b></span>
                        </div>
                        <img className="cartRemove ml-15 cu-p" src="/img/deleteCart.svg" alt="Remove"></img>
                    </div>

                </div>
                <div className="totalBlock d-flex flex-column">
                    <ul>
                        <li className="d-flex">
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб.</b>
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
        </div>);
}

export default Cart;