import { withOGImage } from "next-api-og-image";

interface QueryParams {
  src: string;
}

const style = `

    html, body {
        height: 100%;
        margin:0;
        padding:0;
    }
      
    div {
        position:relative;
        height: 100%;
        width:100%;
    }

    div img {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
    }
`;

export default withOGImage<"query", QueryParams>({
  template: {
    react: ({ src }) => (
      <html>
        <head>
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </head>
        <body>
          <div>
            <img src={src} width="550" height="550" alt="Nft" />
          </div>
        </body>
      </html>
    ),
  },
});
