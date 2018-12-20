import React from 'react';

const DisplayItem = ({match}) => {
    return (
        <div>
            The item will be displayed here {match.params.id}
        </div>
    )
}

export default DisplayItem;