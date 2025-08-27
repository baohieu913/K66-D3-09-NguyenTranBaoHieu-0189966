import { handleBuildingUser } from "../buildings/requests/building.requests";
import { handlePackageUser } from "../packages/requests/package.requests";
import { handleUserLoginv2 } from "../users/requests/user.requests";
import ElectricityCard from "./chart/electricity.card";
import AdminIncomeCard from "./chart/income.card";
import VehiclesCard from "./chart/vehicles.card";
import WaterCard from "./chart/water.card";


const DashboardSection = async () => {
    const session = await handleUserLoginv2()
    const status = session?.data?.results?.[0].status;
    const res = await handlePackageUser()
    const featureRoom = '68a04d2be5e499bf312f7bdf';
    const featureWater = '68a04d8ce5e499bf312f7c3c';
    const featureElectricity = '68a04db0e5e499bf312f7c43';
    const featureVehicles = '68a04dd6e5e499bf312f7c4a';

    const features = res?.data?.results[0]?.features;
    const isFeatureRoom = features?.includes(featureRoom);
    const isFeatureWater = features?.includes(featureWater);
    const isFeatureElectricity = features?.includes(featureElectricity);
    const isFeatureVehicles = features?.includes(featureVehicles);

    return (
        <div className="">
            {(isFeatureRoom && status === true) && <AdminIncomeCard />}
            {(isFeatureWater && status === true) && <WaterCard />}
            {(isFeatureElectricity && status === true) && <ElectricityCard />}
            {(isFeatureVehicles && status === true) && <VehiclesCard />}
        </div>
    );
};

export default DashboardSection;