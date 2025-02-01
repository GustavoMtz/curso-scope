

const myglobal = 0;

function myfunc(){
    const mycont = 1;
    console.log(myglobal);

    function parent(){
        const inner= 2;
        console.log(mycont, myglobal);

        function child(){
            console.log(inner, mycont, myglobal);

        }
        return child;
    }
    return parent;
}

myfunc