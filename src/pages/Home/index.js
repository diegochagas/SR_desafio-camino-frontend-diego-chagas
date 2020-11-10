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
    const [searchValue, setSearchValue] = useState('');
    const [devicesList, setDevicesList] = useState([]);

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

    useEffect(() => {
        if (!devices.isLoading && devices.data) {
            setDevicesList(devices.data);
        }
    }, [devices.data]);

    const handleSearch = value => {
        setSearchValue(value);

        setDevicesList(devices.data.filter(device => {
            return device.name.toLowerCase().includes(value.toLowerCase())
        }));
    }

    return (
        <Container>
            {showMessage && (
                <div className={`alert alert-${status.error ? 'danger' : 'success'}`} role="alert">
                    {status.error ? `${status.name} ${status.message}` : `${status.name} device status updated`}
                </div>
            )}

            {devices.isLoading && <div className="loading"><progress /></div>}

            {!devices.isLoading && devices.data && (
                <>
                    <div className="counter">
                        <span>Actived devices: </span>

                        <b>
                            {devices.data.reduce((actives, device) => {
                                if (device.active) actives++;

                                return actives;
                            }, 0)}
                        </b>
                    </div>

                    <input
                        className="form-control"
                        type="text"
                        placeholder="Search device..."
                        value={searchValue}
                        onChange={event => handleSearch(event.target.value)}
                    />

                    <div className="devices">
                        {devicesList.length > 0 && devicesList.map(device => (
                            <Device
                                key={device.unit}
                                device={device}
                                showMessage={setShowMessage}
                            />
                        ))}

                        {devicesList.length === 0 && (
                            <div class="alert alert-light" role="alert">
                                Device not found
                            </div>
                        )} 
                </div>
              </>
            )}
        </Container>
    );
}

export default Home;