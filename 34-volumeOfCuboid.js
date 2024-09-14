class Kata {
    static getVolumeOfCuboid(length, width, height) {
        let result = "";
        result = length * width * height;
        return result;
    }
}

console.log(Kata.getVolumeOfCuboid(3, 2, 1));