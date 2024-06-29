function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneackers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30"><img className="cu-p" width={18} height={17} src="/img/cart.svg" onClick={props.onClickCart} /><span>1205 руб.</span></li>
        <li><img src="/img/favourites.svg" className="cu-p"/></li>
        <li><img width={18} height={18} src="/img/user.svg" /></li>
      </ul>
    </header>
  );
}

export default Header;