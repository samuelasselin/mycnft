import { withOGImage } from "next-api-og-image";

interface QueryParams {
  image: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    // include HTML template here
    html: ({ image }) =>
      `<img height="650px" width="650px" alt='nft' src={image}/>`,
  },
  cacheControl: "public, max-age=604800, immutable",
  dev: {
    inspectHtml: false,
  },
});
