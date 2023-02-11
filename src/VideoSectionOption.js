import React from 'react'
import { Avatar } from '@mui/material'
import './VideoSectionOption.css'

function VideoSectionOption({ image, title, channel, channelImg, views, timestamp }) {
    return (
        <div className='videoSectionOption'>
            <img className='videoSectionOption__thumbnail' src={image} alt="" />

            <div className="videoSectionOption__info">

                <Avatar className='videoSectionOption__avatar' src={channelImg} alt={channel} />

                <div className="videoSectionOption__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} views .  {timestamp}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default VideoSectionOption