import './App.css';
import { useState } from 'react';

function App() {
  
  const productList = [
    {
      id: "0",
      name: "Nazwa Produktu",
      price: 1212,
      currency: "PLN",
      category: "elektronika",
      colors: ["czerwony", "zielony", "niebieski"],
      img: {
        width: 200,
        url: "reklama1.png"
      }
    },
    {
      id: "1",
      name: "Produkt 2",
      price: 311,
      currency: "PLN",
      category: "akcesoria",
      colors: ["czarny", "bialy"],
      img: {
        width: 200,
        url: "/reklama2.png"
      }
    },
    {
      id: "2",
      name: "Produkt 3",
      price: 1500,
      currency: "PLN",
      category: "elektronika",
      colors: ["czarny", "bialy", "zielony"],
      img: {
        width: 200,
        url: "/reklama2.png"
      }
    },
    {
      id: "3",
      name: "Produkt 4",
      price: 1500,
      currency: "PLN",
      category: "akcesoria",
      colors: ["czarny", "bialy", "zielony"],
      img: {
        width: 200,
        url: "/reklama1.png"
      }
    },
    {
      id: "4",
      name: "Produkt 5",
      price: 1500,
      currency: "PLN",
      category: "zabawki",
      colors: ["czerwony", "zielony", "niebieski"],
      img: {
        width: 200,
        url: "/reklama1.png"
      }
    }
  ]

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState("");
  const [colors, setColors] = useState([]);
  
  const filteredProducts = productList
    .filter(product => (product.price >= minPrice && product.price <= maxPrice) || (minPrice === 0 && maxPrice === 10000))
    .filter(product => product.category === categories || categories === '')
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '')
    .filter(product => product.colors.some(color => colors.includes(color)) || colors.length === 0);

  return (
    <>
      <header className='header'>
        <div className='container'>
          HEADDDDEEEERRR
        </div>
      </header>
      <main className='main'>
        <img className='img-ads' src="reklama1.png" />
        <div className='container main-content'>
          <aside className='filter-aside'>
            <h2 className='conteiner-title'>PANEELL BOCZNYY</h2>
            <hr />
            <ul style={{ listStyle: 'none'}}>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label> Cena Min-Max<br/><input style={{ width: '40%' }} placeholder='min' type='number' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} /> - <input style={{ width: '40%' }} placeholder='max' type='number' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} /></label>
                </li>
                <li style={{ marginBottom: '10px' }}>
                <label>Kategoria: 
                  <select style={{ marginLeft: '10px' }} value={categories} onChange={(e) => setCategories(e.target.value)}>
                    <option value="">wszystkie</option>
                    <option value="akcesoria">akcesoria</option>
                    <option value="elektronika">elektronika</option>
                    <option value="zabawki">zabawki</option>
                  </select>
                </label>
              </li>
              <li><label>Wyszukaj produkt: <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></label></li><br />
              <li>
                <label>Wybierz kolor:</label><ul>
                {[...new Set(productList.flatMap(p => p.colors))].map((colorOption) => (
                  <li>
                  <span key={colorOption}>
                    {colorOption}
                    <input
                      type="checkbox"
                      value={colorOption}
                      checked={colors.includes(colorOption)}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setColors(prevColors =>
                          checked ? [...prevColors, value] : prevColors.filter(c => c !== value)
                        );
                      }}
                    /><br/>
                  </span>
                  </li>
                ))}
                </ul>
              </li>
            </ul>
          </aside>
          <section className='products-list'>
            <h2 className='conteiner-title'>ZAWAARRTTTOOŚĆ</h2>
            <hr />
            <ul className='list-container'>
              {
                filteredProducts.map(
                  (element) =>
                    <li className='product-tile'>
                      <h3>{element.name}</h3>
                      <div className='tile-line' />
                      <img src={element.img.url} />
                      <span>{element.price} {element.currency}</span>
                      <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
                    </li>
                )
              }

            </ul>
          </section>
        </div>
        <img className='img-ads' src="reklama2.png" />
      </main>
      <footer className='footer'>
        <div className='container'>
          FOOOTTTEEEERRR
        </div>
      </footer>
    </>

  )
}

export default App;
