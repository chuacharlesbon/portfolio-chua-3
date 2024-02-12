export const performGTM = () => {
    console.log(`trigger manual gtm ${window.location.pathname}`);
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8EG7WTTNQT', {
    page_path: window.location.pathname,
    });
    // window.dataLayer.push({
    //     event: document.title,
    //     event_category: 'user_interaction',
    //     event_label: 'clicked_button',
    // });
    console.log(`manual gtm completed ${window.location.pathname}`);
}

