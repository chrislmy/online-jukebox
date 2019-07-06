import React from 'react';
import './footerProgressDuration.css';
import convertSecondsToTimeString from '../../../../utils/convertSecondsToTimeString';

class FooterProgressDuration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0
        };
        this.frameRate = 1000;
        this.updateCurrentTime = () => {
            let currentTime = 0;
    
            if(window.player) {
                currentTime = Math.ceil((window.player.getCurrentTime()));
            }
    
            this.setState({
                currentTime
            }); 
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateCurrentTime, this.frameRate);
    }

    componentDidUpdate(previousProps) {
        const { videoDuration } = this.props;
        if(videoDuration !== previousProps.videoDuration){
            clearInterval(this.interval);
            this.interval = setInterval(this.updateCurrentTime, this.frameRate);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { videoDuration } = this.props;

        return (
            <div className="footer-progress-duration">
                <span>{convertSecondsToTimeString(this.state.currentTime)}</span>
                <span className="footer-end-time">{convertSecondsToTimeString(videoDuration)}</span>
            </div>
        )
    }
};

export default FooterProgressDuration;