import { withOGImage } from "next-api-og-image";

interface QueryParams {
  src: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    react: ({ src }) => (
      <html>
        <body>
          <img src={src} width="350" height="350" alt="Nft" />
        </body>
      </html>
    ),
  },
});
