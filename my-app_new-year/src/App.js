import './App.css';

function App() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          HEADDDDEEEERRR
        </div>
      </header>
      <main className='main'>
          <img className='img-ads' src="/reklama1.png"/>
        <div className='container main-content'>
          <aside className='filter-aside'>
            <h2 className='conteiner-title'>PANEELL BOCZNYY</h2>
            <hr/>
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
            <hr/>
            <ul className='list-container'>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
              <li className='product-tile'>
                <h3>Nazwa Produktu</h3>
                <div className='tile-line'/>
                <span>99zł</span>
                <button type='button' className='tile-button'>Dodaj Do Koszyka</button>
              </li>
            </ul>
          </section>
        </div>
          <img className='img-ads' src="reklama2.png"/>
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
