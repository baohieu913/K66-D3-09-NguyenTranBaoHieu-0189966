export const findNearestCompany = async (
    origin: string,
    destinations: string[]
): Promise<number> => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        origin
    )}&destinations=${destinations.map(encodeURIComponent).join('|')}&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    let minDistance = Number.MAX_VALUE;
    let nearestIndex = 0;

    data.rows[0].elements.forEach((el: any, index: number) => {
        if (el.status === 'OK' && el.distance.value < minDistance) {
            minDistance = el.distance.value;
            nearestIndex = index;
        }
    });

    return nearestIndex;
};
