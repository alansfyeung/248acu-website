!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '590042519189540'); 
fbq('track', 'PageView');

(function () {
    let img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.src = 'https://www.facebook.com/tr?id=590042519189540&ev=PageView&noscript=1';

    let noscript = document.createElement('noscript');
    noscript.appendChild(img);

    document.head.appendChild(noscript);
}());