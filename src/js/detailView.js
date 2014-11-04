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
     * link handler factory
     * @param {HTMLElement} element
     * @param {Function} func
     * @returns {Function}
     */
    function getLinkHandler(element, func) {
        return function (event) {
            var classList = element.classList;
            event.preventDefault();
            classList.add('fadeout');
            var listener = element.addEventListener('transitionend', function () {
                classList.remove('fadeout');
                classList.add('fadein');
                func(element);
                element.removeEventListener(listener);
            });
        }
    }

    /**
     * Öffnet die detail view
     * @param event
     */
    function intoDetail(element) {
        element.classList.remove('overview');
        element.classList.add('detail');
    }

    /**
     * Schließt die die detail view
     * @param event
     */
    function backToOverview(element) {
        element.add('overview');
        element.remove('detail');
    }

    /**
     * ELEMENTE MIT DENEN GEARBEITET WIRD
     * @type {Node}
     */
    var contentWrapper = document.querySelector('section.contentwrapper');
    var backLink = document.querySelector('header a');
    var linkListe = document.querySelectorAll('a.more');

    /**
     * baue link handler
     */
    var handleLinkListItemClick = getLinkHandler(contentWrapper, intoDetail);
    var handleBackLinkClick = getLinkHandler(contentWrapper, backToOverview);

    /**
     * attach click event listeners
     */
    for (var i = 0, l = linkListe.length; i < l; ++i) {
        var item = linkListe[i];
        item.addEventListener("click", handleLinkListItemClick);
    }
    backLink.addEventListener("click", handleBackLinkClick);

})();

