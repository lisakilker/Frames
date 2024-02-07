import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "View 7 Images"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmaBrMjQ85RGQp7Qk1Xd9HaBzXepWBk9K8mpqkc4dt3uwh/Image1.jpeg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Create AI generated images',
  description: 'Create AI generated images',
  openGraph: {
    title: 'Create AI generated images',
    description: 'Create AI generated images',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmaBrMjQ85RGQp7Qk1Xd9HaBzXepWBk9K8mpqkc4dt3uwh/Image1.jpeg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Create AI generated images</h1>
    </>
  );
}
