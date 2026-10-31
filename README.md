# n8n-nodes-heinzelmann

This is an n8n community node. It lets you use _app/service name_ in your n8n workflows. It is not form production use. It is used for testing only.

_App/service name_ is _one or two sentences describing the service this node integrates with_.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The node supports every endpoint of the Heinzelmann REST API. Parameters are sent as query parameters, as described in the API documentation.

| Resource | Operation | Endpoint |
| --- | --- | --- |
| Authentication | Login | `POST /api/auth/login` |
| Category | Get Many | `GET /api/GetCategories` |
| Contact | Get by Phone Number | `GET /api/ContactByPhoneNumber/{PhoneNumber}` |
| Contact | Get Many | `GET /api/GetContacts` |
| Contact | Get Recent Tickets | `GET /api/Contact/{ContactID}/Tickets` |
| Phone Call | Create | `POST /api/SaveTapiCall` |
| Phone Call | Get Many | `GET /api/TapiCalls/{CallState}` |
| Phone Call | Save Note | `POST /api/SaveCallNotice` |
| Support Group | Get Many | `GET /api/GetGroups` |
| Supporter | Get Many | `GET /api/GetSupporters` |
| Ticket | Add Device | `POST /api/AddDeviceToTicket` |
| Ticket | Add Document | `POST /api/AddDocumentToTicket` |
| Ticket | Close | `POST /api/CloseTicket` |
| Ticket | Create | `POST /api/AddTicket` |
| Ticket | Delete | `POST /api/DeleteTicket` |
| Ticket | Get | `GET /api/GetTicket` |
| Ticket | Get Many | `GET /api/GetTickets` |
| Ticket | Mark as Done | `POST /api/SetTicketStatusDone` |
| Ticket | Reopen | `POST /api/ReopenTicket` |
| Ticket | Update | `POST /api/UpdateTicket` |
| Ticket Event | Create | `POST /api/AddTicketEvent` |
| Ticket Event | Update | `POST /api/UpdateTicketEvent` |
| Ticket Filter | Get Many | `GET /api/GetFilters` |
| Ticket Type | Get Many | `GET /api/GetTickettypes` |

The Heinzelmann API does not support pagination. "Get Many" operations always request all results, and the **Limit** option only trims the results that were received.

According to the API documentation, "Phone Call → Create" returns the ID of the saved call and "Phone Call → Save Note" returns a boolean. Plain values like these are output as `{ "data": <value> }`.

## Credentials

_If users need to authenticate with the app/service, provide details here. You should include prerequisites (such as signing up with the service), available authentication methods, and how to set them up._

## Compatibility

_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._

## Usage

_This is an optional section. Use it to help users with any difficult or confusing aspects of the node._

_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* _Link to app/service documentation._

## Version history

_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._
