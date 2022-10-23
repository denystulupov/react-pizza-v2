import React from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState({
    name: 'популярности ↓',
    sortProperty: 'rating',
    orderType: 'desc',
  });

  React.useEffect(() => {
    let category = categoryId ? 'category=' + categoryId : '';

    setIsLoading(true);
    fetch(
      `https://634d19d8acb391d34a93d15b.mockapi.io/items?${category}&sortBy=${sortId.sortProperty}&order=${sortId.orderType}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortId]);

  return (
    <>
      <div className="content__top">
        <Categories activeIndex={categoryId} setActiveIndex={(i) => setCategoryId(i)} />
        <Sort selected={sortId} setSelected={setSortId} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;
