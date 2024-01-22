export interface IUser {
    email: string
    name: string
    password: string
}

export interface iColor {
    name: string
    id: string
    code: string
}

export interface IIcon {
    name: string
    id: string
    symbol: string
}

export interface ICategory {
    _id: string
    name: string
    user: IUser | string
    isEditable: boolean
    color: iColor
    icon: IIcon
}