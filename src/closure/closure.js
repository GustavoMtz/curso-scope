function hello(){
    let user = 'yo';

    function display(){
        console.log(`hello  ${user}`);

        return `ola k ase  ${user}`;
    }
    return display;
}

const h = hello();

console.log(h);

console.log(h());
