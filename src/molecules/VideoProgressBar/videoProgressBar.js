import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import './videoProgressBar.css';

// A custom progress bar which indicates progress of the current playing video
class VideoProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProgress: 0
        };
        this.updateProgress = () => {
            const { videoDuration } = this.props;
            let currentProgress = 0;
            
            if(window.player) {
                currentProgress = Math.ceil((window.player.getCurrentTime()/videoDuration)*100);
            }
           
            this.setState({
                currentProgress
            }); 
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateProgress, 500);
    }

    componentDidUpdate(previousProps) {
        const { videoDuration } = this.props;
        if(videoDuration !== previousProps.videoDuration){
            clearInterval(this.interval);
            this.interval = setInterval(this.updateProgress, 500);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <ProgressBar now={this.state.currentProgress} />
        )
    }
}

const VideoProgressBarWrapper = ({videoDuration}) => (
    <React.Fragment>
        { videoDuration !== 0 && <VideoProgressBar videoDuration={videoDuration} /> }
    </React.Fragment>
)

VideoProgressBar.propTypes = {
    videoDuration: PropTypes.number.isRequired
};

VideoProgressBarWrapper.propTypes = {
    videoDuration: PropTypes.number.isRequired
};

export default VideoProgressBarWrapper;