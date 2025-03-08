
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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
				celebration: {
					pink: '#FFDEE2',
					softPink: '#FDE1D3',
					accent: '#FF85A1',
					light: '#FFF9FB',
					yellow: '#FEF7CD'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'heartbeat': {
					'0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
					'50%': { transform: 'scale(1.15)', filter: 'brightness(1.1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'fade-in-out': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'sparkle': {
					'0%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1.2) rotate(20deg)' },
					'100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' }
				},
				'confetti-fall': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
				},
				'flower-fall': {
					'0%': { transform: 'translateY(-10vh) rotate(0deg) translateX(0)', opacity: '0' },
					'5%': { opacity: '1' },
					'50%': { opacity: '1', transform: 'translateY(50vh) rotate(180deg) translateX(20px)' },
					'90%': { opacity: '0.7' },
					'100%': { transform: 'translateY(110vh) rotate(360deg) translateX(-20px)', opacity: '0' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-400px 0' },
					'100%': { backgroundPosition: '400px 0' }
				},
				'shimmer-horizontal': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'shimmer-vertical': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heartbeat': 'heartbeat 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-out': 'fade-out 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-out': 'fade-in-out 4s ease-in-out infinite',
				'scale-in': 'scale-in 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'spin-slow': 'spin-slow 20s linear infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'confetti-fall': 'confetti-fall 5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'flower-fall': 'flower-fall 15s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
				'shimmer': 'shimmer 3s infinite linear',
				'shimmer-horizontal': 'shimmer-horizontal 2s infinite ease-in-out',
				'shimmer-vertical': 'shimmer-vertical 2s infinite ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
