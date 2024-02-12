
import React from 'react';
import { FaCheck, FaTimes, FaClock } from 'react-icons/fa';


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
        <div>
            <div>Name: {item.name}</div>
            <div>Description: {item.description}</div>
            <div>Status: <StatusIcon compStatus={item.status} /></div>
            {item.errorMsg && <div>Error: {item.errorMsg}</div>}
        </div>
    );
};

const SearchResults: React.FC<{ results: SearchResultItem[] }> = ({ results }) => {
    return (
        <div>
            {results.map((item: SearchResultItem, index: React.Key) => (
                <ResultItem key={index} {...item} />
            ))}
        </div>
    );
};

export default SearchResults;