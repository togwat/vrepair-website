import './css/Section2Box.css';

function StarRating({ rating = 0 }: { rating: number }) {
    const MAX_STARS = 5;

    const empty_star = <span className="material-symbols-outlined rating-star">star</span>
    const half_star = <span className="material-symbols-outlined rating-star">star_half</span>
    const full_star = <span className="material-symbols-outlined rating-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>

    return (
        <div className="star-rating">
            {
                [...Array(MAX_STARS)].map((_, index) => {
                    if (rating >= index + 1) {
                        return full_star;
                    }

                    if (rating >= index + 0.5) {
                        return half_star;
                    }

                    if (rating < index + 0.5) {
                        return empty_star;
                    }
                })
            }
        </div>
    )
}

// someday get api to fetch real ratings
const rating = 4.9;

export default function Section2Box() {
    return (
        <div className="section2-box transition-default">
            <StarRating rating={rating} />   
            <h4>{rating} Star Rating</h4>
            <p>Trusted by locals.</p>
            <a href="https://www.google.com/maps/place/E+Store/@-36.7722017,174.7642281,151m/data=!3m1!1e3!4m8!3m7!1s0x6d0d39102a6f3c07:0x589e76a4d20c7f59!8m2!3d-36.7723341!4d174.7643282!9m1!1b1!16s%2Fg%2F11cjkgqmwt?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" className="section2-box-link transition-default" target="_blank">Check our Google reviews</a>
        </div>
    )
}