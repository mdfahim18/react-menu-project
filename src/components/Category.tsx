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
    </div>
  );
};

export default Category;
