export interface IHeaderButton {
    name: string,
    isActive: boolean
}

export interface IAppHeader {
    changeActiveWindow: (newName: string) => void
    buttons: Array<IHeaderButton>, 
    setActiveButton: (mutableButtonIndex: number) => void
}

export interface IMovie {
    name: string,
    genre: string,
    backgroundLink: string,
    description: string,
    trailerLink: string
    posterLink: string,
}

export interface ISeries extends IMovie {
    seasons: number
}

export interface IContent {
    name: string
    description: string
    trailerLink: string
    posterLink: string

    seasons?: number
}