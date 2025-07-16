import { createSystem, defaultConfig } from "@chakra-ui/react"
const themeConfig = {
    theme: {
        tokens: {
            colors: {
                primary: { value: "var(--primary-color)" },
                secondary: { value: "var(--secondary-color)" },
                support: { value: "var(--support-color)" },
                light: { value: "var(--light-color)" },
                dark: { value: "var(--dark-color)" },
                darkLight: { value: "var(--dark-light-color)" },
            },
            Toast: {
                baseStyle: {
                    position: "top-right", // ✅ Default position for all toasts
                }
            }
        },
    }
}

export const theme = createSystem(defaultConfig, themeConfig)

