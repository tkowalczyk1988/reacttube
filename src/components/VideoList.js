import React from 'react';

import { parseVideo } from '../utils';
import Video from './Video/Video';


class VideoList extends React.Component {

    constructor() {
      super();
      this.state = {videos:[]};
    }

    componentDidMount() {
      fetch('/data/database.json')
        .then(response => response.json())
        .then(videos => this.setState({videos: videos}))
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render() {
      return (
        <>
        {this.state.videos.map((videos, index) => 
          <Video
            key={index}
            videoId={parseVideo(videos.video_url)['id']}
            videoType={parseVideo(videos.video_url)['type']}
            title={videos.title}
            description={videos.description}
          />
        )}
        </>
      )
    }
  }

export default VideoList;