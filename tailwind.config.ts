
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Vinho
					foreground: 'hsl(var(--primary-foreground))' // Branco para texto sobre vinho
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))', // Rosé
					foreground: 'hsl(var(--secondary-foreground))' // Vinho para texto sobre rosé
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Cores personalizadas
        'custom-rose': '#FFF0F5', // Lavender Blush - um rosé bem clarinho
        'custom-rose-light': '#FFE4E1', // Misty Rose - um pouco mais de tom
        'custom-vinho': '#5D0F23', // Um tom de vinho profundo
        'custom-vinho-light': '#800020', // Burgundy - um pouco mais aberto
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'hsl(var(--primary))' }
        },
        'firework-sparkle-kf': {
          '0%': { transform: 'scale(0.3) translateY(5px)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'scale(1.1) translateY(-50px) rotate(180deg)', opacity: '0' },
        },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'typewriter': 'typewriter 3.5s steps(40, end) 1s 1 normal both',
        'blink-caret': 'blink-caret .75s step-end infinite',
        'firework-sparkle': 'firework-sparkle-kf ease-out forwards', // Duration and delay will be set inline
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
