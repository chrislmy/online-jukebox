import React from 'react';
import { connect } from 'react-redux';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { InputGroup, FormGroup } from 'react-bootstrap/lib';
import VideoSuggestions from '../VideoSuggestions/videoSuggestions';
import EmptyTabPlaceholder from '../../molecules/EmptyTabPlaceholder/emptyTabPlaceholder';
import { searchVideos } from '../../../state/searchVideos/actions';
import { updateAutocompleteSuggestions } from '../../../state/autocomplete/actions';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './searchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.searchBarRef = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTypeaheadChange = this.handleTypeaheadChange.bind(this);
    }

    handleInputChange = (query) => {
        this.setState({
            query
        });

        this.props.updateSuggestions(query);
    }

    handleTypeaheadChange = (selected) => {
        if(selected[0]){
            const query = selected[0].name;
            this.setState({
                query
            });
            this.props.searchVideos(query);
        }
    }

    render() {
        const { query } = this.state;
        const { videos, isLoading, multiple, options } = this.props;

        return (
            <div className="video-search-section">
                <form 
                    onSubmit={ (event) => {
                        event.preventDefault();
                        this.props.searchVideos(query)
                    }}
                    ref={this.searchBarRef}
                >
                    <FormGroup className="search-bar-wrapper" controlId="formBasicText">
                        <InputGroup>
                            <InputGroup.Addon>
                                <i className="fab fa-youtube-square"></i>
                            </InputGroup.Addon>
                            <AsyncTypeahead
                                id="youtube-autocomplete"
                                allowNew={false}
                                isLoading={isLoading}
                                multiple={multiple}
                                options={options}
                                labelKey="name"
                                onSearch={this.handleInputChange}
                                onChange={this.handleTypeaheadChange}
                                placeholder="Enter a song name from Youtube ..."
                            />
                        </InputGroup>
                    </FormGroup>
                </form>
                <div className="video-suggestions">
                    { videos.length > 0
                        ? <VideoSuggestions videos={videos} />
                        : <EmptyTabPlaceholder />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ 
    searchVideos: { videos },
    autocomplete: { 
        isLoading,
        multiple,
        options
    }
}) => ({
    videos,
    isLoading,
    multiple,
    options
});

const mapDispatchToProps = dispatch => ({
    searchVideos: (query) => { 
        dispatch(searchVideos(query));
    },
    updateSuggestions: (query) => {
        dispatch(updateAutocompleteSuggestions(query));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);