import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_conventer } from "../../Data"
import moment from "moment"
const PlayVideo = ({ videoId }) => {
    const [apiData, setapidata] = useState(null)
    const [channeldata,setchanneldata]=useState(null)
    const fetchVideoData = async () => {
      const videoData_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoData_url).then(res=>res.json()).then(data=>setapidata(data.items[0]))
        
    }
    const fetch_otherdata = async() => {
        const channeldata_url = ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channeldata_url).then(res=>res.json()).then(data=>setchanneldata(data.items[0]))
    }   
    useEffect(() => {
        fetchVideoData();

    }, [])
    useEffect(() => {
        fetch_otherdata();
    },[apiData])

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted> </video> */}
      <iframe
      
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
       frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
          <h3>{apiData?apiData.snippet.title:"Title here" }</h3>
      <div className="play-video-info">
              <p>{apiData?value_conventer(apiData.statistics.viewCount) : "15k"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago" }</p>
        <div>
          <span>
            <img src={like} alt="" />
                      {apiData?value_conventer(apiData.statistics.likeCount):100}
          </span>
          <span>
            <img src={dislike} alt="" />
        
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channeldata?channeldata.snippet.thumbnails.default.url:jack} alt="" />
        <div>
                  <p>{apiData?apiData.snippet.channelTitle:"" }</p>
          <span>{channeldata?value_conventer(channeldata.statistics.subscriberCount):"1K"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
              <p>{apiData?apiData.snippet.description.slice(0,250):"video description" }</p>
        <hr />
              <h4>{apiData?value_conventer(apiData.statistics.commentCount):10 }</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnectd networks using standardized communication
              protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnectd networks using standardized communication
              protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnectd networks using standardized communication
              protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1day ago</span>
            </h3>
            <p>
              A global computer network providing a variety of information and
              cc of interconnectd networks using standardized communication
              protocols.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo
