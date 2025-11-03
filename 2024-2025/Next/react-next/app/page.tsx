"use client";
import {useState} from 'react';

export default function Home() {
    const [quotes, setQuotes] = useState([]);

    const handleMouseEnter = () => {
        // Generujemy losowe współrzędne dla nowych kopii blockquote
        const randomTop = Math.random() * 80 + 10; // Losowa pozycja od 10% do 90% od góry
        const randomLeft = Math.random() * 80 + 10; // Losowa pozycja od 10% do 90% od lewej

        // Tworzymy nową kopię elementu blockquote
        const newQuote = (
            <blockquote
                key={quotes.length}
                className="absolute text-lg italic bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 rounded-lg shadow-lg text-gray-200 animate-appear"
                style={{
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    transform: 'translate(-50%, -50%)', // Centrujemy element
                    animationDelay: `${quotes.length * 0.1}s` // Dodajemy opóźnienie dla animacji
                }}
            >
                Zanudzisz się tu
            </blockquote>
        );

        // Dodajemy kopię do stanu
        setQuotes([...quotes, newQuote]);

        // Usuwamy elementy po 3 sekundach
        setTimeout(() => {
            setQuotes(prevQuotes => prevQuotes.filter(quote => quote.key !== newQuote.key));
        }, 3000);
    };

    return (
        <section
            className="relative w-full min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex justify-center items-center text-center text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Witaj
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                    Jesteś w mojej apce, Zanudzisz się tu
                </p>
                <blockquote
                    onMouseEnter={handleMouseEnter}
                    className="mt-4 text-lg italic bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 rounded-lg shadow-lg text-gray-200 transition-transform duration-300 transform hover:scale-105">
                    Zawróć póki to możliwe
                </blockquote>
                <br/>
                <div className="flex justify-center gap-6">
                    <a href="/account/profile"
                       className="px-8 py-3 bg-white text-black font-semibold rounded-lg transform transition duration-300 hover:border-2 hover:border-white  hover:bg-transparent hover:text-white hover:scale-105">
                        Zacznij
                    </a>
                    <a href="/about"
                       className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg transform transition duration-300 hover:bg-white hover:text-black hover:scale-105">
                        Więcej informacji
                    </a>
                </div>
            </div>

            {/* Renderujemy kopie blockquote w różnych miejscach z animacją */}
            <div className="absolute inset-0 pointer-events-none">
                {quotes}
            </div>
        </section>
    );
}
// Zakres React:
// - Tworzenie komponentów
// - Obsługa hooka usestate
// - Praca na strukturach danych, takich jak tablica obiektów
// - Metody Tablicy: map, filter, find, some
// - Zmiana stanu komponentu, będądzego obiektem
// - Stylowanie komponentów, po przez css lub bootstrap
// - Dodawanie obrazu
// - Obsługa formularzy
// - Renderowanie warunkowe - ternary operator / &&