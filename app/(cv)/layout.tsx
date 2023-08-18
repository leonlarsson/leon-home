import "/public/assets/styles/cv.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/brands.min.css";

export const metadata = {
  metadataBase: new URL("https://leonlarsson.com")
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
