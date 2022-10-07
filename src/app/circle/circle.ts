export function circle(x: number) {
    if (x == 0) {
        x = 0;
    }
    if (x < 0) {
        x = 0;
    }else{
        x = 3.1416 * (x * x);
    }
    return x;
}