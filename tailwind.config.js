/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xs: '360px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          background: 'hsl(var(--card-background))',
          foreground: 'hsl(var(--card-foreground))',
          category: 'hsl(var(--card-category))',
          success: 'hsl(var(--card-success))',
        },
        category: {
          blue: 'hsl(var(--brand-blue))',
          red: 'hsl(var(--brand-red-dark))',
          green: 'hsl(var(--brand-green-dark))',
          orange: 'hsl(var(--brand-orange))',
          yellow: 'hsl(var(--brand-yellow))',
          purple: 'hsl(var(--brand-purple))',
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          foreground: 'hsl(var(--disabled-foreground))',
        },
        brand: {
          light: {
            DEFAULT: 'hsl(var(--brand-light))',
            foreground: 'hsl(var(--brand-light-foreground))',
          },
          gray: {
            DEFAULT: 'hsl(var(--brand-gray))',
            foreground: 'hsl(var(--brand-gray-foreground))',
            medium: 'hsl(var(--brand-gray-medium))',
          },
          bluegray: {
            DEFAULT: 'hsl(var(--brand-bluegray))',
            foreground: 'hsl(var(--brand-bluegray-foreground))',
            dark: 'hsl(var(--brand-bluegray-dark))',
          },
          blue: {
            DEFAULT: 'hsl(var(--brand-blue))',
            foreground: 'hsl(var(--brand-blue-foreground))',
            950: 'hsl(var(--brand-blue-950))',
          },
          red: {
            DEFAULT: 'hsl(var(--brand-red))',
            foreground: 'hsl(var(--brand-red-foreground))',
            dark: {
              DEFAULT: 'hsl(var(--brand-red-dark))',
              foreground: 'hsl(var(--brand-red-dark-foreground))',
            },
            100: 'hsl(var(--brand-red-100))',
            gradient: 'hsl(var(--brand-red-gradient))',
          },
          green: {
            DEFAULT: 'hsl(var(--brand-green))',
            foreground: 'hsl(var(--brand-green-foreground))',
            dark: {
              DEFAULT: 'hsl(var(--brand-green-dark))',
              foreground: 'hsl(var(--brand-green-dark-foreground))',
            },
            500: 'hsl(var(--brand-green-500))',
            800: 'hsl(var(--brand-green-800))',
          },
          emerald: {
            DEFAULT: 'hsl(var(--brand-emerald))',
            foreground: 'hsl(var(--brand-emerald-foreground))',
          },
          lime: {
            DEFAULT: 'hsl(var(--brand-lime))',
            foreground: 'hsl(var(--brand-lime-foreground))',
            dark: {
              DEFAULT: 'hsl(var(--brand-lime-dark))',
              foreground: 'hsl(var(--brand-lime-dark-foreground))',
            },
          },
          orange: {
            DEFAULT: 'hsl(var(--brand-orange))',
            foreground: 'hsl(var(--brand-orange-foreground))',
            dark: {
              DEFAULT: 'hsl(var(--brand-orange-dark))',
              foreground: 'hsl(var(--brand-orange-dark-foreground))',
            },
            gradient: 'hsl(var(--brand-orange-gradient))',
            100: 'hsl(var(--brand-orange-100))',
            900: 'hsl(var(--brand-orange-900))',
          },
          yellow: {
            DEFAULT: 'hsl(var(--brand-yellow))',
            foreground: 'hsl(var(--brand-yellow-foreground))',
            100: 'hsl(var(--brand-yellow-100))',
            dark: {
              DEFAULT: 'hsl(var(--brand-yellow-dark))',
              foreground: 'hsl(var(--brand-yellow-dark-foreground))',
            },
          },
          amber: {
            DEFAULT: 'hsl(var(--brand-amber-300))',
            100: 'hsl(var(--brand-amber-100))',
            300: 'hsl(var(--brand-amber-300))',
          },
          purple: {
            DEFAULT: 'hsl(var(--brand-purple))',
            foreground: 'hsl(var(--brand-purple-foreground))',
          },
          iris: {
            DEFAULT: 'hsl(var(--brand-iris))',
            foreground: 'hsl(var(--brand-iris-foreground))',
          },
          pink: {
            DEFAULT: 'hsl(var(--brand-pink))',
            foreground: 'hsl(var(--brand-pink-foreground))',
          },
          'primary-gradient': {
            DEFAULT: 'hsl(var(--gradient-primary))',
            foreground: 'hsl(var(--foreground))',
          },
          'secondary-gradient': {
            DEFAULT: 'hsl(var(--brand-secondary-gradient))',
            foreground: 'hsl(var(--foreground))',
          },
        },
      },
      boxShadow: {
        'card-inset':
          'inset 2px 2px 10px hsl(var(--brand-gray-foreground)), inset -2px -2px 10px hsl(var(--brand-gray-foreground))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'tecnologia-banner': "url('/assets/images/tecnologies-banner.svg')",
        'saude-banner': "url('/assets/images/saude-banner.svg')",
        'negocios-banner': "url('/assets/images/negocios-banner.svg')",
        'educacao-banner': "url('/assets/images/educacao-banner.svg')",
        'gastronomia-banner': "url('/assets/images/gastronomia-banner.svg')",
        'criatividade-banner': "url('/assets/images/criatividade-banner.svg')",
        'mini-logo': "url('/assets/images/mini-logo.svg')",
        tecnologia: "url('/assets/images/tecnologias.jpeg')",
        saude: "url('/assets/images/saude.jpeg')",
        negocios: "url('/assets/images/negocios.jpeg')",
        educacao: "url('/assets/images/educacao.jpeg')",
        gastronomia: "url('/assets/images/gastronomia.jpeg')",
        criatividade: "url('/assets/images/criatividade.jpeg')",
        'career-area': "url('/assets/images/career-area.png')",
        'career-area-small': "url('/assets/images/career-area-small.png')",
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      width: {
        76: '304px',
        24: '96px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config