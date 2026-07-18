import type { PageLoad } from './$types';

export type Paragraph = (locale: "en"|"nl") => string;

export const load: PageLoad = async () => {

  const study: Paragraph = (locale) => {
    switch (locale) {
      case 'en': return `
## Study
I am a full time student, studying **HBO-ICT** at **Windesheim University of Applied Sciences**.
Throughout my study I have gotten classes and made projects across various fields of IT.
The primary direction I focus on is **Software Development**, this includes building web applications, back-end systems, and desktop software.

Besides these, I have also followed semesters in **Quality Software Development**; focussing on architecture and development patterns, and
**Games Programming**; about the systems behind games like rendering and NPCs.

The first semester of the schoolyear 26/27 I will be doing a minor in **International Relations** because of a personal interest in politics.`
      case 'nl': return `
## Opleiding
Ik ben een voltijd student **HBO-ICT** op **Hogeschool Windesheim**.
In mijn studie heb ik klassen gevolgd en projecten gedaan in verschillende velden binnen ICT.
De primaire richting waar ik op focus is **Software Development**, dit gaat het om het ontwikkelen van webapplicaties, back-end systemen en desktop programma's.

Naast de voorgenoemde richtingen heb ik ook semesters gevolgd in **Quality Software Development** over architectuur en ontwikkelpatronen,
en **Games Programming**; over de systemen achter games zoals renderen en NPCs.

Het eerste semester van het schooljaar 26/27 ga ik een minor volgen in **International Relations** omdat ik een persoonlijk interesse heb in politiek.`
    }
  }

  const homelab: Paragraph = (locale) => {
    switch (locale) {
      case 'en': return `
## Homelab and VPS
The past few years I have managed a **homelab** and a **VPS**.
These primarily using Docker on Ubuntu Server, managed with tools like [Portainer](https://www.portainer.io/) and [Dozzle](https://dozzle.dev/).

This also includes working with networking like DNS, reverse proxies, and VPN tunneling.
Primarily using [Cloudflare](https://www.cloudflare.com/products/dns/), [Caddy](https://caddyserver.com/), and [Tailscale](https://tailscale.com/) respectively.

I use my homelab for various things such as storage, home automation, and gameservers.\\
My VPS is mainly used for lighter programs such as websites (including this one) and discord bots where uptime is important.`
      case 'nl': return `
## Homelab en VPS
De afgelopen paar jaar heb ik een **homelab** en een **VPS** beheerd.
Deze draaien beide Docker op Ubuntu Server, beheerd met tools zoals [Portainer](https://www.portainer.io/) en [Dozzle](https://dozzle.dev/).

Hiervoor werk ik ook met networking zoals DNS, reverse proxies en VPN tunneling.
Vooral met [Cloudflare](https://www.cloudflare.com/products/dns/), [Caddy](https://caddyserver.com/), en [Tailscale](https://tailscale.com/), in die volgorde.

Ik gebruik mijn homelab voor veel verschillende dingen van opslag tot thuisautomatie tot gameservers.\\
Mijn VPS gebruik ik voor lichtere programma's waar uptime belangrijk is zoals websites (inclusief deze) en discord bots.`
    }
  }


  return { study, personal: homelab };
};
