import { withOGImage } from "next-api-og-image";

interface QueryParams {
  stage: string;
  name: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    react: async ({ name, stage }) => {
      return `
        <html>
          <body>
            <h1>${name} - ${stage}</h1>
          </body>
        </html>
      `;
    },
  },
});
