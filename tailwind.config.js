/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        "colors": {
                "surface-container": "#ffe9e2",
                "secondary-fixed-dim": "#c6c6c6",
                "primary": "#a73a00",
                "on-primary-fixed-variant": "#802a00",
                "tertiary-fixed": "#e2e2e2",
                "inverse-primary": "#ffb59a",
                "secondary-fixed": "#e2e2e2",
                "on-tertiary-fixed-variant": "#454747",
                "surface-dim": "#f1d4ca",
                "on-secondary": "#ffffff",
                "tertiary-fixed-dim": "#c6c6c6",
                "on-error": "#ffffff",
                "surface-container-lowest": "#ffffff",
                "surface-bg": "#ffffff",
                "on-primary-container": "#521800",
                "on-primary-fixed": "#370e00",
                "tertiary": "#5d5f5f",
                "tertiary-container": "#929393",
                "on-tertiary-container": "#2a2c2c",
                "background": "#fff8f6",
                "error": "#ba1a1a",
                "surface-container-high": "#ffe2d8",
                "on-primary": "#ffffff",
                "secondary-container": "#e2e2e2",
                "outline-variant": "#e4beb1",
                "border-default": "#cdcdcd",
                "on-surface": "#271812",
                "inverse-on-surface": "#ffede7",
                "inverse-surface": "#3e2c26",
                "on-surface-variant": "#5b4137",
                "surface-container-highest": "#fadcd2",
                "surface": "#fff8f6",
                "primary-fixed-dim": "#ffb59a",
                "on-secondary-fixed": "#1a1c1c",
                "surface-muted": "#f4f3f3",
                "text-placeholder": "#767676",
                "on-tertiary-fixed": "#1a1c1c",
                "surface-bright": "#fff8f6",
                "error-container": "#ffdad6",
                "secondary": "#5d5f5e",
                "on-background": "#271812",
                "surface-variant": "#fadcd2",
                "surface-tint": "#a73a00",
                "on-tertiary": "#ffffff",
                "on-secondary-fixed-variant": "#454747",
                "outline": "#8f7065",
                "primary-container": "#ff5c00",
                "on-secondary-container": "#636564",
                "on-error-container": "#93000a",
                "primary-fixed": "#ffdbce",
                "surface-container-low": "#fff1ec"
        },
        "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
        },
        "spacing": {
                "stack-lg": "40px",
                "base": "8px",
                "container-margin": "24px",
                "gutter": "16px",
                "stack-sm": "12px",
                "stack-xs": "4px",
                "stack-md": "24px"
        },
        "fontFamily": {
                "label-md": [
                        "JetBrains Mono"
                ],
                "body-lg": [
                        "Plus Jakarta Sans"
                ],
                "headline-lg": [
                        "Plus Jakarta Sans"
                ],
                "headline-lg-mobile": [
                        "Plus Jakarta Sans"
                ],
                "body-md": [
                        "Plus Jakarta Sans"
                ],
                "display-lg": [
                        "Plus Jakarta Sans"
                ],
                "label-sm": [
                        "JetBrains Mono"
                ]
        },
        "fontSize": {
                "label-md": [
                        "14px",
                        {
                                "lineHeight": "20px",
                                "letterSpacing": "0.02em",
                                "fontWeight": "500"
                        }
                ],
                "body-lg": [
                        "18px",
                        {
                                "lineHeight": "28px",
                                "fontWeight": "500"
                        }
                ],
                "headline-lg": [
                        "32px",
                        {
                                "lineHeight": "40px",
                                "letterSpacing": "-0.01em",
                                "fontWeight": "700"
                        }
                ],
                "headline-lg-mobile": [
                        "28px",
                        {
                                "lineHeight": "36px",
                                "fontWeight": "700"
                        }
                ],
                "body-md": [
                        "16px",
                        {
                                "lineHeight": "24px",
                                "fontWeight": "400"
                        }
                ],
                "display-lg": [
                        "48px",
                        {
                                "lineHeight": "56px",
                                "letterSpacing": "-0.02em",
                                "fontWeight": "700"
                        }
                ],
                "label-sm": [
                        "12px",
                        {
                                "lineHeight": "16px",
                                "letterSpacing": "0.05em",
                                "fontWeight": "500"
                        }
                ]
        }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
