import { IsMongoId, IsNotEmpty, IsOptional } from "class-validator";

export class CreateBuildingDto {
    @IsNotEmpty({ message: "name không được để trống" })
    name: string;
    @IsNotEmpty({ message: "name không được để trống" })
    address: string;
    @IsNotEmpty({ message: "name không được để trống" })
    totalRooms: number;
    @IsNotEmpty({ message: "name không được để trống" })
    numberOfPeopleRoom: number;
    @IsOptional()
    numberOfRoomsRented: number;
    @IsOptional()
    priceOfRoom: number;
    @IsOptional()
    rating: number;
    @IsNotEmpty({ message: "code package không được để trống" })
    @IsMongoId({ each: true, message: 'Mỗi phần tử trong features phải là MongoId' })
    userId: string
    @IsOptional()
    shippingPrice: number; // giá gửi xe

}
