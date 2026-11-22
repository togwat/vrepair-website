import type { ReactNode } from 'react'
import { Links, Outlet, Scripts } from 'react-router'
import { ROOT_URL } from './constants/Paths'
import icon from './assets/icon.svg'
import './index.css'
import './pages/about/components/css/About.css'

export { ErrorBoundary } from './pages/404/ErrorBoundary'   // root must export ErrorBoundary for 404 page to work

const LOCAL_BUSINESS = {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    '@id': `${ROOT_URL}/#business`,
    name: 'E-Store',
    legalName: 'vRepair NZ Limited',
    alternateName: 'vRepair',
    url: `${ROOT_URL}/`,
    description: 'Phone, tablet and laptop repairs in Milford, Auckland. Screen and battery replacements, liquid damage, data recovery and more.',
    telephone: '+64-9-488-0666',
    email: 'info@vrepair.co.nz',
    priceRange: '$$',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '3/145 Kitchener Road',
        addressLocality: 'Milford',
        addressRegion: 'Auckland',
        postalCode: '0620',
        addressCountry: 'NZ',
    },
    geo: { '@type': 'GeoCoordinates', latitude: -36.7723341, longitude: 174.7643282 },
    openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:30', closes: '17:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
    ],
    areaServed: ['Milford', 'Takapuna', 'North Shore', 'Auckland'],
    hasMap: 'https://maps.google.com/?cid=6385671771928690521',
}

export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en-NZ">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="icon" type="image/svg+xml" href={icon} />
                <link rel="icon" href="/favicon.ico" />
                {/* fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
                {/* only used icons, in alphabetical order */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&icon_names=arrow_forward,call,computer,email,money_off,phone,receipt_long,schedule,settings_system_daydream,smartphone,star,star_half,storefront,verified,verified_user&display=block" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }} />
                <Links />
            </head>
            <body>
                {children}
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
