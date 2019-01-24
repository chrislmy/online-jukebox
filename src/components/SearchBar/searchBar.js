import React from 'react';
import { InputGroup, FormGroup, FormControl } from 'react-bootstrap/lib';
import VideoSuggestions from '../VideoSuggestions/videoSuggestions';
import videoSearchActions from '../../actions/youtubeApiActions/video-search-actions';
import './searchBar.css';

const HeadPhoneIcon = () => (
    <i className="fas fa-headphones-alt Head-Phone-Icon"></i>
);

const VideoSearchPrompt = () => (
    <div className="Search-Video-Prompt-Container">
        <HeadPhoneIcon />
        <h4 className="Search-Video-Prompt-Prefix"> Search for your favorite songs </h4>
        <h5 className="Search-Video-Prompt-Suffix"> Add them to the playlist and get this party started! </h5>
    </div>
)

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm (event) {
        // Prevent page from being reloaded and restrict to live search
        event.preventDefault();
        this.getVideos();
    }

    getVideos = () => {
        videoSearchActions.getVideos(this.state.query)
            .then((videos) => {
                // console.log(videos);
                this.setState({
                    results: videos
                })
            });
        
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value    
        });
    }

    render() {
        return (
            <div className="video-search-section">
                <form onSubmit={this.submitForm}>
                    <FormGroup className="search-bar-wrapper" controlId="formBasicText">
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fab fa-youtube-square"></i>
                            </InputGroup.Addon>
                            <FormControl
                                className="Search-Bar"
                                type="text"
                                value={this.state.query}
                                placeholder="Enter a song name from Youtube"
                                onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    
                </form>
                <div className="video-suggestions">
                    { this.state.results.length > 0
                        ? <VideoSuggestions videos={this.state.results} />
                        : <VideoSearchPrompt />
                    }
                </div>
            </div>
        )
    }
}

export default SearchBar