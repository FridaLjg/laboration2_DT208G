# Laboration 2 - DT208G
I denna laboration har jag skapat en applikation där man kan lagra olika uppgifter som ska göras, t.ex. handla. Man kan också fylla i vilken prioritet uppgiften har. Uppgiften lagras i tabellen när man klickar på knappen ”Lägg till uppgift”. För att lösa laborationen har TypeScript används i två olika filer, main.ts och classes.ts.

I classes.ts finns interfacet ”Todo” som definierar hur en uppgift ska se ut. Klassen ”TodoList” hanterar en samling av Todo-objekt och lagrar dem i en array (”todos”). När klassen skapas laddas tidigare uppgifter som finns sparade från localStorage med hjälp av en konstruktor och metoden loadFromLocalStorage. Metoden ”saveToLocalStorage” sparar ”todos” till localStorage. Metoden ”addTodo” validerar och lägger till nya uppgifter. Metoden markTodoCompleted ändrar om en uppgift är markerad färdig eller inte. Metoden ”getTodos” hämtar hela listan av lagrade ”todos”. Metoden ”removeTodo” lades också till, för att kunna radera ”todos”.

Interfacet ”Todo” och klassen ”TodoList” exporteras till filen main.ts. I denna fil skapas HTML-strukturen samt interaktion på sidan genom exempelvis funktionen ”createTodoRow” som skapar rader i tabellen, och funktionen showTodosSortedByPriority som sorterar uppgifterna efter prioritet. 

## Om
Av: Frida Ljungberg, 2026

### Länk till webbplats
https://laboration1dt208g.netlify.app/