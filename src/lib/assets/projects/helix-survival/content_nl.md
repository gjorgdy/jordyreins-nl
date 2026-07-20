Helix Survival is mijn oudste en grootste project.
Het begon rond 2019 als een simpele server om samen met vrienden op te spelen.
Door de jaren heen is de server flink gegroeid, zowel qua aantal spelers als in complexiteit.

### Custom Mods

Door een combinatie van nieuwsgierigheid naar modding zelf en de limieten van de game, is de server een beetje afgeweken van *vanilla*.
Desondanks heb ik er altijd voor gezorgd dat het mogelijk blijft om de server met een volledig vanilla client te joinen, om zo een vanilla-achtige ervaring te garanderen.

#### Helix Shops & Helix REST

Gemaakt voor het nieuwste seizoen van de server; Season 5. Helix Shops voegt door spelers gemaakte shops toe aan de server waar ze items kunnen kopen en verkopen.
Helix REST is door een serverlid gemaakt als library, zodat de shops via een REST API kunnen worden opgehaald.

> [Shops API Demo pagina](https://www.hexasis.eu/helix/vanilla/shops)

#### Pl3xMarkers

Helix gebruikt de mod/plugin genaamd [Pl3xMap](https://modrinth.com/plugin/pl3xmap), die een webmap aan de Minecraft-server toevoegt, vergelijkbaar met iets als Google Maps. Pl3xMarkers is een custom addon hiervoor die een heleboel markers aan deze map toevoegt, waaronder player bases, shops, portals en meer.

> [Helix Survival Webmap](https://map.hexasis.eu/?world=minecraft-overworld&renderer=vintage_story&zoom=1&x=-457&z=144)

![[pl3xMarkers]](pl3xmarkers.png)

#### En nog flink wat meer

Alle features en verdere informatie over de server is te vinden op de [officiële website](https://www.hexasis.eu/helix).

### Hosting

De hoofdserver; 'Vanilla', wordt gehost op een thuisserver met behulp van [itzg's Minecraft image](https://github.com/itzg/docker-minecraft-server) via Docker op een Ubuntu-server. Dit is een simpele homelab die voornamelijk draait op hergebruikte consumentenhardware uit mijn oude gaming-pc's.

Het is op twee verschillende manieren toegankelijk gemaakt vanaf het internet:

* de webservers (voor de webmap, de API en de audio-uploadpagina) lopen via een [Caddy](https://caddyserver.com/) reverse proxy en worden beschermd door een Cloudflare DNS-proxy.
* de gameserver zelf is via een [Tailscale](https://tailscale.com/) tunnel verbonden met een VPS. Daar wordt het gerouteerd door een [Velocity proxy](https://papermc.io/software/velocity/), die uiteindelijk wordt opengesteld als een open poort.

---

*vanilla* - zoals gemaakt door de originele ontwikkelaars van een game
