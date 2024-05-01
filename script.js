// Dzięki this możemy uzyskać dostęp do właściwości i metod bieżącego obiektu wewnątrz jego definicji.
// Słowo kluczowe this wewnątrz metod obiektu odnosi się do samego obiektu, na którym została wywołana dana metoda.

// Obiekt osoba
const osoba = {
  // userName: właściwość obiektu imienia osoby
  userName: "Maciej",
  // showName(): metoda obiektu wyświetlakąca imię osoby
  showName() {
    // this odnosi się do bieżącego obiektu(osoba) i właściwości userName
    console.log(`Imię osoby: ${this.userName}`);
  },
};

// Wywołanie metody showName() dla obiektu osoba
osoba.showName(); // wyświetli imię

// Obiekt półki na książki
const polkaNaKsiazki = {
  // authors: właściwość obiektu przechowująca tablicę autorów
  authors: [],

  getAuthors() {
    return this.authors;
  },

  // addAuthor(authorName): metoda obiektu dodaje autora do tablicy autorów na półce z książkami
  addAuthor(authorName) {
    // this wewnątrz metody odnosi się do bieżącego obiektu (polkaNaKsiazki) i dodaje nowego autora do tablicy authors
    this.authors.push(authorName);
  },
};

// Dodanie autorów do półki na książki za pomocą metody addAuthor()
polkaNaKsiazki.addAuthor("Jan Kowalski");
polkaNaKsiazki.addAuthor("Grzegorz Brzęczyszczykiewicz");
polkaNaKsiazki.addAuthor("Smerf Pracuś");

// Pobranie listy autorów z półki za pomocą metody getAuthors()
const listaAutorow = polkaNaKsiazki.getAuthors();
console.log("Lista autorów na półce z książkami:", listaAutorow);
