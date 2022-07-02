import { extendTheme } from '@chakra-ui/react'
import { fonts } from './fonts'
// 2. Extend the theme to include custom colors, fonts, etc

const colors = {
    "brand.100": "#F5F0BB",
    "brand.200": "#C4DFAA",
    "brand.300": "#90C8AC",
}

const config = {
    useSysyemColorMode: false,
    initialColorMode: "light",
}
const theme = extendTheme({config, fonts, colors })

export default theme
