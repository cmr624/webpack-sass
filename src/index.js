import Foo from './foo';
import './sass/style.sass';
function main(){
    new Foo();
    return document.createElement('div').innerText = "hello from webpack";
}

document.body.append(main());
document.body.append(main());