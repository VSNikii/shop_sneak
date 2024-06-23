import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />

      <div className="content p-40">
        <div className="d-flex  justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex mb-30">
          <Card />
            <div className="card">
              <img src="/img/unliked.svg" alt="UnLiked" />
              <img width={133} height={112} src="/img/sneakers/sneak2.jpg" alt="Sneakers" />
              <h5 className="mb-10">Мужские Кроссовки Nike Air Max 270</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
              </div>

            </div>
            <div className="card">
              <img src="/img/unliked.svg" alt="UnLiked" />
              <img width={133} height={112} src="/img/sneakers/sneak3.jpg" alt="Sneakers" />
              <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 499 руб.</b>
                </div>
                <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
              </div>

            </div>
            <div className="card">
              <img src="/img/unliked.svg" alt="UnLiked" />
              <img width={133} height={112} src="/img/sneakers/sneak4.jpg" alt="Sneakers" />
              <h5 className="mb-10">Кроссовки Puma X Aka Boku Future Rider</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 999 руб.</b>
                </div>
                <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-30">
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak5.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Under Armour Curry 8</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>15 199 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>

          </div>
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak6.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>11 299 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>

          </div>
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak7.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>10 799 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>

          </div>
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak8.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>16 499 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>
          </div>
        </div>

        <div className="d-flex mb-30">
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak9.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Nike Lebron XVIII Low</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>13 999 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>

          </div>
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak1.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>

          </div>
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak4.jpg" alt="Sneakers" />
            <h5 className="mb-10">Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>

          </div>
          <div className="card">
            <img src="/img/unliked.svg" alt="UnLiked" />
            <img width={133} height={112} src="/img/sneakers/sneak10.jpg" alt="Sneakers" />
            <h5 className="mb-10">Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>11 299 руб.</b>
              </div>
              <button className="cardButton"><img width={11} height={11} src="/img/Vector.svg" alt="Plus" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
