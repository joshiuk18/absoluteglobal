import React from "react";
import PrivacyPolicy from "@/components/policies/privacypolicy";
import RefundPolicy from "@/components/policies/refundpolicy";
import ReturnPolicy from "@/components/policies/returnpolicy";
import ShippingPolicy from "@/components/policies/shippingpolicy";
import TermsAndConditions from "@/components/policies/termspolicy";
import TrackOrder from "@/components/policies/trackorder";

type CategoryItem = {
    id: string;
    slug?: string;
    title: string;
    content?: React.FC | string;
};

type Section = {
    id: string;
    title: string;
    category: CategoryItem[];
};

export const landingFooterSections: Section[] = [
    {
        id: "1",
        title: "Absolute Global",
        category: [
            { id: "1", slug: "return-policy", title: "Return Policy", content: ReturnPolicy },
            { id: "2", slug: "refund-policy", title: "Refund Policy", content: RefundPolicy },
            { id: "3", slug: "terms-and-conditions", title: "Terms and Conditions", content: TermsAndConditions },
            { id: "4", slug: "privacy-policy", title: "Privacy Policy", content: PrivacyPolicy },
            { id: "5", slug: "shipping-policy", title: "Shipping Policy", content: ShippingPolicy },
        ],
    },
    {
        id: "2",
        title: "Useful Links",
        category: [{ id: "1", slug: "track-order", title: "Track Order", content: TrackOrder }],
    },
    {
        id: "3",
        title: "Contact Us",
        category: [
            { id: "1", title: "address", content: "F-316, 2nd Floor,Lado Sarai, New Delhi-110030" },
            { id: "2", title: "mail", content: "info@absoluteglobal.in" },
            { id: "3", title: "number", content: "+91-9871829090" },
        ],
    },
    {
        id: "4",
        title: "Vendor Registration",
        category: [{ id: "1", title: "Register as Vendor" }],
    },
];