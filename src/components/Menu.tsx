import React from 'react';

type PropsType = {
  items: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
};
const Menu = (props: PropsType) => {
  return (
    <div className='section-center'>
      {props.items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={category} className='menu-img' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h3>${price}</h3>
              </header>
              <p className='price-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
