import { withOGImage } from "next-api-og-image";

interface QueryParams {
  stage: string;
  name: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    // include HTML template here
    html: ({ name, stage }) => `<h1>${name} - ${stage}</h1>`,
  },
  dev: {
    inspectHtml: false,
  },
});
