import _ from 'lodash';
import './styles.css';
import Forest from './forestSVG.svg';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello','webpack']);
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Forest;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());