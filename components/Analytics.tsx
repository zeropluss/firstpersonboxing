'use client';

import Script from 'next/script';

export default function Analytics() {
  return <Script defer data-domain="firstpersonboxing.org" src="https://app.pageview.app/js/script.js" strategy="afterInteractive" />;
}
