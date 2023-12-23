
//How react works?

const domElement = document.querySelector("#root")

function Append(Element, domElement) {
    
    const makeElement = document.createElement(Element.type);
    makeElement.innerHTML = Element.children

    for (const prop in Element.props) {
        makeElement.setAttribute(prop, Element.props[prop])
    }

    domElement.appendChild(makeElement)
}

//here define element and his type and his target and his text
const createElement = {
    type: "a",
    props: {
        target: "_blank",
        href: "http://google.com"
    },
    children: "click her to show google"
}

Append(createElement, domElement)