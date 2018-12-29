import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import VideoSuggestions from '../VideoSuggestions/videoSuggestions';
import videoSearchActions from '../../actions/youtubeApiActions/video-search-actions';
import './searchBar.css';

const VIDEOS_PER_ROW = 2;

const HeadPhoneIcon = () => (
    <i className="fas fa-headphones-alt Head-Phone-Icon"></i>
);

const VideoSearchPrompt = () => (
    <div className="Search-Video-Prompt-Container">
        <HeadPhoneIcon />
        <h3 className="Search-Video-Prompt-Prefix"> Search for your favorite songs </h3>
        <h4 className="Search-Video-Prompt-Suffix"> Add them to the playlist and get this party started! </h4>
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

    componentDidMount() {
        window.focus();
    }

    submitForm (event) {
        // Prevent page from being reloaded and restrict to live search
        event.preventDefault();
    }

    formatVideos = (videos) => {
        let formattedVideos = [];
        for(let i = 0; i <videos.length; i+=VIDEOS_PER_ROW) {
            const row = [];
            row.push(videos[i]);
            row.push(videos[i+1]);
            formattedVideos.push(row);
        }
        return formattedVideos;
    }

    getVideos = () => {
        videoSearchActions.getVideos(this.state.query)
            .then((videos) => {
                this.setState({
                    results:this.formatVideos(videos)
                })
            });
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value    
        }, () => {
            if(this.state.query && this.state.query.length > 2){
                this.getVideos()
            }else if (!this.query){
                this.setState({
                    results: []
                })
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <FormGroup  controlId="formBasicText">
                    <FormControl
                        className="Search-Bar"
                        type="text"
                        value={this.state.query}
                        placeholder="Start typing your query for videos ..."
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <div className="Video-Suggestions">
                    { this.state.results.length > 0
                        ? <VideoSuggestions videos={this.state.results} />
                        : <VideoSearchPrompt />
                    }
                </div>
            </form>
        )
    }
}

export default SearchBar