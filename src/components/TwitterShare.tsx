import React, { FC } from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";

interface TwitterShareProps {
  url: string;
  title: string;
  hashtags: string[];
}

export const TwitterShare: React.FC<TwitterShareProps> = ({
  url,
  title,
  hashtags,
}) => {
  return (
    <TwitterShareButton hashtags={hashtags} title={title} url={url}>
      <TwitterIcon size={24} />
    </TwitterShareButton>
  );
};
