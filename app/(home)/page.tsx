import Link from "next/link";


export const metadata = {
    title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await (await fetch(API_URL)).json();
    return response;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}