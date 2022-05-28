import { withOGImage } from "next-api-og-image";

interface QueryParams {
  name: string;
}

export default withOGImage<"query", QueryParams>({
  template: {
    react: ({ name }) => <div>🔥 {name}</div>,
  },
});
