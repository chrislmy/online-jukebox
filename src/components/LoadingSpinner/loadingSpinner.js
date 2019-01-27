import React from 'react';
import { connect } from 'react-redux';
import './loadingSpinner.css';

const LoadingSpinnerView = ({isLoading}) => {
    const spinnerClassName = isLoading ? 'full-page-spinner-container' : 'full-page-spinner-inactive';
    console.log(spinnerClassName);
    return (
        <div className={spinnerClassName}>
            <div className="full-page-spinner"></div>
            <div className="full-page-spinner-label"> Loading ... </div>
        </div>
    )
};

const mapStateToProps = state => {
    const { isLoading } = state.lobby.loadingData;
    return {
        isLoading
    }
}

const LoadingSpinner = connect(mapStateToProps)(LoadingSpinnerView);

export default LoadingSpinner;