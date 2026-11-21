const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((value) => (value + 0.5) / 16);

export const threshold = (x: number, y: number) => bayer[(y & 3) * 4 + (x & 3)];
