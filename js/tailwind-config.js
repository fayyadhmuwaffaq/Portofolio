tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#4A3B32',
                secondary: '#EAE3D2',
                dark: '#2A2A2A',
                surface: '#ffffff',
                muted: '#6B6B6B',
                bordercolor: '#D8D2C5',
                bglight: '#FDFBF7'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
                'nav': '0 -1px 0 0 rgba(0,0,0,0.05)',
            },
            borderRadius: {
                'card': '24px',
                'btn': '16px',
                'badge': '999px',
            }
        }
    }
}
