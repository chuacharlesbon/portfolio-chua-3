export const performGTM = () => {
    console.log(`trigger manual gtm ${window.location.pathname}`);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-8EG7WTTNQT', {
        page_path: window.location.pathname,
    });
    console.log('manual gtm PAGE VIEW completed');
    gtag('event', `VIEW ${document.title}`, {
        page_path: window.location.pathname,
    });
    // window.dataLayer.push({
    //     event: document.title,
    //     event_category: 'user_interaction',
    //     event_label: 'clicked_button',
    // });
    console.log('manual gtm CUSTOM VIEW completed');
}

export const performGTMMagic = () => {
    console.log('trigger manual gtm Rick Rolled');
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-8EG7WTTNQT', {
        page_path: 'Rick Rolled',
    });
    console.log('manual gtm PAGE VIEW completed');
    gtag('event', 'Rick Rolled', {
        page_path: 'Rick Rolled',
    });
    // window.dataLayer.push({
    //     event: document.title,
    //     event_category: 'user_interaction',
    //     event_label: 'clicked_button',
    // });
    console.log('manual gtm CUSTOM VIEW completed');
    return true;
}

