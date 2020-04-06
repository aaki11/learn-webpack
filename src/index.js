import _ from 'lodash';
import './styles.css';
import print from './print.js';

function component(){
    const element = document.createElement('div');
    const btn  = document.createElement('button');
    element.innerHTML = _.join(['Hello','webpack']);
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = print;
    element.appendChild(btn);
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());