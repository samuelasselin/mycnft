import { withOGImage } from "next-api-og-image";

interface QueryParams {
  image: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    // include HTML template here
    html: ({ image }) => `<h1>{image}</h1>`,
  },
  cacheControl: "public, max-age=604800, immutable",
  dev: {
    inspectHtml: false,
  },
});
