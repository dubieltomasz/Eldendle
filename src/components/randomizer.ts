export function TodaysEldendle(arraySize: number): number {
    const year: number = Number(new Date().toISOString().split('T')[0].split('-')[0]);
    const month: number = Number(new Date().toISOString().split('T')[0].split('-')[1]);
    const day: number = Number(new Date().toISOString().split('T')[0].split('-')[2]);

    let value: number = day * 10000 + month * 100 + year;
    value ^= value << 6;
    value ^= value >> 7;
    value >>>= 0;

    return value % arraySize;
}