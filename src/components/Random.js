export function Random() {

    var arr = new Array(15)

    for (var a = [], i = 0; i < 15; ++i) a[i] = i;
    shuffle(a);
    console.log("Danijel: " + a)

    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        console.log(array)
        return array
    }

    function randomArr(array) {
        arr = array.slice();
        console.log("Niz: " + arr)
    }
}
