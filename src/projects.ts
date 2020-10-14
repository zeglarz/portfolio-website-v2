import bookmates from './assets/projects/bookmates.png';
import devbook from './assets/projects/devbook.png';
import newsfeed from './assets/projects/newsfeed.png';
import randomperson from './assets/projects/randomperson.png';
import socialape from './assets/projects/socialape.png';
import portfolio from './assets/projects/portfolio.png';

enum Stack {
  js = 'JavaScript',
  ts = 'TypeScript',
  react = 'React',
  sc = 'styled-components/macro',
  fm = 'Framer Motion',
  mui = 'Material UI',
  html = 'HTML',
  css = 'CSS',
  scss = 'SCSS',
  node = 'Node JS',
  express = 'Express',
  api = 'Rest API',
  jquery = 'jQuery',
  bootstrap = 'Bootstrap',
  flutter = 'Flutter',
  dart = 'Dart',
  mongo = 'MonogDB',
  redux = 'Redux',
  postgres = 'PostgreSQL',
  jwt = 'JWT',
  rwd = 'RWD',
  sketch = 'Sketch',
  firebase = 'Firebase',
  formik = 'Formik',
}

interface ILang {
  en: string;
  pl: string;
}

export interface IProjects {
  id: number;
  title: string;
  subtitle: ILang;
  description: ILang;
  stack: Stack[];
  category: string;
  img: string;
  slug: string;
  demoURL: string;
  gitURL: string;
}

export const projects: IProjects[] = [
  {
    id: 1,
    title: 'News Feed API',
    subtitle: {
      en: 'Webpack JavaScript App | Personal Bootcamp Project @ Connectis',
      pl:
        'Aplikacja JavaScript with Webpack | Samodzielny projekt z Bootcampu Connects',
    },
    description: {
      en: `Project features up to date news from all around the world which are delivered by NewsAPI npm 
            module. By selecting country and category of your choice you will be presented with 20 top news 
            cards which are dynamically rendered. You can even filter them out by custom search field.`,
      pl: `Pierwszy samodzielny projekt, jaki wykonałem podczas bootcamp'u organizowanego przez Connectis
            na front-end developera. Głównym założeniem było stworzenie aplikacji wyświetlającej w sposób dynamiczny newsy
            pozyskiwane z zewnętrznego API. Dane dostarczane są przez backend oparty na NodeJS, który to z kolei fetchuje
            je z newsapi.com. Użytkownik ma możliwość wyboru interesującej go kategorii oraz państwa, którego newsy mają
            dotyczyć, po czym renderowanych jest 20 dynamicznych kart z newsami.`,
    },
    stack: [
      Stack.js,
      Stack.html,
      Stack.scss,
      Stack.node,
      Stack.express,
      Stack.api,
      Stack.jquery,
      Stack.bootstrap,
    ],
    category: 'apps',
    img: newsfeed,
    slug: 'newsfeed',
    demoURL: 'https://newsify.konradrudnicki.com',
    gitURL: 'https://github.com/zeglarz/News-Feed-API',
  },
  {
    id: 2,
    title: 'Random Person Generator',
    subtitle: {
      en: 'Flutter Mobile App | Personal Project',
      pl: 'Aplikacja mobilna Flutter | Projekt Samodzielny',
    },
    description: {
      en: `My first Flutter project which I published in Google Play Store. It features generation of random faux
            data of people along with their picture. Data is fetched using external REST API from https://randomuser.me. 
            The project taught me number of things such as working with http requests in Flutter via http package as well
            as it gave me good perspective on OOP, especially helped me grasp a notion of classes. It's simple but, yet I got
            good perspective on a full spectrum of dev cycle from planning, designing, coding to deployment to Google Play
            Store.`,
      pl: `Mój jeden z pierwszych samodzielnych projektów napisany we Flutterze, który zdecydowałem się opublikować 
            w Google Play Store. Aplikacja służy do generowania randomowych danych personalnych fikcyjnych osób, które w 
            łatwy sposób można skopiować do schowka i użyć przy rejestracji w różnych serwisach internetowych, którym nie
            do końca ufamy w kontekście ochrony naszych cennych danych osobowych. Nauczenie się Darta pozwoliło mi lepiej
            zrozumieć zagadnienia związane z Object-orientated programming, a w szczególności sens tworzenia klas oraz 
            statycznego typowania. Pomimo iż sam projekt jest dość proty, pozwolił mi przejść pełną ścieżkę product 
            developmentu, od pierwszego szkicu na kartce papieru, aż po sam deployment do Play Store'a co pokazało mi jak
            wiele wyzwań i przeszkód czeka na drodze developera. Najważniejsza, że udało się dowieźć projekt do końca, 
            a efekt można zobaczyć na własne oczy, pobierając aplikację ze sklepu Google, całkowicie za darmo i bez reklam.`,
    },
    stack: [Stack.flutter, Stack.dart, Stack.mui, Stack.api],
    category: 'mobile',
    img: randomperson,
    slug: 'randomperson',
    demoURL:
      'https://play.google.com/store/apps/details?id=com.konradrudnicki.randompersongenerator',
    gitURL: 'https://github.com/zeglarz/random-person-generator-flutter',
  },
  {
    id: 3,
    title: 'DevBook',
    subtitle: {
      en: 'Create React App | Personal Project',
      pl: 'Create React App | Projekt Samodzielny z Bootcampu Connects',
    },
    description: {
      en: `The app is social media site for developers. It allows users to sign up and create portfolio 
            profile page and see profiles of other users. Logged user is also able to read, write, comment and 
            like posts. Profile page features top user’s repositories from GitHub which are fetched from REST 
             API. Backend is based on NodeJS which connects to MongoDB database. In this project I first used state
             management tool Redux. It helped me got broader understanding of `,
      pl: `Mój autorski pomysł na stworzenie aplikacji webowej dedykowanej developerom. Aplikacja zbydowana została
            przy wykorzystaniu stack-u MERN, czyli React, NodeJS z Express oraz MongoDB, czyli klasyka gatunku. Użytkownik po 
            rejestracji ma możliwość edycji oraz uzupełnieniu swojego publicznego profilu z miejscami pracy, edukacją, 
            oraz umiejętnościami. Dodatkowo po wpisaniu nicku z githuba fetchowane są z wykorzystaniem REST API dane o 
            repozytoriach danego użytkownika wraz z liczbami gwiazdek oraz forków. Zalogowani użytkownicy mają do dyspozycji
            forum, w którym mogą pisać posty, komentować oraz like-ować posty innych użytkowników. Przy tym projekcie po 
            raz pierwszy skorzystałem z najpopularniejszego framework-a do zarządzania stanem, czyli Redux'a, który, dzięki czemu
             nauczyłem się zasad pracy z tym framework-iem oraz lepszego zrozumienia zagadnień związanych z zarządzaniem
            stanem ogólnie.`,
    },
    stack: [
      Stack.mongo,
      Stack.express,
      Stack.react,
      Stack.redux,
      Stack.node,
      Stack.jwt,
    ],
    category: 'apps',
    img: devbook,
    slug: 'devbook',
    demoURL: 'https://devbook.konradrudnicki.com',
    gitURL: 'https://github.com/zeglarz/DevBook',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: {
      en: 'Static Webpage | Personal Project',
      pl: 'Strona Statyczna | Projekt Samodzielny',
    },
    description: {
      en: `My very first portfolio website I've ever built. This project thought me a lot about HTML and CSS. This 
            is my first and probably last frameworkless project as future one are going to be build using React and Angular.
            Even though this project was mainly HTML I tried to separate data into several components which clean the code 
            as well as give me more straight forward way for future updates. 
            I've used few 3rd party libraries, main one was jQuery, but also I used Superslides for main full screen
            slideshow, owlCarousel for charts and Isotope for filtering my projects by categories.`,
      pl: `Mój pierwszy projekt strony - portfolio, którą w dalszym ciągu rozwijam i aktualizuje. Ten projekt nauczył
            mnie wiele odnośnie do pracy z HTML-em CSS-em oraz JavaScript, a w szczególności z biblioteką jQuery. Jest to 
            zapewne mój ostatni projekt bez frameworku, kolejne będą wykorzystywały takie frameworki jak m.in. React i 
            Angular. Strona pokazuje moje podejście do designu, prezentacji danych oraz drobnych smaczków w postaci 
            animacji. Do zbudowania strony posłużyłem się w dużej mierze Boostrapem, jednak uzupełniłem go o wiele customowych
            elementów od siebie np. z wykorzystaniem Flexbox'a. Strona zbudowana zgodnie z filozofią 'mobile first', zatem
            jest w pełni responsywna, czyli tak jak być powinno.`,
    },
    stack: [
      Stack.html,
      Stack.js,
      Stack.css,
      Stack.jquery,
      Stack.bootstrap,
      Stack.rwd,
      Stack.sketch,
    ],
    category: 'web',
    img: portfolio,
    slug: 'portfolio',
    demoURL: 'https://konradrudnicki.com',
    gitURL: 'https://github.com/zeglarz/portfolio-webpage-v1',
  },
  {
    id: 5,
    title: 'BookMates',
    subtitle: {
      en: 'React Create App | Team BootCamp Final Project',
      pl:
        'React Create App | Projekt zespołowy zaliczeniowy BootCamp Connectis ',
    },
    description: {
      en: `Project BookMates was coded by group of 4 people as final assignment for Connectis' C_School Full 
            Stack Boot Camp. App is build using React in front-end, NodeJS in back-end coupled with PostgreSQL. The main
            goal of a project was to deliver an app that will connect people interested in books. My field of responsibility
            is to implement fetching book data using Google REST API, connecting with SQL database in the backend and 
            handling searching and presenting of the book data on the front-end. All of the requirements were fulfilled 
            `,
      pl: `Projekt grupowy, który był końcowym projektem zaliczeniowym bootcampu full-stackowego, który odbywałem 
            na przełomie roku 2019/2020 w Connectis w Warszawie. Zespół poza mną liczył 3 osoby. Głównym założeniem projektu
            było storzenie serwisu spłecznośćiowego skupiającego miłośników książek. Moja odpowiedzialność za 
            projekt polegała zarówno na front-endzie jaki i back-endzie. Jeśli chodzi o back-end, oparty on został na 
            NodeJS oraz Expressie. Zajmowałem się tworzeniem endpointów oraz pisaniu logiki do przetwarzania danych 
            o książkach, użytkownikach oraz komunikacją z bazą danych PotgreSQL. Wykorzystałem w tym 
            celu bazę danych Google Boooks, z którym komunikowałem się przez interfejs API. Na front-endzie pracowaliśmy w Reakcie 
            i tutaj odpowiadałem, za prezentację książek użytkownikom, formularz ręcznego dodania książki, wyszukiwania 
            książki, oraz indywidualne strony książek wraz z możliwością oceniania ich przy pomocy gwiazdek.`,
    },
    stack: [
      Stack.react,
      Stack.postgres,
      Stack.js,
      Stack.node,
      Stack.express,
      Stack.scss,
    ],
    category: 'apps',
    img: bookmates,
    slug: 'bookmates',
    demoURL: 'https://bookmates.krzysztofziemski.com',
    gitURL: 'https://github.com/KrzysztofZiemski/bookmates',
  },
  {
    id: 6,
    title: 'Social Ape',
    subtitle: {
      en: 'Gatsby | Follow Along Project',
      pl: 'Gatsby | Prejekt Tutorialowy',
    },
    description: {
      en: `This was a follow along guide on how to create twitter clone app which I decided to undertake for the purpose of familiarizing myself
            with Firebase services. This over 11 hour tutorial was very helpful with conveying ins and outs of firebase
            functionality such as storage, cloud functions, authentication and authorization and last but not least to
            perform CRUD operations on non-sql database provided by Firebase. The project gave me some more practice with
            state management tool Redux. I made some twists and turns to tweak this follow-along project to my liking. 
             For example, I made use of skeleton loading for the first time which is more modern approach over old turning
             wheel when data loads. More and more big apps are using it nowadays and basically what it is, is as the name
             suggest seeing a skeleton in form of blocks and circles which pulse in exact place of where data is going to 
             reveal itself when it's been fetched.`,
      pl: `Projekt tutorial-owy, który podjąłem w celu nauczenia się korzystania z funkcjonalności dostarczonej przez
            serwis Firebase i polegał on na stworzeniu klona Twitter'a. ten ponad 11-godzinny kurs pozwolił mi nauczyć się korzystać ze storage, cloud functions, 
            jak i komunikacji z nierelacyjną bazą danych oraz uwierzytelniania użytkownika. Tutorial pozwolił mi również 
            utrwalić wiedzę związaną z wykorzystywaniem Redux'a do zarządzania stanem aplikacji. Pewnym smaczkiem wprowadzonym przeze
            mnie było wprowadzenie tzw. skeleton loadingu, czyli wyświetlania szkieletu treści, które dopiero są fetchowane,
            zamiast przestarzałego już podejścia, czyli tzw. loader'a najczęściej pod postacią kręcącego się kółka.`,
    },
    stack: [Stack.react, Stack.js, Stack.redux, Stack.firebase, Stack.scss],
    category: 'apps',
    img: socialape,
    slug: 'socialape',
    demoURL: 'https://socialape-659f4.web.app',
    gitURL: 'https://github.com/zeglarz/socialape-firebase-frontend',
  },
  {
    id: 7,
    title: 'Portfolio Website v2',
    subtitle: {
      en: 'Create React App TypeScript | Personal Portfolio v2',
      pl: 'Create React App TypeScript | Portfolio Personalne 2 odsłona',
    },
    description: {
      en: `The second version of my portfolio website, this time made with React. The development process was very
challenging and full of various pitfalls, I learned a lot during this time. I must admit that the hardest part of this
project was to learn TypeScript and make the compiler happy for the most part. I won't be lying to say that I had a few moments of doubt and had thoughts of going back to plain old JavaScript, but I forced my way through, and I will never forget this lesson. Hopefully, will I have a bright future in my next TS endeavors. For the
visual part of the website, I worked with Styled-Components which I learned to love and won't ditch it for other styling solutions anytime soon. I also gave a shot and try my best with Framer-Motion in regard to making
my page more visually appealing with help of animations. Working with framer-motion proved easier than I initially
had thought, I'm very happy with the final result, and I hope you would enjoy it too as well.`,
      pl: `Druga odsłona mojego osobistego portfolio, tym razem napisana w Reakcie. Projekt ten okazał się dużym
             wyzwaniem, podczas którego nauczyłem się wielu nowych rzeczy. Pierwszą i najważniejszą jest TypeScript. Jest
             to pierwsza strona od postaw napisana w tymże języku. Nie ukrywam, że krzywa uczenia była przy tym projekcie
             dość stroma, miałem kilka momentów zwątpień, kiedy kompilator rozbłyskiwał czerwonymi kolorami niczym choinka
              i myślałem o powrocie do starego poczciwego JavaScript-a, ale nie,
              powiedziałem sobie, że się nie poddam! I nie żałuje tej decyzji, gdyż nie tylko udało mi się dowieźć ten projekt do końca,
              ale chyba nawet polubiliśmy się na tyle, że kompilator już tak często się na mnie nie złości.`,
    },
    stack: [
      Stack.react,
      Stack.ts,
      Stack.sc,
      Stack.fm,
      Stack.mui,
      Stack.formik,
      Stack.sketch,
    ],
    category: 'apps',
    img: portfolio,
    slug: 'portfolio-v2',
    demoURL: 'https://socialape-659f4.web.app',
    gitURL: 'https://github.com/zeglarz/socialape-firebase-frontend',
  },
];
