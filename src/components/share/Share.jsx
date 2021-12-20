import './share.css'
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"
export const Share=()=>{

    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in Your Mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon'/>
                            <span className='shareOptiontext'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue'  className='shareIcon'/>
                            <span className='shareOptiontext'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green'  className='shareIcon'/>
                            <span className='shareOptiontext'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod'  className='shareIcon'/>
                            <span className='shareOptiontext'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}

