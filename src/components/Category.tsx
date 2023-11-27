import React from 'react';

type PropsType = {
  filterItems: (category: string) => void;
  categories: string[];
};
const Category = (props: PropsType) => {
  const { filterItems, categories } = props;
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      {/* <button onClick={() => filterItems(categories)}>breakfast</button> */}
    </div>
  );
};

export default Category;
