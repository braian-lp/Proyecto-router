import SongArtist from "./SongArtist"
import SongLyric from "./SongLyric"
import Message from "../Message"

const SongDetails = ({search, lyric, bio})=>{
    if(!lyric || !bio) return null;

    return(
        <div className="container">
            <div className="row">
            {lyric.error || lyric.name ==="AbortError" || lyric.err ? (
                <Message 
                    msg={`No existe la cancion ${search.song}`}>
                </Message>
            ):(
                <SongLyric 
                    title={search.song} 
                    lyric={lyric.lyrics}>
                </SongLyric>
            )}
            {bio.artists ? (
                <SongArtist artist={bio.artists[0]}>
                </SongArtist>
            ):(
                <Message msg={`No existe el artista: ${search.artist}`}>

                </Message>)}
            </div>
        </div>
    )
}

export default SongDetails;