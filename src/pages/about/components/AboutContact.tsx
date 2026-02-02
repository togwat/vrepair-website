import { OPENING_HOURS } from '../../../constants/OpeningHours'
import './css/AboutContact.css'

export default function AboutContact() {
    return (
        <div className="about-contact-container">
                    <div className="about-contact-left">
                        <div className="about-contact-line">
                            <strong>Address: </strong><a className="transition-default" href="https://www.google.com/maps/place/E+Store/@-36.7722017,174.7642281,151m/data=!3m1!1e3!4m16!1m9!3m8!1s0x6d0d39102a6f3c07:0x589e76a4d20c7f59!2sE+Store!8m2!3d-36.7723341!4d174.7643282!9m1!1b1!16s%2Fg%2F11cjkgqmwt!3m5!1s0x6d0d39102a6f3c07:0x589e76a4d20c7f59!8m2!3d-36.7723341!4d174.7643282!16s%2Fg%2F11cjkgqmwt?entry=ttu&amp;g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">3/145 Kitchener Road, Milford, Auckland 0620</a>
                        </div>
                        <div className="about-contact-line">
                            <strong>Phone (shop): </strong><a className="transition-default" href="tel:094880666">09-4880666</a>
                        </div>
                        <div className="about-contact-line">
                            <strong>Phone (mobile): </strong><a className="transition-default" href="tel:0223735588">022-3735588</a>
                        </div>
                        <div className="about-contact-line">
                            <strong>Email: </strong><a className="transition-default" href="mailto:info@vrepair.co.nz">info@vrepair.co.nz</a>
                        </div>    
                    </div>
                    <div className="about-contact-right">
                        <h3>Opening Hours</h3>
                        <p><strong>Mon-Fri: </strong>{OPENING_HOURS.monToFri}</p>
                        <p><strong>Sat: </strong>{OPENING_HOURS.sat}</p>
                        <p><strong>Sun: </strong>{OPENING_HOURS.sun}</p>
                    </div>
                    <div className="about-contact-bottom">
                        <iframe className="about-contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d514.6864496518588!2d174.76445723530193!3d-36.772364200965896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d39102a6f3c07%3A0x589e76a4d20c7f59!2sE%20Store!5e0!3m2!1sen!2snz!4v1768439069589!5m2!1sen!2snz"></iframe>
                    </div>
                </div>
    )
}