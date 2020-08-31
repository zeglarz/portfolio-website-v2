import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            text: string,
            background: string,
        },
        gradients: {
            primary: string,
        },
        shadows: {
            primary: string
        }
    }
}
