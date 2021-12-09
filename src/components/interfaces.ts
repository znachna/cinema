export interface IHeaderButton {
    name: string,
    isActive: boolean
}

export interface IAppHeader {
    changeActiveWindow: (newName: string) => void
}

export interface IMovie {
    name: string,
    genre: string,
    backgroundLink: string,
    description: string,

    smallBackground: string,
    trailerLink?: string
}