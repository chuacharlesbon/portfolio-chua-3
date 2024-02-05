export const performGTM = () => {
    console.log("trigger manual gtm");
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8EG7WTTNQT', {
    page_path: window.location.pathname,
    });
}

