# Finix Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/finix)](https://www.npmjs.com/package/@fern-api/finix)

## Documentation

API documentation is available at <https://finix.com/docs/api/overview/>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-bsmt1v?file=app.ts&view=editor)

```typescript
import { FinixApi, FinixApiClient } from '@fern-api/finix';
import { Environment } from '@fern-api/finix/environments';

const client = new FinixApiClient({
  environment: Environment.Sandbox,
  auth: {
    credentials: {
      username: 'YOUR_USERNAME',
      password: 'YOUR_PASSWORD',
    },
  },
});

const response = await client.identities.create(
  FinixApi.identities.CreateIdentityRequest.buyer({
    entity: {
      phone: '7145677613',
      firstName: 'John',
      lastName: 'Smith',
      email: 'finix_example@finix.com',
    },
    tags: {},
  })
);

console.log('Received response from Finix!', response);
}

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-{company}/{company}-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
