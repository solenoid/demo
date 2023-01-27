While doing local development the need to work on multiple apps at the same time
arises. To allow for this need if we have a good port number scheme it can allow
for most or all apps to be run at the same time. It's not realistic to want to
run everything all the time, but it does come up where you want to run a set of
things at the same time. This could be common set of things, or ad-hoc sets of
things needed for a short time.

It's hard to predict all potential combinations so instead this aims for a port
plan that should avoid all potential port conflicts.

To avoid port conflicts the numbering scheme is:

- apps start on port 9000 and go up by 1 for each new app
- docs start on port 9999 and go down by 1 for each new doc

That leads to the following situation where apps and docs running closer to 9000
and 9999 respectively were either started earlier or became more important later
and switched to a spot closer to those memorable ports.

### Ports for Apps

| Port | Status | Description |
| ---- | ------ | ----------- |
| 9000 | Used   | astro-home  |
| 9001 | Used   | nextjs-home |
| 9002 | Used   | vite-home   |

### Ports for Docs

| Port | Status | Description    |
| ---- | ------ | -------------- |
| 9999 | Used   | nextjs-docs    |
| 9998 | Used   | docsify-docs   |
| 9997 | Used   | vitepress-docs |

## Ports Used, Reserved, or Unassigned

If a new app gets added it should be included in the listing. If ports want to
change among existing spots figure out if it is a switch or one goes to the end
of the list and a gap is left afterwards. Any gaps can be called out as
`Unassigned` spots in the listing. If there is another port that is the default
for a service other than one of the apps or docs in this repo it can be listed
as `Used` along with noting it's an external service and why it's considered
used. If something should not be used but it is known that it wants to be saved
it can be marked as `Reserved` so it will not be considered as an available
port. For a list of registered services for ports within range see
[page 114](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?&page=114)
through
[page 119](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?&page=119)
from the IANA Service Name and Transport Protocol Port Number Registry.

## Future questions

### More than 1000 Ports question

So you may wonder what happens if you have more than 1000 ports we'd want to
support since ports `9000-9999` only has 1000 spots. At that point the port
scheme should be reconsidered to see if it wants to expand to another range
outside the nine-thousands, or the problem is more well known and should be
reconsidered more fundamentally.

## Proxy Ports

So far reservations for proxy ports have not been needed. If the need does arise
then it is likely the case they will be treated like another app and can exist
nearby the app they are a proxy for. An alternative that is worth considering is
having them mirror the app port and offset by some multiple of a hunder to stay
in the nine-thousand range. When the need arises the guidance will clarify on
which approach is being taken.
