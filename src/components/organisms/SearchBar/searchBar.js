import React from 'react';
import { InputGroup, FormGroup, FormControl } from 'react-bootstrap/lib';
import VideoSuggestions from '../VideoSuggestions/videoSuggestions';
import videoSearchActions from '../../../actions/youtubeApiActions/video-search-actions';
import './searchBar.css';

const HeadPhoneIcon = () => (
    <i className="fas fa-headphones-alt head-phone-icon"></i>
);

const VideoSearchPrompt = () => (
    <div className="search-video-prompt-container">
        <HeadPhoneIcon />
        <h4 className="search-video-prompt-prefix"> Search for your favorite songs </h4>
        <h5 className="search-video-prompt-suffix"> Let's get this party started! </h5>
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
        // Prevent page from being reloaded
        event.preventDefault();
        this.getVideos();
    }

    getVideos = () => {
        videoSearchActions.getVideos(this.state.query)
            .then((videos) => {
                this.setState({
                    results: videos
                })
            })
            .catch((error) => {
                console.log(error);
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
                                className="search-bar"
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