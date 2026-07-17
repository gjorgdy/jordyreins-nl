## Helix Survival Minecraft Server
Helix Survival is my oldest and biggest project.
It started as a simple server to play on with friends around 2019.
Throughout the years, the server has grown alot, both in playerbase and in complexity.

### Custom Mods
Because of a combination of curiosity into modding itself and the limits of the game, the server has strayed away from vanilla a bit.
Nonetheless, I have always maintained the requirements of being able to join the server with a fully vanilla client and ensuring a vanilla-like experience.

#### Helix Shops & Helix REST
Made for the newest season of the server; Season 5, Helix Shops adds player made shops to the server where they can buy and sell items.
Helix REST was made by a server member to be used as a library for the shops to be retrieved through a REST API.
> [Shops API Demo page](https://www.hexasis.eu/helix/vanilla/shops)

#### Pl3xMarkers
Helix uses the mod/plugin called [Pl3xMap](https://modrinth.com/plugin/pl3xmap), which adds a webmap, akin to something like Google Maps to a Minecraft server. Pl3xMarkers is a custom addon for this which adds a ton of markers to this map including player base areas, shops, portals and more.
> [Helix Survivals' Webmap](https://map.hexasis.eu/?world=minecraft-overworld&renderer=vintage_story&zoom=1&x=-457&z=144)

![[pl3xMarkers]](pl3xmarkers.png)

#### And quite a bit more
All features of and other information about the server can be found on the [official website](https://www.hexasis.eu/helix).

### Hosting
The main server; 'Vanilla' is hosted on a home server using [itzg's Minecraft image](https://github.com/itzg/docker-minecraft-server) on docker on Ubuntu server. This is a simple homelab using mainly reused consumer hardware from my old gaming PCs.

It is exposed to the internet in two different ways: 
- its webservers, for the webmap, the API and the audio upload page are exposed through a [Caddy](https://caddyserver.com/) reverse proxy and protected by a Cloudflare DNS proxy.
- the game server itself is connected to a VPS using a [Tailscale](https://tailscale.com/) tunnel where it gets routed through a [Velocity proxy](https://papermc.io/software/velocity/) which is finally exposed as an open port.

---

*vanilla* - as made by the original developers of a game
