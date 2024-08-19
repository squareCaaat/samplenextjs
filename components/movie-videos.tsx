import { API_URL } from '../app/(home)/constants';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id:string) {
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    // throw new Error("안녕 나는 오류야 :)");
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}: {id:string}) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map(video => 
                <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allowFullScreen={true} />
            )}
        </div>
    );
}