import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"
import diskImg from "./diskImg.png"

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div class="videoFooter__text">
                <h3>{channel}</h3>
                <p>{description}</p>
                <div class="videoFooter__ticker">
                    <MusicNoteIcon
                        className="videoFooter__icon"/>
                    <Ticker mode = "smooth">
                        {({index}) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
        <img 
            className="videoFooter__record"
            src={diskImg}
            alt=""
        />
        </div>
    )
}

export default VideoFooter
