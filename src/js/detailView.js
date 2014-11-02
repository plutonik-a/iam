/**
 * Created by alex on 29.10.14.
 */

/**
 * Immediate function: Wird sofort aufgerufen. Der
 * Kontext kann sich ändern, ob nun window oder was anderes.
 * Im Browser ist es immer 'window'.
 * In node.js ist es der global scope, oder sogar der module scope.
 * Kapselt die Variablen und Funktionen (vom äußeren Kontext) ab
 * damit es keine Kollisionen geben kann, z.B. mit mehrfacher
 * Variablenbenutzung im umterschiedlichen Kontext.
 */
(function () {
    /**
     * Öffnet die detail view
     * @param event
     */
    function handleLinkListItemClick (event) {
        console.log("Link wurde angewählt.");
        // Verhindert in diesem Fall das Springen nach oben
        // an den Fensteranfang wegen a href="#"
        event.preventDefault();
        document.body.classList.toggle('detail', true);
    }
    window.linkListe = document.querySelectorAll('a.more');
    for (var i = 0; i < linkListe.length; ++i) {
        var item = linkListe[i];
        item.addEventListener("click", handleLinkListItemClick);
    }

    /**
     * Schließt die die detail view
     * @param event
     */
    function handleBackLinkClick (event) {
        console.log("Zurück.");
        event.preventDefault();
        document.body.classList.toggle('detail', false);
    }
    window.backLink = document.querySelector('header a');
    backLink.addEventListener("click", handleBackLinkClick);
})();