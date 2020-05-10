import React from 'react';

import './Video.css';
import Plyr from 'plyr';

class Video extends React.Component {

    componentDidMount() {
        Plyr.setup('.js-player');
    }

    render () {
        const {videoId, videoType, title, description} = this.props;
        //   const videoImg = `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

      return (
        <div className="player__wrapper">
        <div className="js-player" data-plyr-provider={videoType} data-plyr-embed-id={videoId}></div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      )
    }
  }

export default Video;