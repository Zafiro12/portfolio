import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import {ThemeProvider} from "@/components/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <App/>
    </ThemeProvider>
)
