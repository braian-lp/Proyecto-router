const SongArtist = ({artist})=>{
    return(
        <section className="col-md">
            <h2>{artist.strArtist}</h2>
            <img src={artist.strArtistThumb} alt={artist.strArtist} style={{maxWidth:"100%", height:"auto"}}></img>
            <p>
                {artist.intBornYear}-{artist.intDiedYear || "Presente"}
            </p>
            <p>
                {artist.strCountry}
            </p>
            <p>
                {artist.strGenre} - {artist.strStyle}
            </p>
            <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
                Sitio web Oficial
            </a>
            <p>{artist.strBiographyEN}</p>
        </section>
    )
}

export default SongArtist;