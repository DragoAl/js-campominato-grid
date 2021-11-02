// FUNZIONI UTILI
function elementGenerator (customElement , customClass) {
    let node = document.createElement(customElement);
    node.classList.add(customClass);
    return node
}