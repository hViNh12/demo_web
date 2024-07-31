import Link from "next/link";
import '@/CSS_error/error.css';

export default function Notfound() {
    return (
        <main className="main-container">
            <h1>
                <span>404 - Server-side error occurred</span>
            </h1>
            <img 
                className="error-image" 
                src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow.gif" 
                alt="Error" 
            />
            <p>Oops! Something went wrong on our end. Please try again later or contact support.</p>
            <p><Link href="/">Go back to homepage</Link></p>
        </main>
    );
}
