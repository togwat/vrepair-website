import { ROOT_URL } from "../constants/Paths";

interface SeoProps {
    title: string;
    description: string;
    path: string;
}

export default function Seo({ title, description, path }: SeoProps) {
    const url = ROOT_URL + path;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="E-Store" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:locale" content="en_NZ" />
        </>
    )
}