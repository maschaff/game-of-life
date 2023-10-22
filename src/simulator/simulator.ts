export type Seed = Array<Array<0 | 1>>;

const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];

export function* gameOfLifeSimulator(seed: Seed, ticks: number = 1000) {
    for (let i = 0; i++ < ticks; ) {
        seed = simulateTick(seed);

        yield seed;
    }
}

function simulateTick(seed: Seed): Seed {
    const newSeed = [];

    for (let i = 0; i < seed.length; i++) {
        const row = [];

        for (let j = 0; j < seed[i].length; j++) {
            let count = 0;

            for (const [k, l] of neighbors) {
                if (
                    i + k < 0 ||
                    j + l < 0 ||
                    i + k >= seed.length ||
                    j + l >= seed[i].length
                )
                    continue;
                if (seed[i + k][j + l]) count++;
            }

            if (seed[i][j]) {
                row.push(count < 2 || count > 3 ? 0 : 1);
                continue;
            }

            row.push(count === 3 ? 1 : 0);
        }

        newSeed.push(row);
    }

    return newSeed;
}

export function printState(seed: Seed) {
    console.log(
        seed
            .map((row) => row.map((state) => (state ? "X" : "-")).join("  "))
            .join("\n")
            .concat("\n"),
    );
}
