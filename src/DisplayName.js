import React, { useState } from 'react';


const DisplayName = () => {

    const [name, setName] = useState('Stranger')

    return (
        <div className="display-name div-component">
            <h2>Name display</h2>
            <h3>Hello {name}</h3>
            <input value={name} className="input-text" onChange={e => setName(e.target.value)} />
        </div>
    );
}

export default DisplayName;