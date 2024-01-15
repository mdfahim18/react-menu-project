import { useState } from 'react';
import items from './data';
import Menu from './components/Menu';
import Category from './components/Category';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === 'all') {
      setMenuItems(items);
      return setCategories(allCategories);
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Category categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
