"use client"
import {
    GoogleMap,
    LoadScript,
    Marker,
    DirectionsRenderer,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { getGeocodeFromAddress } from '../../utils/geocode';
import { findNearestCompany } from '../../utils/distance';

const companies = [
    {
        name: 'Công ty A',
        address: '119 P. Bạch Mai, Thanh Nhàn, Hai Bà Trưng, Hà Nội, Vietnam',
    },
    {
        name: 'Công ty B',
        address: '159 P. Lê Thanh Nghị, Đồng Tâm, Hai Bà Trưng, Hà Nội, Vietnam',
    },
];

const AccommodationMap = () => {
    const [userAddress, setUserAddress] = useState('');
    const [userLocation, setUserLocation] = useState<any>(null);
    const [companyCoords, setCompanyCoords] = useState<any[]>([]);
    const [directions, setDirections] = useState<any>(null);

    useEffect(() => {
        // Lấy tọa độ các công ty
        Promise.all(companies.map((c) => getGeocodeFromAddress(c.address))).then(setCompanyCoords);
    }, []);

    const handleSearch = async () => {
        const userLoc = await getGeocodeFromAddress(userAddress);
        if (!userLoc) return;

        setUserLocation(userLoc);

        const nearestIndex = await findNearestCompany(userAddress, companies.map((c) => c.address));
        const nearestCompany = await getGeocodeFromAddress(companies[nearestIndex].address);

        // Gọi Directions API
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: userLoc,
                destination: nearestCompany,
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === 'OK' && result) {
                    setDirections(result);
                }
            }
        );
    };

    return <section className="relative container mx-auto flex items-center justify-center ">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <div className="absolute top-4 p-2 rounded shadow z-10 flex gap-2 mx-auto">
                <input
                    type="text"
                    value={userAddress}
                    onChange={(e) => setUserAddress(e.target.value)}
                    placeholder="Nhập địa chỉ của bạn..."
                    className="p-2 border rounded w-[800px]"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Tìm đường
                </button>
            </div>

            <GoogleMap
                mapContainerStyle={{ height: '800px', width: '1240px' }}
                center={userLocation || { lat: 21.0278, lng: 105.8342 }}
                zoom={14}
                options={{ gestureHandling: 'greedy' }}
            >
                {companyCoords.map((pos, idx) => (
                    <Marker key={idx} position={pos} title={companies[idx].name} />
                ))}
                {userLocation && <Marker position={userLocation} label="Bạn" />}
                {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
        </LoadScript>
    </section>
}

export default AccommodationMap