import { ThemeProvider } from "next-themes";

export default function Provider({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <div className="transition-colors duration-100 min-h-screen select-none">
        {children}

        </div>
    </ThemeProvider>
  )
}
