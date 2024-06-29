import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import React from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Favourite from './components/Favourite';

const router = createBrowserRouter(routes: [
  {
    path: '/favourite',
    element: <Favourite/>
  }
]);
function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    axios.get('https://667c45163c30891b865c01c1.mockapi.io/items').then((res) => {
      setItems(res.data);
    })
    axios.get('https://667c45163c30891b865c01c1.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    })
  }, []);
  const onAddToCart = (obj) => {
    axios.post('https://667c45163c30891b865c01c1.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj])
  };
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://667c45163c30891b865c01c1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }
  const searchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='wrapper clear'>
      {cartOpened && <Cart items={cartItems} onRemove={onRemoveItem}
        onClickClose={() => setCartOpened(false)}
      />} 
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex  justify-between align-center mb-40">
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img className="clear cartRemove cu-p " src="/img/deleteCart.svg" alt="Clear" onClick={() => setSearchValue('')} />}
            <input onChange={searchInput} value={searchValue} placeholder="Поиск..."></input>
          </div>
        </div>
        <div className='d-flex flex-wrap justify-center'>
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickAdd={(obj) => onAddToCart(obj)}
              onClickFav={() => console.log("Добавили в закладки")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
