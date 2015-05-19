# Excercises WS 14/15
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
(...)

## NJM
### NJM0 Vorbereitende Maßnahmen
* Laden Sie die NodeJS Binaries aus dem Moodle und importieren Sie diese ebenfalls in Eclipse. Es wird ein Projekt Binrunnable erstellt.
* Laden Sie von http://www.mongodb.org/downloads die für Ihre Plattform geeignete MongoDB Version des Production Releases herunter und entpacken Sie die Archivdatei in Ihr Binrunnable Projekt.
* überprüfen Sie das für Ihre Plattform zu nutzenden Skript mdb.sh/mdb.bat. Dieses sollte das mongod Executable aus der MongoDB Installation im Binrunnable Projekt referenzieren. Nehmen Sie hier ggf. eine Anpassung vor.
* Führen Sie zunächst das mdb Skript im Beispielprojekt aus – dafür können Sie die Konsolenansicht von Aptana verwenden. Damit wird der MongoDB Server gestartet.
* Führen Sie dann das njs aus. Dieses startet den NodeJS Webserver.
* Öffnen Sie die URL, unter der IhreWebanwendung in NodeJS gestartet wird,im Browser. Ihnen sollte eine Liste mit Werkstiteln angezeigt werden.
* Wählen Sie einen Titel aus. Ihnen sollte dann eine ‘leere Gesamtansicht’ für den betreffenden Titel angezeigt werden.
* Falls Sie einen Fehler bekommen, dann ersetzen Sie im Skript webserver.js in den Implementierungsbeispielen die ip Variable im Aufruf von server.listen(ip,port durch den String 127.0.0.1 und starten Sie njs neu.

#### Sonstiges
[Demovideo](https://connect.oncampus.de/p2231hw1w59/)

### Übung NJM1 Beispielanwendung
Schauen Sie sich noch einmal das ‘Big Picture’ der Interaktion zwischen den Komponenten der Beispielanwendung in der [Beispielanwendung](http://moodle.oncampus.de/modules/ir493/onmod/IAMNJM/nodejs/grund.shtml) an.
Versuchen Sie, den kompletten Durchlauf eines Aufrufs einer CRUD Methode nachzuvollziehen, beginnend mit der Ausführung einer Aktion durch den Nutzer auf Ebene der graphischen Nutzeroberfläche. Schauen Sie sich dafür die nachfolgend genannten Skripte und Funktionen an.

```webcontent/js/controller/TopicviewViewController.js```
und
 ```TopicviewCRUDOperations.js: createTopicview(), readTopicview(), updateTopicview(), deleteTopicview()```


* Wann wird die Ansicht aktualisiert? Unmittelbar nach der Nutzereingabe oder erst, wenn die Aktion erfolgreich auf Serverseite durchgeführt wurde?
```webserver.js: Callback-Funktion von createServer()```

* Auf welcher Grundlage wird entschieden, ob ein HTTP Request mit der Auslieferung eines statischen Dokuments erwidert wird oder ob die Bearbeitung des Requests durch das Skript ```http2mdb`` erfolgt?

* Was muss auf Seiten von TopicviewViewController.js getan werden, damit die CRUD Operationen durch http2mdb bearbeitet werden können?```njsimpl/http2mdb.js: processRequest()``` sowie ```doGet()```, ```doPost()```, ```doPut()``` und ```doDelete()```

* nach welchem Kriterium erfolgt die Weiterverarbeitung der Anfrage, die an processRequest() übergeben wird?
```http2mdb.js: readTopicview(), createTopicview()``` etc.

* Wie erfolgt in diesen Funktionen das Zusammenspiel zwischen ggf. dem Auslesen des HTTP Request Body, dem Aufruf der betreffenden CRUD Funktion der MongoDB API, sowie der Erzeugung des HTTP Response?

* In welchen Funktionen liegt eine ‘Verschachtelung’ mehrerer Callback-Funktionen vor, d.h. die Verwendung von Callbacks in Callbacks? Weshalb ist dies an den betreffenden Stellen erforderlich?

#### Sonstiges
[Demovideo, Beispiele zu NJM+FRM](https://connect.oncampus.de/p3jlxxtcmrg/)

### Übung NJM2 CRUD für ‘Objekt’

#### Aufgabe
Implementieren Sie die Operationen ```create```, ```update``` und ```delete``` für Objekt-Elemente und zeigen Sie Objekt-Elemente in der Topic-Ansicht an.
Erforderlich sind hierfür nur client-seitige Implementierungsmaßnahmen.
Alle serverseitigen Operationen sind bereits umgesetzt. Diese Aufgabe ist eine ‘Vorstufe’ für die Aufgabe NJM3, die Sie in NJM3 erweitern werden.
Insbesondere werden Sie dort auch die ```read``` Operation bezüglich der mit Topic-Ansichten assoziierten Objekten umsetzen.

#### Anforderungen
1. Die Objekte sollen über die folgenden Attribute verfügen: ```src```, ```title``` und ```description```. (1 P.)

2. Objekte sollen anhand der serverseitig zugewiesenen id identifiziert werden. (1 P.)

3. Setzen Sie die Operationen durch Ausführung eines ```XMLHttpRequest``` bezüglich des mittels ```webserver.js``` gestarteten NodeJS Servers um. (3 P.)

4. Weisen Sie beim Aufruf von ```create``` einen Wert Ihrer Wahl für ```src```zu und weisen Sie bei Ausführung von update einen davon verschiedenen Wert zu. (1 P.)

5. Nachdem ein Objekt serverseitig erfolgreich erstellt worden ist, soll dieses entsprechend dem in Übung CSS3 vorgesehenen Styling auf der Topic-Ansicht dargestellt werden. (2 P.)

6. Nach Ausführung der Operationen ```update``` und ```delete``` soll die Darstellung des Objekts modifiziert bzw. entfernt werden.(2 P.)

7. Die Operationen ```update``` und ```delete``` brauchen für diese Aufgabe nur dann ausführbar zu sein, wenn unmittelbar zuvor ```create``` ausgeführt wurde. Unmittelbar nach einem reload der Ansicht oder unmittelbar nach Zugriff aus der Titelliste müssen die Aktionen nicht funktionsfähig sein. Diese Einschränkung werden Sie in NJM3 aufheben.

#### Bearbeitungshinweise
* Verwenden Sie für die Umsetzung eine Kopie des Beispielprojekts ```org.dieschnittstelle.iam.njm frm mfm```. In diesem Projekt können Sie dann alle folgenden Aufgaben umsetzen.

* Um die von MongoDB verwendeten Daten Ihrer Anwendung getrennt von den Daten der Implementierungsbeispiele zu handhaben, setzen Sie bitte den Namen Ihres Projekts im ```-dbpath``` Parameter im ```mdb`` Skript.

* Zu Anforderung 2: Die id ist Ihnen bis auf weiteres nur dann bekannt, wenn Sie die ```create``` Operation ausgeführt haben. Bei Zugriff auf die Topic-Ansicht kennen Sie die id noch nicht. Dafür werden Sie in NJM3 Erweiterungen vornehmen.

* Zu Anforderung 3: Zur Auslösung der CRUD Operationen stehen Ihnen bereits Aktionen in der Fußleiste von ```topicview.html``` zur Verfügung, die Sie bei Betätigung des Pfeils am rechten Rand der Fußleiste angezeigt bekommen.

#### Sonstiges
[Demovideo, alleAufgabenzuNJM+FRM+MFM](https://connect.oncampus.de/p6fgwa4hdzh/)

### Übung NJM3 Verknüpfung‘Topicview’-‘Objekt’
#### Aufgabe
Assoziieren Sie Objekt-Elemente auf Ebene der Datenbank mit den Topic-Ansichten in denen die Objekte erstellt werden. Auch hierfür sind keine serverseitigen Implementierungsmaßnahmen erforderlich.

#### Anforderungen
1. Erweitern Sie die ```create``` Operation aus NJM2 wie folgt: Falls ein Objekt erfolgreich erstellt wurde, soll der ```contentItems```Liste des Topicview, von dem aus ```createObjekt()``` aufgerufen wurde, eine Objektreferenz der folgenden Form hinzugefügt werden:

	{
	type: ‘objekt’,
	renderContainer: ‘left’,
	objektid: <objektid>
	}

	wobei ```<objektid>``` die id des neu erstellen Objekt ist. (2 P.)

2. Setzen Sie die Aktualisierung von ```contentItems``` so um, dass nur das neu hinzuzufügende Element vom Client an den NodeJS Server und von dort an MongoDB übermittelt wird und nicht das gesamte Topicview Objekt aktualisiert wird. (2 P.)

3. Erweitern Sie die ```delete``` Operation aus NJM2 wie folgt: falls ein Objekt erfolgreich gelöscht wurde, soll auch die Referenz auf dieses Objekt aus ```contentItems``` entfernt werden. Auch hierfür soll nur ein partielles Update durchgeführt werden. (2 P.)

4. Wenn für einen Topicview bereits ein Objekt existiert, soll dieses bei Darstellung des ```topicview.html``` Dokuments entsprechend dem dafür vorgesehenen Styling (siehe Ü CSS3) dargestellt werden.
(2 P.)

5. Falls ein Objekt bereits existiert oder neu erstellt wurde, soll bei erneuter Ausführung von ```createObjekt()``` ein Warnhinweis angezeigt werden und die Objekterstellung unterbunden werden. (1 P.)

6. Alle anderen Funktionen aus NJM2 sollen weiterhin verfügbar sein. Lediglich die Einschränkung aus Anforderung 7 wird durch die Umsetzung von NJM3 aufgehoben. Falls dies nicht erfüllt ist, wird für NJM3 maximal die Hälfte der möglichen Punktzahl vergeben.

#### Bearbeitungshinweise
* Anforderung 1 - 3: Die Funktionen in ```http2mdb.js``` stellen bereits die Funktionalität des partiellen Updates für die Hinzufügung von Elementen zu ```contentItems``` gemäß Anforderung 1 und das Löschen gemäß Anforderung 3 zur Verfügung. Um auf diese Funktionalität zuzgreifen, müssen Sie lediglich auf Ebene des browserseitig ausgeführten JavaScript Codes HTTP Requests der folgenden Form initiieren:

	* Hinzufügung: ```PUT /topicviews/<topicid>/contentItems```und Übertragung des hinzuzufügenden Elements im Body des Requests. ```<topicid>``` identifiziert den Topicview, dessen ```contentItems``` Liste das Element hinzugefügt werden soll.

	* Löschen: ```DELETE /topicviews/<topicid>/contentItems/<elementtype>.``` Auch hier identifziert ```<topicid>``` den Topicview, auf dessen contentItems Liste zugegriffen werden soll. ```elementtype``` bezeichnet den Typ des Elements / der Elemente, die dabei aus ```contentItems`` entfernt werden sollen. In Ihrem Fall sieht die URL also wie folgt aus: ```/topicviews/<topicid>/contentItems/objekt```

* Anforderung 3:  Für das Löschen, aber auch für das Auslesen oder die Aktualisierung eines Objekts benötigen Sie id des Objekts, die Sie aus der Objektreferenz aus ```contentItems``` auslesen können. Dafür steht Ihnen in ```TopicviewViewController.js``` die Funktion ```getObjektIdForTopicview()``` zur Verfügung.

* Anforderung 4: Die Funktion zum Auslesen eines evtl. bereits existierenden ```Objekt``` können Sie aufrufen, nachdem ein Topicview ausgelesen wurde und falls dessen ```contentItems`` Liste eine Objektreferenz enthält.

