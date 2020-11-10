import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { Container } from './styles';
import { formatDate } from '../../utils';
import { changeStatusRequest } from '../../store/modules/status/actions';

function Device({ device, showMessage }) {
    const dispatch = useDispatch();    
    const status = useSelector(state => state.status);
    const [name, setName] = useState('');

    useEffect(() => { 
        if (!status.isLoading && device.name === name) {
            showMessage(true);

            setName('');
        }       
    }, [status.isLoading, device]);

    const handleChange = async device => {
        setName(device.name);

        await dispatch(changeStatusRequest(device.name, !device.active));
    }

    return (
        <div className={`card border-${device.active ? 'primary' : 'secondary'}`} key={device.unit}>
            <div className="card-header">{device.name}</div>
            
            <div className={`card-body text-${device.active ? 'primary' : 'secondary'}`}>
                <p className="card-text">
                    <b>unit: </b><span>{device.unit}</span>
                </p>

                <p className="card-text">
                    <b>date: </b><span>{formatDate(device.timestamp)}</span>
                </p>
                <p className="card-text">
                    <b>value: </b><span>{device.value}</span>
                </p>

                {status.isLoading && device.name === status.name ? <progress /> : (
                    <div className="custom-control custom-switch">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`activeSwitch${device.unit}`}
                            checked={device.active}
                            onChange={() => handleChange(device)}
                        />

                        <label className="custom-control-label" htmlFor={`activeSwitch${device.unit}`}>
                            {device.active ? 'Active' : 'Inactive'}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Device;