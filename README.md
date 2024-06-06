# breakout-mania

Erstelle ein vollständiges Breakout-Spiel für den Browser mit den folgenden Anforderungen und Details:

Spielziel:
Der Spieler steuert ein Paddle, um einen Ball zu reflektieren, der Blöcke am oberen Rand des Bildschirms zerstört. Ziel ist es, alle Blöcke zu zerstören, ohne dass der Ball den unteren Rand des Bildschirms erreicht.

Funktionalitäten:

Steuerung:

Der Spieler verwendet die Pfeiltasten (links und rechts), um das Paddle zu bewegen.
Optional: Unterstützung für Maussteuerung, bei der das Paddle der horizontalen Bewegung des Mauszeigers folgt.
Gameplay:

Der Ball bewegt sich kontinuierlich und prallt von Wänden, dem Paddle und den Blöcken ab.
Der Ball darf den unteren Rand des Bildschirms nicht berühren; andernfalls verliert der Spieler ein Leben.
Kollisionserkennung:

Implementiere eine präzise Kollisionserkennung:
Ränder: Der Ball prallt korrekt von den linken, rechten und oberen Bildschirmrändern ab.
Blöcke: Der Ball prallt korrekt von Blöcken ab und zerstört den Block bei einem Treffer.
Paddle: Der Ball prallt vom Paddle ab, wobei der Reflexionswinkel von der Aufprallposition auf dem Paddle abhängt.
Levels:

Implementiere drei Levels mit zunehmendem Schwierigkeitsgrad:
Level 1: Einfache Anordnung der Blöcke, geringere Ballgeschwindigkeit.
Level 2: Komplexere Anordnung der Blöcke, mittlere Ballgeschwindigkeit.
Level 3: Fortgeschrittene Anordnung der Blöcke, höhere Ballgeschwindigkeit.
Level-Übergang:

Automatischer Übergang zum nächsten Level nach Zerstörung aller Blöcke.
Optional: Kurze Benachrichtigung wie "Level Up!" zwischen den Levels anzeigen.
Lebenssystem:

Der Spieler startet mit 3 Leben.
Ein Leben geht verloren, wenn der Ball den unteren Rand berührt.
Bei Verlust aller Leben endet das Spiel und zeigt "Game Over" an.
Punktesystem:

Punkte werden für jeden zerstörten Block vergeben.
Unterschiedliche Punktwerte für verschiedene Blockarten (falls vorhanden).
Animationen und Effekte:

Einfache Animationen für den Ball, das Paddle und die Blockzerstörung.
Effekte wie Partikel oder kleine Explosionen beim Zerstören von Blöcken hinzufügen.
Musik und Soundeffekte:

Hintergrundmusik während des Spiels.
Soundeffekte für das Treffen von Blöcken, das Aufprallen des Balls auf das Paddle und das Verlieren eines Lebens.
Responsive Design:

Das Spiel sollte auf verschiedenen Bildschirmgrößen gut funktionieren, einschließlich Desktop, Tablet und Mobilgerät.
Speicherung und Fortsetzung:

Optional: Möglichkeit, den Spielfortschritt zu speichern und später fortzusetzen.
Technische Details:

Technologien:

Verwende HTML5 für die Struktur.
Nutze CSS3 für die Gestaltung.
Setze JavaScript (oder TypeScript) für die Logik und Interaktivität ein.
Verwende die Canvas API für die Spielgrafiken und Animationen.
Spielphysik:

Implementiere einfache 2D-Physik für die Ballbewegung und Kollisionen.
Friktion und Gravitation sind nicht notwendig.
Benutzeroberfläche:

Einfache und intuitive Benutzeroberfläche mit einer Startseite, Spielanleitung, Spielbereich und einem Spielende-Bildschirm.
Anzeige des aktuellen Levels, der Punkte und der verbleibenden Leben während des Spiels.
Optimierung:

Optimiere die Performance für flüssige Animationen.
Minimiere die Ladezeiten durch effiziente Ressourcenverwaltung.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/breakout-mania.git
cd breakout-mania
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
