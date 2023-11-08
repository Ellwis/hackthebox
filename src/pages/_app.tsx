import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: 'yekan',
    },
  });
  return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
  )
}
