import type { PageLoad } from './$types';

export type Paragraph = (locale: "en"|"nl") => string;

export const load: PageLoad = async () => {

  const study: Paragraph = (locale) => {
    switch (locale) {
      case 'en': return `
## Study
I am a full time student, studying **HBO-ICT** at *Windesheim University of Applied Sciences*.
Throughout my study I have gotten classes and made projects across various fields of IT.
The primary direction I focus on is *Software Development*, this includes building **web applications**, **back-end systems**, and **desktop software**.

Besides these, I have also followed semesters in *Quality Software Development*; focussing on **architecture** and **development patterns**, and
*Games Programming*; about the systems behind games like **rendering** and **algorithms**.

The first semester of the schoolyear 26/27 I will be doing a minor in **International Relations** because of a personal interest in politics.`
      case 'nl': return `
## Opleiding
Ik ben een voltijd student **HBO-ICT** op *Hogeschool Windesheim*.
In mijn studie heb ik klassen gevolgd en projecten gedaan in verschillende velden binnen ICT.
De primaire richting waar ik op focus is *Software Development*, dit gaat het om het ontwikkelen van **webapplicaties**, **back-end systemen** en **desktop programma's**.

Naast de voorgenoemde richtingen heb ik ook semesters gevolgd in *Quality Software Development* over architectuur en ontwikkelpatronen,
en *Games Programming*; over de systemen achter games zoals **renderen** en **algorithms**.

Het eerste semester van het schooljaar 26/27 ga ik een minor volgen in *International Relations* omdat ik een persoonlijk interesse heb in politiek.`
    }
  }

  const homelab: Paragraph = (locale) => {
    switch (locale) {
      case 'en': return `
## Homelab and VPS
A few years ago I purchased a *homelab* and a *VPS*.
These run **Docker** on **Ubuntu Server**, managed with tools like [Portainer](https://www.portainer.io/) and [Dozzle](https://dozzle.dev/).

This also includes working with networking like **DNS**, **reverse proxies**, and **VPN tunneling**.
Primarily using [Cloudflare](https://www.cloudflare.com/products/dns/), [Caddy](https://caddyserver.com/), and [Tailscale](https://tailscale.com/) respectively.

I use my homelab for various things such as **storage**, **home automation**, and **gameservers**.\\
My VPS is mainly used for lighter programs where uptime is important such as **websites** (including this one) and **discord bots**.`
      case 'nl': return `
## Homelab en VPS
Een aantal jaar geleden heb ik een *homelab* en een *VPS* aangeschaft.
Deze draaien beide **Docker** op **Ubuntu Server**, beheerd met tools zoals [Portainer](https://www.portainer.io/) en [Dozzle](https://dozzle.dev/).

Hiervoor werk ik ook met networking zoals **DNS**, **reverse proxies** en **VPN tunneling**.
Vooral met [Cloudflare](https://www.cloudflare.com/products/dns/), [Caddy](https://caddyserver.com/), en [Tailscale](https://tailscale.com/), in die volgorde.

Ik gebruik mijn homelab voor veel verschillende dingen van **opslag** tot **thuisautomatie** tot **gameservers**.\\
Mijn VPS gebruik ik voor lichtere programma's waar uptime belangrijk is zoals **websites** (inclusief deze) en **discord bots**.`
    }
  }

  const modding: Paragraph = (locale) => {
    switch (locale) {
      case 'en': return `
## Modding
If I'm doing programming in my free time, it's mostly on **modding** games.
Particularly for *Minecraft* which is written in **Java** which makes it easy to decompile.

For this I use [**Fabric**](https://fabricmc.net/), which makes use of [**Mixins**](https://github.com/SpongePowered/Mixin) to inject code into the game.
My preference is for server-side mods, changing the game's behavior within the vanilla client's limits is a fun challenge.`
      case 'nl': return /* md */ `
## Modden
Als ik in mijn vrije tijd aan het programmeren ben, is dit meestal aan het **modden** van games.
Dit vooral voor *Minecraft* wat geschreven is in **Java** wat makkelijk te decompileren is.

Hierbij maak ik gebruik van [**Fabric**](https://fabricmc.net/), dit maakt vooral gebruik van [**Mixins**](https://github.com/SpongePowered/Mixin) om code te injecteren in de game.
Mijn voorkeur ligt vooral bij server-side mods, verandering maken binnen de grenzen van de vanilla client van de game is een leuke uitdaging.`
    }
  }

  const languages: Paragraph = (locale) => {
    switch (locale) {
      case 'en': return `
## Languages, Frameworks, and Tools
Originally I learned to program in [**Python**](https://www.python.org/) whereafter I quickly moved on to [**Java**](https://www.java.com/en/download/) to expand on **Object Oriented Programming**.
To this day, OOP is still my preferred paradigm.

For back-end systems I use [**C# .NET**](https://dotnet.microsoft.com/en-us/languages/csharp), for modding in Minecraft I ofcourse use [**Java**](https://www.java.com/en/download/),
and for web development my preferred stack is [**Svelte**](https://svelte.dev/) in [**TypeScript**](https://www.typescriptlang.org/) with [**Tailwind CSS**](https://tailwindcss.com/).

As of tools, I use a [**JetBrains**](https://www.jetbrains.com/) IDE where possible,
but I have switched to [**Zed**](https://zed.dev/) for web development to try something new.`
      case 'nl': return `
## Talen, Frameworks, en Tools
Ik heb origineel geleerd programmeren in [**Python**](https://www.python.org/) waarna ik al snel door ben gegaan naar **Java** om verder te verdiepen in **Object Oriented Programming**.
OOP is dan ook het 'paradigma' wat ik nog steeds het meeste gebruik.

Voor back-end systemen gebruik ik veelal [**C# .NET**](https://dotnet.microsoft.com/en-us/languages/csharp), voor modding in Minecraft gebruik ik natuurlijk [**Java**](https://www.java.com/en/download/), en voor het maken van websites is mijn stack naar voorkeur
[**Svelte**](https://svelte.dev/) in [**TypeScript**](https://www.typescriptlang.org/) met [**Tailwind CSS**](https://tailwindcss.com/).

Qua tools gebruik ik waar het kan een [**JetBrains**](https://www.jetbrains.com/) IDE, voor web development ben ik nu wel overgeschakeld naar [**Zed**](https://zed.dev/) om het te proberen.`
    }
  }

  return { study, homelab, modding, languages };
};
