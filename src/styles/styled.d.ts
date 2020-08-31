import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            background: string
        },
        gradients: {
            primary: string,
        },
        shadows: {
            primary: string
        }
    }
}
