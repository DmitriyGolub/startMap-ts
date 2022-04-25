export const iphoneStarsCount: starCountType = {
    'first': {
        active: 25,
        customColor: 90
    },
    'second': {
        active: 55,
        customColor: 40
    },
    'third': {
        active: 20,
        customColor: 50
    },
    'fouth': {
        active: 30,
        customColor: 40
    },
    'fifth': {
        active: 2,
        customColor: 110
    }
};

export const androidStarsCount = {
    'first': {
        active: 45,
        customColor: 90
    },
    'second': {
        active: 35,
        customColor: 50
    },
    'third': {
        active: 20,
        customColor: 50
    },
    'fouth': {
        active: 50,
        customColor: 70
    },
    'fifth': {
        active: 2,
        customColor: 110
    }
};

export type starCountType = Record<string, { [key: string]: string | number }>;
export const desktopStarsCount: starCountType = {
    'first': {
        active: 900,
        customColor: 2000
    },
    'second': {
        active: 700,
        customColor: 1000
    },
    'third': {
        active: 400,
        customColor: 1000
    },
    'fouth': {
        active: 400,
        customColor: 1000
    },
    'fifth': {
        active: 5,
        customColor: 2200
    }
};

// export interface IStarCount {
//     string: {
//         active: number,
//         customColor: number
//     }
// }


export const starsArray = iphoneStarsCount//desktopStarsCount;