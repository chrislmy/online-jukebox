import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    SEARCH_VIDEO,
    INIT_LOBBY,
    ADD_VIDEO_TO_PLAYLIST
} from '../../../state/request/requestNames';
import isDataLoading from '../../../utils/isDataLoading';
import './loadingSpinner.css';

const labelMap =  {
    [INIT_LOBBY]: 'Plugging you in ...',
    [SEARCH_VIDEO]: 'Searching ...',
    [ADD_VIDEO_TO_PLAYLIST]: 'Adding video to queue ...'
};

const LoadingSpinnerView = ({isLoading, requestName}) => {
    const spinnerClassName = isLoading ? 'full-page-spinner-container' : 'full-page-spinner-inactive';

    return (
        <div className={spinnerClassName}>
            <div className="full-page-spinner"></div>
            <div className="full-page-spinner-label"> { labelMap[requestName] } </div>
        </div>
    )
};

const mapStateToProps = ({ requests: { loadingRequests } }) => {
    const { isLoading, requestName } = isDataLoading(loadingRequests);

    return {
        isLoading,
        requestName
    }
}

LoadingSpinnerView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    requestName: PropTypes.string.isRequired
};

const LoadingSpinner = connect(mapStateToProps)(LoadingSpinnerView);

export default LoadingSpinner;