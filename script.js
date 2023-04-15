/* PRACA DOMOWA JS
Przygotowałem dla Was zbiór zadań które sprawdzą Waszą wiedzę z podstaw:
zmiennych i typów
funkcji
pętli
warunków
metod
Zasady:
Wynik każdego zadania musi być wyświetlony w konsoli.
W kodzie musi być porządek i oznaczenie która odpowiedź odnosi się do którego zadania.
Można użyć załączonego dokumentu html żeby wyświetlać konsolę w przeglądarce lub po prostu wyświetlać wyniki w terminalu :slightly_smiling_face: Ja załączam wariant z dokumentem HTML
Pliki załączam poniżej, natomiast każdy standardowo tworzy własne repozytorium i po wykonaniu zadań publikuje link na grupie 4-edycja-prace-domowe.
Dokument nie powinien wymagać żadnej ingerencji żeby zaczął działać, żadne rozwiązanie nie powinno być zakomentowane ani "wyłączone". Skrypt powinien hulać na zasadzie plug & play :slightly_smiling_face:
Oceniana będzie poprawność, porządek, działanie kodu, ponad to dostarczymy pełen code review.
Do tych zadań dostępny będzie klucz po złożeniu pracy.
Zadania z gwiazdkami *** są nieobowiązkowe, ale zachęcam do spróbowania swoich sił.
Przy pracy domowej będziemy pomagać i podpowiadać nieco mniej, abyście spróbowali samodzielnie powalczyć. Na etapie code review odpowiemy oczywiście na wszelkie pytania i damy szansę na poprawienie pracy i utrwalenie wiedzy :smile:
Pamiętajcie że nie musicie stosować zawsze sztywnych, przewidzianych z góry rozwiązań. Jeśli znajdziecie różnorodne metody rozwiązań jednego problemu, nauczycie się więcej :muscle:
Jeśli macie pomysły na dodatkowe funkcjonalności do funkcji i zadań, możecie śmiało dodać coś od siebie!
Termin pracy to koniec aktualnego sprintu, czyli 20 marca. Myślę że 2 tygodnie na luzie wystarczą */

//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych

const light = true;
const quantity = 5;
const name = 'Krzysiek';

console.log(light, quantity, name, typeof true, typeof 5, typeof 'Krzysiek')

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.

// 2 + "2"
console.log(2 + "2");
// Wynik to 22, dzieje się tak, ponieważ dla JavaScriptu są tutaj dwa różne typy. Nie zachodzi dodawanie ale "doklejanie", ponieważ "2" jest stringiem, więc do jednej dwójki doklejona jest następna dwójka.

// 2 + 2
console.log(2 + 2);
// Wynik to 4. Ponieważ dla JavaScriptu obie dwójki są tego samego typu, czyli liczbami, dodaje je do siebie (JS jest dynamicznie typowany, rozpoznaje deklaracje).

// 2 * "2"
console.log(2 * "2");
// Wynik to 4. Szukałem jednoznacznej odpowiedzi, nie znalazłem, a nie chcę siedzieć nad tym kilkanaście godzin, dlatego wymyśliłem coś takiego: JavaScript jest językiem dynamicznie typowanym, "2" to string, dlatego w innych sytuacjach dwójska byłaby potraktowana inaczej niż liczba. Tutaj jednak stringiem jest liczba, a JS ma dwójkę przemnożyć przez podany string. A ponieważ jest dynamicznie typowany, rozpoznaje ten string jako 2 i mnoży to co mu zadano.

// 2 * 2
console.log(2 * 2);
// Wynik to 4. Tutaj nie dzieje się nic niezwykłego. JS jako język dynamicznie typowany rozpoznaje podane liczby jako liczby mimo braku delaracji typu.

// 1 == true
console.log(1 == true);
//Typ to Boolean, mamy tutaj logiczną deklarację, ponieważ nie ma innych warunków, przez które porównanie nie byłoby prawdziwe.

// 0 == false
console.log(0 == false);
// Jak wyżej, typ to Boolean, mamy tutaj logiczną deklarację, ponieważ nie ma innych warunków, przez które porównanie nie byłoby prawdziwe.

// 0 == null
console.log(0 == null);
// Wynik to fałsz, ponieważ zero nie jestem niczym, nie jest brakiem. Wartość została zadeklarowana, a "null" oznacza zmienną pustą lub nieznaną wartość.

// null == undefined
console.log( null == undefined)
// Wynik to prawda, ponieważ "undefined" to typ danych, którego zmienna nie ma przypisanej wartości początkowej, a taką jest właśnie null.

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

// "=" - to jest operator przypisania (nie pokrywa się swoim działaniem jak w matematyce).
// "==" - jest to operator porównania (jak w matematyce).
// "===" - jest to operator porówania wartości i typu, to znaczy, że oba warunki muszą zostać spełnione aby zachodziła równość.

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli.

// Typ referencyjny jest bardziej rozbudowany od prostego, ponieważ możemy w nim budować funkcje, tablice i obiekty. Różnica polega na tym, że w typach prostych do danej zmiennej możemy przypisać tylko jedną zmienną. W typach złożonych wręcz przeciwnie, do jednej zmiennej możemy przypisać bardzo rozbudowane deklaracje.

//Typ prosty:
const firstName = 'Mariusz';
console.log(firstName);

//Typ złożony (referencyjny):
const person = [
    "Marcin",
    "Kułak",
    "Polska",
    "Lublin",
    "DevStock"
];
console.log(person);

//lub:
const arrayOfPerson = {
    godnosc: {  imie: 'Jan',
                nazwisko: 'Nowak',
             },
                wiek: 40,
                miejscowosc: 'Warszawa',
};
const nazwiskoJana = arrayOfPerson.godnosc.nazwisko;
console.log(nazwiskoJana);

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości: 
// let val = 0 (przekonwertuj na typ Boolean)

let val = 0;
const yes = true;
yes === val;
console.log(yes);

// let num = "2137" (przekonwertuj na typ Number)

let num = "2137";
let liczba = 2137;
num === liczba;
console.log(num);


// let str = 007 (przekonwertuj na String)

let str = 007;
let napis = "007";
str === napis;
console.log(napis);

// let und = undefined (przekonwertuj na Boolean)

let und = undefined;
let undNew = und;
const toBedziePrawda = true;
toBedziePrawda === undNew;

console.log(undNew);

//Nie wiem jak to zrobić... 

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

let newArray = [];
newArray.push("Natasza", "Marianna", "Marian");
console.log(newArray);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

//Nie wiem czy dobrze zrozumiałem polecenie...

const Object = {
    kraj:   {
            miastoPierwsze: "Warszawa",
            miastoDrugie: "Kraków",
            },
    kraj2:  {
            pierwszeMiasto: "Berlin",
            drugieMiasto: "Frankfurt",
            },
    wyspa: {
            wyspaPierwsza: "Irlandia",
            wyspaDruga: "Islandia",
    }
};

console.log(Object);

//g)* opisz krótko czym dokładnie jest typ NaN

//To jest typ który jednoznacznie informuje nas to tym, że dana deklaracja nie jest liczbą, nawet gdy mówimy o takich wartościach jak nieskończoność.

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko

//Typ Symbol jest to odmienna deklaracja wartości, która pozostaje niesprecyzowano ale za to "wyjątkowa." Wykorzystuje się do nadpisywania innych deklracji przy debugowaniu bądź w sytuacjach kiedy chcemy mieć pewność, że nie zmienimy zadeklarowanej już wartości.

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

function addition (x,y,z) {
    const sum = x + y + z;
    return sum;
}
const sum = addition(2,3,5)

console.log(sum);


//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

function poleTrojkata (base, height) {
    let area = 1 / 2 * base * height;
    return area;
}
const area = poleTrojkata(3,3);
console.log(area)

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

function age (currentAge, con, manyYears) {
    if (manyYears = currentAge - con);
    console.log(manyYears);

    if (currentAge < 18)
    console.log('nie jesteś pełnoletni')
    else
    console.log('jesteś pełnoletni')
};
const instruction = age(29, 18);

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

const elements = ['Frontend', 'Backend', 'Fullstack', 'Zielony', 'Junior'];

for (i = 0; i < elements.length; i++) {
    const elements = ['Frontend', 'Backend', 'Fullstack', 'Zielony', 'Junior'];
    
};

const elementsMessage = `Przekazana tablica ma ${elements.length} elementów a elementem numer 3 jest ${elements[2]}.`;
console.log(elementsMessage);

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
    name: "Jan",
    surname: "Kowalski",
    age: 20,
    height: 180
}

const message = `Pan/i ${testPerson.name} ${testPerson.surname} ma ${testPerson.age} lat oraz ${testPerson.height} cm wzrostu.`;
console.log(message);

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartość jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

let testPerson2 = {
    man1: {
            name: "Jan",
            surname: "Kowalski",
            age: 20,
            height: 180,
          },
    man2: {
            name: "Mateusz",
            surname: "Polak",
            age: 16,
            height: 178,
          },
};
testPerson2.man1.age = 18;
console.log(testPerson2.man1);


//Nie wiem czy dobrze rozumiem to polecenie. Nie bardzo widzę tutaj funkcję a na MDN szukałem jakiegoś przekształcenia jednego obiektu w drugi i nie znalazłem.

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"

function result (oneNumber) {
    if ((oneNumber % 3 === 0) && (oneNumber % 5 === 0));
    console.log("FizzBuzz")
}
const wynik1 = result(15);

// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"

function result2 (oneNumber) {
    if (oneNumber % 3 === 0)
    console.log("Fizz");
}
const wynik2 = result2(3);

// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

function result3 (oneNumber) {
    if (oneNumber % 5 === 0)
    console.log("Buzz");
}
const wynik3 = result3(5);

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

function result4(twoNumber) {
    if ((twoNumber % 2 === 0) && (twoNumber >= 2) && (typeof twoNumber === "number"))
    console.log("Liczba jest parzysta.")
    else
    console.log("Liczba nie jest parzysta lub to nie jest liczba!")
}
const wynik4 = result4(3);
const wynik5 = result4(6);
const wynik6 = result4("Wpisuję cokolwiek byle nie liczbę.");

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

let draw = Math.random()*10;
console.log(draw);

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu



//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9

for (i = 1; i <= 9; i++) {
    console.log(i);
}

//b) napisz pętlę która odliczy od 9 do 1

for (i = 9; i >= 1; i--) {
    console.log(i);
}

//c) napisz pętlę która odliczy od 5 do 15

for (i = 5; i <= 15; i++) {
    console.log(i)
}

//d) napisz pętlę która odliczy od 0 do -10

for (i = 0; i >= -10; i--) {
    console.log(i);
}

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2

for (i = 1; i <= 20; i = i + 2) {
    console.log(i)
}

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4

for (i = -10; i <= 10; i = i + 4) {
    console.log(i);
}

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...

for (i = 1; i <= 100; i = i * 2) {
    console.log(i)
}

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości

for (i = 1; i <= 10; i++) {
    if (i % 2 == 1)
    console.log(i)
}

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfra jest parzysta czy nie, możesz użyć operatora trójargumentowego

for (i = 1; i <= 10; i++) {
    if (i % 2 == 1)
    console.log('Liczba jest nieparzysta ' + i)
    else
    console.log('Liczba jest parzysta '+ i)
}

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości

function iterate (anyValue) {
    for (i = 1; i <= anyValue; i++) {
    console.log(i)
    }
}

const result7= iterate(5);

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

function iterate2 (anyValue2) {
    for (i = 1; i <= 50; i = i + 3) {
        console.log(i)
    }
}

const result8 = iterate2(3);

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób

const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]

function iterate3() {
    for (i = 0; i < arrNames.length; i++)
    console.log("Cześć " + arrNames[i])
}

const result9 = iterate3();

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.

const arrObjects = [{
    brand: "Mustang",
    color: "niebieski"
}, {
    brand: "Tesla",
    color: "czarna"
}, {
    brand: "Polonez",
    color: "żółty"
}, {
    brand: "Toyota",
    color: "fioletowa"
}];

function iterate4() {
    for (i = 0; i < arrObjects.length; i++)
    console.log("Przed Tobą stoi " + arrObjects[0].color + " " + arrObjects[0].brand)
    console.log("Przed Tobą stoi " + arrObjects[1].color + " " + arrObjects[1].brand)
    console.log("Przed Tobą stoi " + arrObjects[2].color + " " + arrObjects[2].brand)
    console.log("Przed Tobą stoi " + arrObjects[3].color + " " + arrObjects[3].brand)
}

const result10 = iterate4();

//Nie wiem czemu niebieskie Mustang wyświetla się x4...

//m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko parzyste elementy tablicy

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function iterate5() {
    for (i = 0; i < arrNumbers.length; i++)
    if (arrNumbers[i] % 2 === 0)
    console.log(arrNumbers[i])
}

const result11 = iterate5();

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther

const arrTypes = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]

function changePush() {
for (i = 0; i < arrTypes.length; i++) 
   console.log(arrTypes[i]);
}

arrOther = arrTypes.push("Marian", "Marianna", true);

const result12 = changePush();

// - za pomocą push umieści elementy o typie number w tablicy arrNumbers2

const arrTypes2 = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]

function changePush2() {
    for (i = 0; i < arrTypes2.length; i++)
    console.log(arrTypes2[i])
}

arrNumbers2 = arrTypes2.push(1, 2, 3, 4);

const result13 = changePush2();

// - za pomocą push umieści numery parzyste w tablicy arrEven

const arrTypes3 = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]

function changePush3() {
    for (i = 0; i < arrTypes3.length; i++)
    console.log(arrTypes3[i])
}

arrEven = arrTypes3.push(2, 4, 6, 8);

const result14 = changePush3();

// - na końcu zwróci obiekt z tymi trzema tablicami

function createThreeBoards(boards) {}

const arrTypes4 = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]

const arrTypes4Mapped = [];

for (i = 0; i < arrTypes4.length; i++) {
    const boards = {
        three: arrTypes[i],
    }
    arrTypes4Mapped.push(boards);
}

console.log(arrTypes4Mapped);

// Tutaj poległem, nie wiem jak wyświetlić x3 tablice, wyświetla mi się jedna.

//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

const names2 = ["Seba", "Kari", "Mati", "Andżi"]

const newNames = names2.map(function(person2) {
    return `Cześć ${person2}`
})
console.log(newNames)


//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray10 = array10.filter(function(item) {
    return item % 2 === 0;
})

console.log(newArray10)

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

const people = [
    {
      name: "Tomasz",
      lastname: "Kowalski",
      gender: "male",
    },
    {
      name: "Karol",
      lastname: "Nowak",
      gender: "male",
    },
    {
      name: "Joanna",
      lastname: "Kowalska",
      gender: "female",
    },
    {
      name: "Anna",
      lastname: "Nowak",
      gender: "female",
    },
  ];
  
  const women = people.filter((person) => person.gender === "female");
  
  console.log(women);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping = "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny"

const shoppingTable = (list) => {
    const splitTable = list.split(" ");
    const splitTableLowerCase = splitTable.map((element) => element.toLowerCase());
    splitTableLowerCase.sort();
    return splitTableLowerCase;
  };
  
  console.log(shoppingTable(shopping));

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const string = alphabet.reduce((abc, ind) => abc + ind);
const fromBehind = (abc) => abc.split("").reverse().join("");

console.log(fromBehind(string));
