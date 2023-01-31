# Stalcraft API Wrapper in TypeScript

This is a wrapper for the Stalcraft API in TypeScript.   
It also contains fully typed model of Stalcraft database format.

## Installation

```bash
npm install stalcraft-api
```

## Database Usage

```typescript
import { StalcraftAPI } from 'stalcraft-api';

let database = new StalcraftDatabase(new GithubRepository(), 'global')

// Get all item entries
return database.getItemEntries().then((data) => {
    console.log(data)
    expect(data.length).toBeGreaterThan(0);
});

// Get specific item info
return database.getItemEntries().then((data) => {
    const entry = data[0]
    let item = database.getItemInfo(entry)
    console.log(item)
});
```

## API Usage

```typescript
import { StalcraftAppClient } from 'stalcraft-api';

// Create APP client from secret
let client = StalcraftAppClient.fromSecret(clientId, clientSecret);

// Get all auction lots for item with id 3grl in RU region
client.getAuctionLots("RU", "3grl").then((data) => {
    console.log(data)
});
```

```typescript
import { StalcraftAppClient } from 'stalcraft-api';

// Create APP client from token
let app = new StalcraftAppClient(DEMO_URL, DEMO_APP_TOKEN);
// Get all auction lots for item with id 3grl in RU region
app.getAuctionLots("RU", "3grl").then((data) => {
    console.log(data)
});
```

```typescript
import { StalcraftUserClient } from 'stalcraft-api';

// Create USER client
let user = new StalcraftUserClient(DEMO_URL, DEMO_USER_TOKEN);
// Get all characters for user
return user.getCharactersList("RU").then((data) => {
    console.log(data)
});
```

