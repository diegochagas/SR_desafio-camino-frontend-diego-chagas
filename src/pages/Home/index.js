import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { fetchDevicesRequest } from '../../store/modules/devices/actions';
import Device from '../../components/Device';

function Home() {
    const dispatch = useDispatch();
    const devices = useSelector(state => state.devices);
    const status = useSelector(state => state.status);
    const [showMessage, setShowMessage] = useState(false);

    async function getDevices() {
        await dispatch(fetchDevicesRequest());   
    }

    useEffect(() => {
        getDevices();
    }, []);

    useEffect(() => {
        if (!status.isLoading) getDevices();
    }, [status.isLoading]);

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => setShowMessage(false), 5000);
        }
    }, [showMessage]);

    return (
        <Container>
            {showMessage && (
                <div className={`alert alert-${status.error ? 'danger' : 'success'}`} role="alert">
                    {status.error ? `${status.name} ${status.message}` : `${status.name} device status updated`}
                </div>
            )}

            {devices.isLoading && <div className="loading"><progress /></div>}

            {!devices.isLoading && devices.data && (
                <div className="devices">
                    {devices.data.map(device => (
                        <Device
                            key={device.unit}
                            device={device}
                            showMessage={setShowMessage}
                        />
                    ))}
              </div>
            )}
        </Container>
    );
}

export default Home;