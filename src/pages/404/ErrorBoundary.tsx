import { isRouteErrorResponse, useRouteError } from "react-router"
import { HOME_ROUTE } from "../../constants/Paths"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

// Shown for unknown URLs (nginx serves this with a real 404 status) and unexpected errors
export function ErrorBoundary() {
    const notFound = isRouteErrorResponse(useRouteError())

    return (
        <>
            <title>{notFound ? 'Page not found | E-Store' : 'Error | E-Store'}</title>
            <Navbar />
            <section className="about-section">
                <h1>{notFound ? 'Page not found' : 'Something went wrong'}</h1>
                <p><a href={HOME_ROUTE}>Return to home</a></p>
            </section>
            <Footer />
        </>
    )
}
