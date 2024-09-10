# reduxvecka37


Code along övningen idag:
actions/actions.js - Här lägger du dina Redux-actions, som att lägga till, ta bort eller markera som köpt.
reducers/reducer.js - Din reducer hanterar hur state ändras baserat på actions.
store/store.js - Här skapar du din Redux Store genom att kombinera dina reducers.
selectors/selectors.js - Selectors för att hämta specifik data från Redux Store, såsom köpta och icke-köpta varor.
components/App.js - Huvudkomponenten där du bygger applikationen med React.
Applikationen: Ska vara en shoppinglista.
Beskrivning: I detta exempel skapar vi en enkel shoppinglista där användare kan lägga till och ta bort varor med hjälp av Redux Actions och Reducers
Start projektet så vi kan se resultat.




Redux övning:
Övning 2: Enkla anteckningar med kategoriindelning
Kravlista / Instruktioner:
Anteckningslista:
Skapa en komponent för att visa en lista över anteckningar. Varje anteckning bör ha:
En titel
En beskrivning
En kategori
En unik ID (som genereras automatiskt)
Lägg till anteckning:
Skapa ett formulär för att lägga till en ny anteckning med följande fält:
Titel (textfält)
Beskrivning (textfält)
Kategori (dropdown med några fördefinierade kategorier, t.ex. Arbete, Privat, Viktigt)
När användaren klickar på "Lägg till anteckning" ska anteckningen skapas och läggas till i listan.
Ta bort anteckning:
Varje anteckning i listan ska ha en knapp för att ta bort anteckningen.
När användaren klickar på "Ta bort" ska anteckningen tas bort permanent från listan.
Uppdatera anteckning:
Varje anteckning ska kunna redigeras. När användaren klickar på "Redigera" ska användaren kunna uppdatera titeln, beskrivningen och kategorin.
Ändringarna ska uppdateras direkt i anteckningslistan.
Filtrera efter kategori:
Lägg till en dropdown längst upp i appen som låter användaren filtrera anteckningarna baserat på vald kategori.
Om en kategori väljs ska bara anteckningar som tillhör den kategorin visas.
Bonuskrav (frivilligt):
Implementera validering för formulären (ingen tom titel eller beskrivning).
Implementera en sökfunktion för att söka efter specifika anteckningar.
Övning 2: Enkla anteckningar med kategoriindelning
Anteckningar - Wireframe
markdown


---------------------------
|    Filtrera per kategori  |
---------------------------
| Kategori: [Alla] ▼       |
---------------------------
|    Anteckningslista       |
---------------------------
| Titel     | Kategori      |
---------------------------
| Möte      | Arbete        |  [Redigera] [Ta bort]
| Inköp     | Privat        |  [Redigera] [Ta bort]
----------------------------
[Lägg till ny anteckning]
----------------------------
| Titel: ______             |
| Beskrivning: ______       |
| Kategori: [Privat] ▼      |
[Skapa anteckning]
----------------------------
Interaktioner:
En dropdown för att filtrera anteckningar baserat på kategori.
En anteckningslista med alternativ för att redigera och ta bort varje anteckning.
Ett formulär för att skapa nya anteckningar längst ner på sidan.
Redux Store:
De behöver konfigurera en Redux Store som innehåller deras reducer och actions. Detta är nödvändigt för att hantera applikationens state globalt.
React-Redux Provider:
För att använda Redux i en React-applikation måste de använda <Provider> från React-Redux och omsluta sin app-komponent för att tillhandahålla Store till alla komponenter i applikationen.
useSelector och useDispatch:
useSelector: används för att få åtkomst till data från Redux Store.
useDispatch: används för att skicka (dispatch) actions till Store.
Redux DevTools (valfritt men rekommenderat):
Konfiguration av Redux DevTools i Store för att lättare felsöka och följa state-ändringar.
Övning 2: Enkla anteckningar med kategoriindelning
Krav:
Redux Store:
Skapa en Store i en separat fil och koppla in reducer för anteckningar i Store. Konfigurera Redux DevTools för enkel felsökning.
Provider:
Omslut huvudkomponenten med <Provider> för att tillhandahålla Store till hela applikationen.
useSelector och useDispatch:
Använd useSelector för att hämta anteckningslistan från Store.
Använd useDispatch för att lägga till, ta bort och uppdatera anteckningar samt filtrera anteckningar baserat på kategori.