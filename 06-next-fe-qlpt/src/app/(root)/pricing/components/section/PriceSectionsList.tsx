"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { handleOffer } from "../../requests/offers.request";
import { handlePackage } from "../../requests/package.request";
import type {
  TypeFeatureProp,
  TypeOffersItemProp,
  TypePriceItemProp,
} from "../../types/price-item";
import PriceItem from "../shared/PriceItem";
import NameOfferSections from "./NameOfferSections";
import { handleFeature } from "../../requests/feature.requet";
import BuyPackageModal from "../shared/BuyPackageModal";

type PriceSectionsListProps = {
  bgImageItemBanner: string;
  bgImageItem: string;
};
const PriceSectionsList = ({
  bgImageItem,
  bgImageItemBanner,
}: PriceSectionsListProps) => {
  const [priceItemList, setPriceItemList] = useState<TypePriceItemProp[]>([]);
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TypePriceItemProp | null>(null);
  useEffect(() => {
    const fetchPricingData = async () => {
      const resPackage = await handlePackage();
      const PriceItemListOriginal: TypePriceItemProp[] = resPackage?.data?.results
      setPriceItemList(PriceItemListOriginal);
    };

    fetchPricingData();
  }, []);

  const [offersList, setOffersList] = useState<TypeOffersItemProp[]>([]);
  useEffect(() => {
    const fetchOffer = async () => {
      const resOffer = await handleOffer();
      const OfferItemList: TypeOffersItemProp[] = resOffer?.data?.results
      setOffersList(OfferItemList);
    };

    fetchOffer();
  }, []);

  const [featuresList, setFeaturesList] = useState<TypeFeatureProp[]>([]);
  useEffect(() => {
    const fetchFeatures = async () => {
      const resFeature = await handleFeature();
      const featuresItemList: TypeFeatureProp[] = resFeature?.data?.results
      setFeaturesList(featuresItemList);
    };

    fetchFeatures();
  }, []);

  return (
    <section className="container mx-auto py-12 flex items-center justify-center bg-[#f5f5f7] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-[2] pt-12">
        {priceItemList.map((priceItem) => (
          <div
            onClick={() => {
              setSelectedPackage(priceItem);
              setOpenBuyModal(true);
            }}
            key={priceItem._id}
            className="w-[340.672px] lg:w-[400px] flex-shrink-0 lg:rounded-t-3xl lg:rounded-b-[20px] rounded-[20px] aspect-[400/577] text-[#313A5A] bg-white hover:shadow-[0px_-6px_64px_0px_rgba(0,_0,_0,_0.15)] cursor-pointer"
          >
            <PriceItem
              priceItemProp={priceItem}
              bgImageItemBanner={bgImageItemBanner}
              textItemClassName="text-[#313A5A]"
              textItemClassNameBanner=" text-[#EEB537]"
              bgImageItemClassName="hidden"
              featuresList={featuresList}
            />
          </div>
        ))}
        {/*discount */}
        <div className="w-[340.672px] lg:w-[400px] flex-shrink-0 rounded-[20px] bg-white aspect-[400/577] rounded-t-3xl">
          <div className="lg:w-[400px] flex-shrink-0 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-lg rounded-br-lg aspect-[400/168] flex items-center">
            <div className="absolute w-[340.672px] lg:w-[400px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-lg rounded-br-lg aspect-[400/168]">
              <Image
                src={bgImageItemBanner}
                alt="banner"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute pl-[41px] py-5 z-2">
              <h1 className="text-[#EEB537] font-playfair text-[20px] lg:text-[24px] font-bold leading-[38.4px] pb-[10px]">
                Giảm Giá Đặc Biệt
              </h1>
            </div>
          </div>
          <div className="max-h-[360px] overflow-y-auto">
            {offersList.map((offerItem) => (
              <div
                className="px-[41px] min-w-[307px] pt-[20px]"
                key={offerItem._id}
              >
                <div className="py-5">
                  <NameOfferSections
                    discountPercentage={Number(offerItem.discountPercentage)}
                    discountAmount={offerItem.discountCurrency}
                  />
                  <p className="text-[#313A5A] text-base lg:text-[18px] font-normal lg:leading-[160%]">
                    khi đăng ký {offerItem.condition} tháng
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BuyPackageModal
          open={openBuyModal}
          onClose={() => setOpenBuyModal(false)}
          packageData={selectedPackage}
        />
      </div>
    </section>
  );
};

export default PriceSectionsList;
