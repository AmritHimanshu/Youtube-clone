import React, { useState } from 'react'
import TopicSelect from './TopicSelect'
import VideoSectionOption from './VideoSectionOption'
import './VideoSection.css'

function fetchApiVideo() {

    // const [videoAPI, setVideoAPI] = useState([]);

    // const fetchData = () => {
    //     return fetch('https://www.googleapis.com/youtube/v3/videos')
    //         .then((response) => response.json())
    //         .then((data) => setVideoAPI(data));
    // }

    return (
        <div className='videoSection'>

            <div className="videoSection__first">
                <TopicSelect />
            </div>

            <div className='videoSection__second'>
                <VideoSectionOption image='https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2TNleahkp_YHx0E9frBBDhXn2lQ' title='Let`s build youtube clone' channel='Programming world' channelImg='https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s68-c-k-c0x00ffffff-no-rj' views='235k' timestamp='3 days ago' />

                <VideoSectionOption image='https://i.ytimg.com/vi/avUHoWzZiRU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpyyxaF10kNat9FW0MaCCbTxIA7w' title='Katrina Kaif breaks Akshay Kumar`s face' channel='LIV Comedy' channelImg='https://yt3.ggpht.com/C8dX6T92VPU3AaY3ECmlTzZ4hFbHmPEt9JlL-zZOc4QWcKVdoCVrKrI_m8obNXU2b4I0sO8n=s68-c-k-c0x00ffffff-no-rj' views='7.35M' timestamp='10 days ago' />

                <VideoSectionOption image='https://i.ytimg.com/vi/jCAdloWagNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-IYSuzX0QPMGmBPdpln2nJuQ1BQ' title='New South Indian Full Hindi Dubbed Movie' channel='Aditya Movies' channelImg='https://yt3.ggpht.com/ytc/AMLnZu-W_MDV9x3lqca5BIBdghSsBqfvoVp6x8mE2Xu-dGqyR0DaG5XZKddrsSL9PuoL=s88-c-k-c0x00ffffff-no-rj' views='235k' timestamp='3 days ago' />

                <VideoSectionOption image='https://i.ytimg.com/vi/gRfBWb1asvg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT_I4n8qMOtZC0OGGHwgu0Q13fvA' title='DREAMS - Broke Ence Motivation' channel='Alpha Motivation' channelImg='https://yt3.ggpht.com/0NLftZWGqwDXd6kcs_BIoOxx3fpcJ08bHTEtZTZ8Yubvfc46pVDOP2jfNQzDOX6yFiHuXLQEdeI=s68-c-k-c0x00ffffff-no-rj' views='235k' timestamp='3 days ago' />

                <VideoSectionOption image='https://i.ytimg.com/vi/ulF7pF5RWAE/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhZIGEoZTAP&rs=AOn4CLD441ZqNv-ckacC2OWSh-iuRUnK7w' title='Tu Aake Dekhle Song' channel='ExtraOrdinary Gane' channelImg='https://yt3.ggpht.com/2WVuiG9cgH_pWIA1VTMRAr7atuHIktp0UT1ALqo-Ko9TkVFltkf9DiIMMp5HWRl9AgpMqtiWbQ=s68-c-k-c0x00ffffff-no-rj' views='235k' timestamp='3 days ago' />

            </div>

        </div>
    )
}

export default fetchApiVideo