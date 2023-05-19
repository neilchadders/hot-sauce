import Directory from './components/directory/directory.component';
import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "Scoth Bonnet",
      "imageUrl": "https://images.unsplash.com/photo-1640621455083-2c8bf90f89f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhYmFuZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
    },
    {
      "id": 2,
      "title": "Birds Eye",
      "imageUrl": "https://images.unsplash.com/photo-1484216287461-d8f62bc4d22a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyZHNleWUlMjBjaGlsbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      "id": 3,
      "title": "Habanero",
      "imageUrl": "https://images.unsplash.com/photo-1597341482124-e7916b8c872d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=751&q=80"
    },
    {
      "id": 4,
      "title": "Jalapeno",
      "imageUrl": "https://images.unsplash.com/photo-1597115580039-b849ed2d6398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFsYXBlbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      "id": 5,
      "title": "Sweet",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1663850685036-3b245f60d3a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZXQlMjBjaGlsbGklMjBzYXVjZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
    }
  ]

  return <Directory categories={categories} />;
};

export default App;