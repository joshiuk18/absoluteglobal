import {
    IconSecurityLock,
    IconPaymentSecruity,
    IconShippingBox
} from "@/components/icons/store-icons";

export const landingsGuarantees = [
    {
        id: '1',
        title: 'Best Shipping Method',
        icon: IconShippingBox,
        content: 'We offer the best shipping on all orders, Our best shipping method ensures your products are delivered to your doorstep in a timely and cost-effective manner.',
    },
    {
        id: '2',
        title: 'Secure Payment System',
        icon: IconSecurityLock,
        content: 'Our secure payment system guarantees that all your transactions are processed with the highest level of security. We use SSL encryption and trusted payment gateways to protect your financial details.',
    },
    {
        id: '3',
        title: 'Payment Security Assurance',
        icon: IconPaymentSecruity,
        content: 'Rest assured, we take your payment security seriously. With multiple layers of protection, your credit card and payment information are always safe and confidential when shopping with us.',
    },
] as const;