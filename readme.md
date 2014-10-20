# HM-App

## Benutzung

### Start des Servers und Auslieferung der Dateien ins 'dist' Verzeichnis

	gulp serve

### Start der Datenbank

	./starte-db

---

## Ü CSS (2), Fragen

### Zeitdokumente

* Wie verändert sich die Darstellung, wenn als Bildquelle img/hm mit bk tragelehn.jpg zuweisen? (diese Alternative ist im HTML Dokument auskommentiert)

	Anderes Bild erscheint.

* Welche Attribute sind für diese Änderung verantwortlich?

	Element 'src'

* Ist die Zuweisung des Schrifttyps in der Regel für #zeitdokumente erforderlich?

	Nein, das wird im 'body' schon zugewieen und #zeitdokumente erbt diese Eigenschaft.

### Einführungstext

* Warum ist die explizite Zuweisung von font-family hier erforderlich?

	So wie es hier umgesetzt wird ist die explizite Zuweisung notwendig, da nur für diese ID eine andere Schrift verwendet wird.
	Besser ist es allerdings eine Klasse für diesen Überschriftentyp zu definieren und sie dieser Überschrift zuzuweisen.

* Wie wird das ‘Abschneiden’ des Texts umgesetzt?

	Mit 'max-height' und 'overflow: hidden' für das umgebende Element.
	Man könnte aber genauso gut 'overflow-y: hidden' einsetzen.

* Wie erfolgt die Positionierung des Pfeils vor ‘weiter lesen’?

	Mit 'background-position: left center' der PNG-Datei.
	Besser wäre hier ein Icon-font zu benutzen und als Pseudo-Klasse mit Attribut 'before' einzubinden!

### Verknüpfungen, 'Mehr dazu...'

* Welche Strukturelemente werden hierfür verwendet? Sind anwendungsspezifische Elemente (div, span) erforderlich?

	Da es sich um eine Liste von Navigationselementen handelt,
	wurde hier ein \<nav\> Element mit \<ul\> und \<li\> Elementen verwendet.

* Welche Elemente verwenden die gestrichelte Linie als Umrandungs- bzw. Trennlinie?

	Das umgebende \<section\> Element mit border-Attribut für die Umrandung und die einzelnen \<li\> Elemente
	mit border-bottom-Attribut.

* Wie wird die Bündigkeit von Trennlinie und der Bezeichnung der Optionen ‘Ort’ und ‘Zeit’
  umgesetzt, und wie der gemeinsame Abstand zur Umrandung?

  	Indem die Listenelemente margin-left: 10px bekommen und die Kind-Elemente 'a' jeweils padding-left: 0px und
  	'margin-left: 0px' erhalten.

* Welche Property ist für die Großschrift der Überschrift verantwortlich?

	text-transform: uppercase;

* Wie wird das Unterstreichen der Links in den \<a\>-Elementen unterbunden?


	ul {list-style-type: none;}

## Ü CSS (3) Einzelne Gestaltungselemente (20 Punkte)
Setzen Sie die Elemente ‘Medienverweise’, ‘Textauszug’, ‘Objekt’ entsprechend den nachfolgend skizzierten und umseitig abgebildeten Gestaltungsvorgaben um.

### Anforderungen
1. Medienverweise

	* Überschrift (1P.)
	* Titelliste (1P.)
	* Hintergrund (1P.)
	* Trennlinien mit Rand (2P.)
	* Keine Trennlinie unter dem letzten Titel (1P.)
	* Pfeil (2P.)

2. Textauszug

	* Schneiden Sie unter Verwendung von CSS längere Texte nach unten ab (2P.)
	* Verwenden Sie anwendungsspezifisches ‘semantisches Markup’ für die Textstruktur (3P.)
	* Titel (1P.)
	* Text (1P.)
	* Verknüpfung mit Pfeil (2 P.)

3. Objekt

	* Titel (1P.)
	* Kringel (1P.)
	* Bild (1P.)

## U CSS (4) Realisierung des Gesamtlayouts, Aufgabe (9 Punkte)

Stellen Sie die drei in Ü CSS (3) bearbeiteten Elemente, wie oben gezeigt, nebeneinander in einem Spaltenlayout dar.

### Anforderungen

1. Vom Elementtyp ‘Medienverweise’ sollen wie in der Abbildung zu Ü HTM3 zwei Exemplare verwendet werden. (1 P.)
2. Die Elemente sollen, wie in der Gestaltungsvorlage vorgesehen, nach oben bündig abschließen. (1 P.)
3. Die links außen platzierte Spalte sollbündig mit der Überschrift (‘Die Umsiedlerin’) abschliessen. (1 P.)
4. Der Abstand zwischen den Spalten soll 20px betragen. (1 P.)
5. Verhindern Sie, dass bei Verkleinerung der Breite des Browserfensters die Anordnung der Spalten geändert wird. (2 P.)
6. Ermöglichen Sie, dass bei Verkleinerung der Breite des Browserfensters die Ansicht der Spalten insgesamt horizontal scrollbar ist (2 P.), ohne dass der Titel der Ansicht (‘Die Umsiedlerin’) beim Scrollen verschoben wird (1 P.).

### Bearbeitungshinweise
* Anforderung 5: dafür können Sie z.B. dem Mutter-Element der Spalten eine fixe Breite zu- weisen. Anhaltspunkte hierfür finden Sie auch in den Implementierungsbeispielen zu den JSL Übungen.
* Anforderung 6: Ziehen Sie dafür z.B. in Betracht, ein zusätzliches div Element einzuführen, das mit der overflow Property für horizontales Scrolling versehen wird.

## Ü JSL (1) Implementierungsbeispiele, Fragen + Hinweise
### Spaltenlayout
* Wie ist die Nebeneinander-Anordnung der beiden \<section\> Elemente umgesetzt?


	section: {float: left;}

* Welche Rolle spielt dabei die Breitenzuweisung an das Element mit ID articlecontent?
– Reduzieren Sie dafür die Breite z.B. auf 700px und schauen Sie sich den Unterschied an.

	Die Breite des umgebenden Elementes muss mindestens so breit wie die Gesamtbreite der darin floatenden Elemente sein.

* Als Alternative zur Verwendung von float könnten Sie ein inline-block Element in Verbindung
  mit einer geeigneten vertical-align Property verwenden.

	Oder ein anderes box Modell: flexbox!

### Scrolling
* Verkleinern Sie die Breite des Browserfensters so, dass nur noch ein Ausschnitt der Ansicht zu sehen ist.
* Ihnen sollte jetzt die Möglichkeit gegeben sein, die Ansicht horizontal zu scrollen.
* Durch welche Style-Property auf \<article\> wird dies erreicht?


	overflow-x: scroll;

### Positionierung von Elementen
* Wodurch wird die Positionierung des Toasts im unteren Bereich des Browserfensters herbeigeführt?


	 .toast {bottom: 15%;
        left: 20%;
        position: fixed;
     }

### DOM Zugriff
Einen Überblick über die Ausdrucksmittel zur DOM Manipulation erhalten Sie anhand einer Betrachtung aller Methoden
  im demo.js Skript und einer Vergegenwärtigung von deren Funktionalität anhand Ihrer Interaktion mit der Beispielanwendung.

### Einblenden/Ausblenden
* Wie wird das Einblenden des ‘Toasts’ bzw. das Ausblenden der \<section\> Elemente in JavaScript veranlasst?


		<button onclick="showToast()">Show Toast</button>

		function showToast() {
			var toast = document.querySelector(".toast");
			// set the current time on the toast
			var currenttime = new Date();
			toast.textContent = currenttime.getHours() + ":" + currenttime.getMinutes();
			toast.classList.toggle("active");
			setTimeout(function() {
				toast.classList.toggle("active");
			}, 3500);
		}

* Was ist auf Ebene von JavaScript erforderlich, um den ‘Toast’ nach einer gewissen Verweildauer wieder ausblenden zu können?

	Die setTimeout Funktion mit Zeitparameter.


		setTimeout(function() {
						toast.classList.toggle("active");
					}, 3500);

* Alternativ hierzu wäre evtl. die Verwendung einer CSS Animation eine elegantere Alternative.

	CSS ist immer eleganter...

## Ü JSL (2) Umsetzung der Kopfzeile

### Anforderungen
1. Merkmale:

	* Fixe Höhe (1 P.)
	* Hintergrund (1 P.)
	* Beschriftung (1 P.)

### Bearbeitungshinweise
* Wählen Sie zur Realisierung des ‘Zurück’ Bedienelements ein geeignetes HTML Element, z.B. \<a\> oder \<button\>.

## Ü JSL (3) Umsetzung der Detailansicht (8 Punkte)
### Aufgabe
Setzen Sie die nachfolgend beschriebene Detailansicht für Ihr Gestaltungselement ‘Textauszug’ so um, dass Gesamtansicht und Detailansicht dieselbe Dokumentstruktur verwenden und sich nur hinsichtlich der zugewiesenen Attribute unterscheiden.

### Anforderungen
* Überschrift wird aus der Gesamtansicht übernommen (z.B.‘Die Umsiedlerin’). (1P.)
* ‘Textauszug’ Überschrift ist nicht sichtbar. (1P.)
* Hintergrund komplett weiß, kein Grau sichtbar. (1 P.)
* Der gesamte Text des ‘Textauszug’ Elements soll dargestellt werden. (1 P.)
* Kein horizontales Scrolling. (1 P.)
* ggf. vertikales Scrolling. (1 P.)
* Text soll die gesamte Breite des Fensters mit Abständen in Anlehnung an die Gestaltungsvorlage einnehmen. (1 P.)
* Kopfzeile soll bei vertikalem Scrolling fix bleiben. (1 P.)

### Bearbeitungshinweise
* Verwenden Sie als Grundlage das in den zurückliegenden Übungen verwendete HTML Dokument, welches auch die anderen von Ihnen umzusetzenden Gestaltungselemente enthält.
* Versuchen Sie durch geeignete Verbindung von class und id Attributen sowie CSS Regeln alle anderen Elemente auszublenden und nur ‘Textauszug’ als Detailansicht darzustellen.
  Je nach gewählter HTML Struktur ist ggf. auch die Verwendung zusätzlicher div Elemente erforderlich.
* Wenn Sie die Attribute wieder entfernen/modifizieren, sollte ohne weitere Änderung am CSS wieder die Gesamtansicht angezeigt werden.

## JSL (4) Ansichtsübergang
### Aufgabe
Implementieren Sie in JavaScript den Übergang zwischen der Gesamtansicht und der von Ihnen in Ü JSL3 entwickelten Detailansicht sowie den Übergang zurück in die Gesamtansicht.

### Anforderungen
* Die Übergänge sollen ohne Neuladen eines HTMLDokuments, ohne Entfernung von Elementen aus dem DOM Objekt und ohne Verwendung redundanter Inhalte umgesetzt werden. (4 P.)
* Der Übergang in die Detailansicht wird durch Betätigung von ‘Weiterlesen’in ‘Textauszug’ ausgeöst, die Rückkehr in die Gesamtansicht durch Betätigung von ‘Zurück’ auf der in Ü JSL (2) umgesetzten Kopfzeile. (3 P.)

### Bearbeitungshinweise
* Ihr Javascript sollte die in Ü JSL (3) manuell erstellten Zustände Ihres Dokuments für die Detailansicht und die Gesamtansicht durch geeignete Verwendung der DOM API herbeiführen.
* Anforderung 1: redundant wäre z.B. die Verwendung zweier Elemente mit Texten unterschiedlicher Länge, um das ‘Abschneiden’ des Textauszugs in der Gesamtansicht gegenüber dem vollständigen Text in der Detailansicht zu realisieren.

## Ü JSL (5) Aus- und Einblenden (5 Punkte)
### Aufgabe
Bauen Sie ein ‘Ausblenden’/‘Einblenden’ der Ansichten in den in Ü JSL (4) umgesetzten Ansichtsübergang ein.

### Anforderungen
* Nach Auslösung eines Ansichtsübergangs durch den Nutzer soll zunächst die aktuelle Ansicht 2 Sekunden lang ausgeblendet werden. Danach soll die neue Ansicht 2 Sekunden lang einge- blendet werden. (3 P.)
* Die Kopfzeile wird nicht durch das Ausblenden/Einblenden beeinflusst, d.h. sie soll dauerhaft unverändert sichtbar sein. (2 P.)

### Bearbeitungshinweise
* Für das Aus/Einblenden können Sie die Style-Property opacity verwenden.
* Ziehen Sie z.B. in Betracht, die Änderung der opacity-Property für das gemeinsame Wurzelelement der Ansicht unterhalb der Kopfzeile umzusetzen, falls ein solches in Ihrer HTML Struktur existiert.
* Den Ansichtswechsel nach 2 Sekunden können Sie mittels der Methode setTimeout() veranlassen. Dieser können Sie eine Methode als Argument übergeben, die die für den Ansichts- wechsel erforderlichen DOM Änderungen durchführt.
Eine Vorlage für die Verwendungvon setTimeout() finden Sie in der Umsetzung des ‘Toasts’ in den Implementierungsbeispielen.

## Ü JSR (1) Implementierungsbeispiele
### XMLHttpRequest



