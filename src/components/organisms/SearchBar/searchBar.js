import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, FormGroup, FormControl } from 'react-bootstrap/lib';
import VideoSuggestions from '../VideoSuggestions/videoSuggestions';
import { searchVideos } from '../../../state/searchVideos/actions';
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
            query: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value    
        });
    }

    render() {
        const { query } = this.state;
        const { videos } = this.props;

        return (
            <div className="video-search-section">
                <form 
                    onSubmit={ (event) => {
                        event.preventDefault();
                        this.props.searchVideos(query)
                    }}
                >
                    <FormGroup className="search-bar-wrapper" controlId="formBasicText">
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fab fa-youtube-square"></i>
                            </InputGroup.Addon>
                            <FormControl
                                className="search-bar"
                                type="text"
                                value={query}
                                placeholder="Enter a song name from Youtube"
                                onChange={this.handleInputChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    
                </form>
                <div className="video-suggestions">
                    { videos.length > 0
                        ? <VideoSuggestions videos={videos} />
                        : <VideoSearchPrompt />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ searchVideos: { videos } }) => ({
    videos 
});

const mapDispatchToProps = dispatch => ({
    searchVideos: (query) => { 
        dispatch(searchVideos(query));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);