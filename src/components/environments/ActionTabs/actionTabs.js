import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import './actionTabs.css';
import SearchBar from '../../organisms/SearchBar/searchBar';
import EmptyTabPlaceholder from '../../molecules/EmptyTabPlaceholder/emptyTabPlaceholder';

const ActionTabs = () => (
    <div className="main-action-tabs">
        <Tabs defaultActiveKey={1} id="action-tabs">
            <Tab eventKey={1} title="Search">
                <SearchBar />
            </Tab>
            <Tab eventKey={2} title="Users">
                <EmptyTabPlaceholder />
            </Tab>
            <Tab eventKey={3} title="Playlist">
                <EmptyTabPlaceholder />
            </Tab>
        </Tabs>
    </div>
);

export default ActionTabs;