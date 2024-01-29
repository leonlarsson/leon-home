type Props = {
  title: string;
  description: string;
  url?: string;
  appendNameInOG?: boolean;
};

export default ({ title, description, url, appendNameInOG }: Props) => {
  return {
    openGraph: {
      title: appendNameInOG ? `${title} | Leon San José Larsson` : title,
      description: description,
      url: url ?? "https://leonlarsson.com",
      siteName: "Leon San José Larsson",
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: appendNameInOG ? `${title} | Leon San José Larsson` : title,
      description: description,
      creator: "@mozzyfx",
    },
  };
};
