# Todo-app

## Om projektet

Det här är en Todo-app som jag har byggt med React. Man kan lägga till nya uppgifter, markera dem som klara, och tar bort uppgifter. Jag har också lagt till en räknare som visar hur många uppgifter som är kvar.

Jag har delat upp koden i olika komponenter för att göra den enklare att förstå och hålla ordning på.

## Frågor om koden

1. State-hantering

Jag använder useState för att spara uppgifterna i min app och hålla koll på vilka som är klara. När jag lägger till, tar bort eller markerar en uppgift ändras state, och då uppdateras sidan automatiskt.

2. Oföränderlighet (Immutability)

Man ska inte ändra en array direkt med till exempel .push() annars kan React inte se ändringen. I stället skapar man en ny array så att React kan upptäcka ändringen. I min kod använder jag [...todos, newTodo] för att lägga till en uppgift och filter() för att ta bort en.

Kodgranskning

Ett problem i den här koden är att push() ändrar den gamla arrayen direkt

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}

Jag skulle i stället skapa en ny array:

function addTodo(todos, text) {
  return [...todos, text];
}

Då behåller jag de gamla uppgifterna och lägger till den nya utan att ändra den gamla arrayen med todos.push.


3. Problemlösning & Reflektion

När jag fastnade försökte jag först förstå vad som var fel och testade olika lösningar. Jag använde AI och sökte på nätet för att få hjälp. Till exempel tog jag hjälp för att förstå hur `useState` fungerar och hur sidan uppdateras när man ändrar en uppgift. Sedan testade jag själv i koden för att se att det fungerade.


Videoredovisning

Här finns min videoredovisning:

**[https://funet-my.sharepoint.com/:v:/g/personal/3ggyhmu26_shwema_folkuniversitetet_nu/IQDLxZTY93WzT7kLQUVA0jSCAaBxw2UXFuEqIiutsfAF0kE?e=Q84myN&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbE1vZGUiOiJtaXMiLCJyZWZlcnJhbFZpZXciOiJwb3N0cm9sbC1jb3B5bGluayIsInJlZmVycmFsUGxheWJhY2tTZXNzaW9uSWQiOiJmYWY4YTg3NS0yZWJhLTRhYWQtYmNhMy00MDQyYzQ5NjYxNTEifX0%3D]**
