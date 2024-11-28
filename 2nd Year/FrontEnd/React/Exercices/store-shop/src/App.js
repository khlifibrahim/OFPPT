import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/card';

function App() {

  const products = [
    {
      "title": "Acer Predator Helios 300",
      "price": 1200,
      "units": 34,
      "tag": 'pc',
      "image": "./pc1.jpg"
    },
    {
      "title": "Dell XPS 13",
      "price": 999,
      "units": 46,
      "tag": 'pc',
      "image": "./pc2.jpg"
    },
    {
      "title": "HP Pavilion Gaming Laptop",
      "price": 850,
      "units": 22,
      "tag": 'pc',
      "image": "./pc3.jpg"
    },
    {
      "title": "Lenovo ThinkPad X1 Carbon",
      "price": 1300,
      "units": 18,
      "tag": 'pc',
      "image": "./pc4.jpg"
    },
    {
      "title": "Asus ROG Strix G15",
      "price": 1400,
      "units": 27,
      "tag": 'pc',
      "image": "./pc5.png"
    },
    {
      "title": "MacBook Air M2",
      "price": 1249,
      "units": 12,
      "tag": 'pc',
      "image": "./pc6.jpg"
    },
    {
      "title": "Razer Blade 15",
      "price": 1799,
      "units": 15,
      "tag": 'pc',
      "image": "./pc7.jpg"
    },
    {
      "title": "MSI GF63 Thin",
      "price": 749,
      "units": 30,
      "tag": 'pc',
      "image": "./pc8.jpg"
    },
    {
      "title": "Apple MacBook Pro 16",
      "price": 2399,
      "units": 9,
      "tag": 'pc',
      "image": "./pc9.jpg"
    },
    {
      "title": "Microsoft Surface Laptop 5",
      "price": 1099,
      "units": 20,
      "tag": 'pc',
      "image": "./pc10.jpg"
    }
  ]
  


  return (
    <div className="App">
      <div className=" flex items-center justify-end gap-8 mx-12 h-16 list-none text-slate-700/100 font-medium"> 
        <li className="cursor-pointer">Search Prods</li>
        <li className="cursor-pointer">For Gaming</li>
        <li className="cursor-pointer">Full Setup</li>
        <li className="cursor-pointer">Blogs</li>
      </div>
      <Header/>
      <div className="cards flex items-start justify-evenly flex-wrap gap-10 h-full p-10 bg-zinc-200 ">
        {products.map((product, i) => (
          <Card url={product.image} title={product.title} price={product.price} rating={product.units} tag={product.tag}/>
        ))}
      </div>
    </div>
  );
}

export default App;
