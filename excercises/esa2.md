# Vorgaben für Esa 2
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

#### Sonstiges#
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

