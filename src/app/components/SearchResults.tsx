
import React from 'react';
import { FaCheck, FaTimes, FaClock } from 'react-icons/fa';
import './SearchResults.css';

interface SearchResultItem {
    name: string;
    description: string;
    status: string;
    errorMsg?: string;
}

//const StatusIcon: React.FC<StatusIconProps> = ({compStatus}) => {
//const StatusIcon: React.FC<{compStatus: string}> = ({compStatus}) => {
const StatusIcon = ({ compStatus }: { compStatus: string }) => {
    switch (compStatus) {
        case 'compliant':
            return <FaCheck color="green" />;
        case 'non-compliant':
            return <FaTimes color="red" />;
        case 'pending':
            return <FaClock color="gray" />;
        default:
            return <></>;
    }
};

const ResultItem = (item: SearchResultItem) => {
    return (
        <div className="grid-row">
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>
                <StatusIcon compStatus={item.status} />
            </div>
            <div>{item.errorMsg}</div>
        </div>
    );
};

const SearchResults: React.FC<{ results: SearchResultItem[] }> = ({ results }) => {
    return (
        <div className="search-results-container">
            {/* Column headers */}
            <div className="grid-header">
                <div>Name</div>
                <div>Description</div>
                <div>Status</div>
                <div>Error</div>
            </div>
            {results.map((item: SearchResultItem, index: React.Key) => (
                <ResultItem key={index} {...item} />
            ))}
        </div>
    );
};

export default SearchResults;