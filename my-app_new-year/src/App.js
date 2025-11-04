import './App.css';

function App() {
  const productList = [
    {id: "0",
      name: "Nazwa Produktu",
      price: 1212,
      currency: "PLN",
      img: {
        width: 200,
        url: "/images/reklama1.png"}
    },

  ]
  return (
    <>
      <header className='header'>
        <div className='container'>
          HEADDDDEEEERRR
        </div>
      </header>
      <main className='main'>
        <img className='img-ads' src="/reklama1.png" />
        <div className='container main-content'>
          <aside className='filter-aside'>
            <h2 className='conteiner-title'>PANEELL BOCZNYY</h2>
            <hr />
            <ol>
              <li>Filtr 1</li>
              <ul>
                <li>Filtr 1.1</li>
                <li>Filtr 1.2</li>
                <ul>
                  <li>Filtr 1.2.1</li>
                  <li>Filtr 1.2.2</li>
                  <li>Filtr 1.2.3</li>
                  <li>Filtr 1.2.4</li>
                </ul>
                <li>Filtr 1.3</li>
                <li>Filtr 1.4</li>
              </ul>
              <li>Filtr 2</li>
              <li>Filtr 3</li>
              <li>Filtr 4</li>
            </ol>
          </aside>
          <section className='products-list'>
            <h2 className='conteiner-title'>ZAWAARRTTTOOŚĆ</h2>
            <hr />
            <ul className='list-container'>
              {
                productList.map(
                (element) => 
                <li className='product-tile'>
                <h3>{element.name}</h3>
                <div className='tile-line' />
                <img src={element.img.url}/>
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
