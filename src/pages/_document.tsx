import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*FavIcon*/}
          <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&family=Montserrat:wght@300;600&display=swap"
            rel="stylesheet"
          />

          {/* ACTA */}
          <script async src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
          <script async src="https://code.jquery.com/jquery-migrate-1.4.1.min.js"></script>
          <script async src="https://www.actatechlaw.com.br/www/js/widget.js?c=0716d9708d321ffb6a00818614779e779925365c"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
