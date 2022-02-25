const SongLyric = ({title, lyric})=>{
    return(
        <section className="col-md">
            <h2>{title}</h2>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{lyric}</blockquote>
        </section>
    )
}

export default SongLyric;