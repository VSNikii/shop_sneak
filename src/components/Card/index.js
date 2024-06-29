
import styles from './Card.module.scss';
import React from 'react';
function Card({ onClickFav, onClickAdd, imageUrl, title, price }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const [isFav, setIsFav] = React.useState(false);
  const handleClickAdd = () => {
    isAdded ? null : onClickAdd({ imageUrl, title, price });
    setIsAdded(!isAdded);

  };
  const handleClickFav = () => {
    onClickFav();
    setIsFav(!isFav);
  }

  return (

    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src={isFav ? '/img/liked.svg' : '/img/unliked.svg'} alt="UnLiked" onClick={handleClickFav} />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />

      <h5 className="mb-10">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        {/* добавить компонент modalWindow для всплавающего окна о добавлении кроссовок с их названием и ценой */}
        <img className={styles.add} onClick={handleClickAdd} src={isAdded ? '/img/checked.svg' : '/img/add.svg'} alt="Plus" />
      </div>
    </div>

  );
}
export default Card;