import { computeAddress } from '@ethersproject/transactions';
import { agent } from './agent.js'
import { importableKeyFromPrivateKey } from './utils.js'

// should come from ENV
const privateKeyHex = '31d1ec15ff8110442012fef0d1af918c0e09b2e2ab821bba52ecc85f8655ec63'

const key = importableKeyFromPrivateKey(privateKeyHex, 'mem')

const evmAddress = computeAddress(`0x${key.publicKeyHex}`)

const identifier = await agent.didManagerImport({
    did: `did:pkh:eip155:1:${evmAddress}`,
    provider: 'did:pkh',
    controllerKeyId: key.kid,
    keys: [ key ],
    services: [],
})

const credentialInput = {
  credentialSubject: { 
    id: 'did:example:subject', 
    name: 'Alice' 
  },
  issuer: { id: identifier.did },
  type: ['Example'],
}

const verifiableCredential = await agent.createVerifiableCredential({
  credential: credentialInput,
  proofFormat: 'jwt',
  save: false,
  removeOriginalFields: true,
})

console.log(JSON.stringify(verifiableCredential, null, 2))

/**
{
  "credentialSubject": {
    "name": "Alice",
    "id": "did:example:subject"
  },
  "issuer": {
    "id": "did:pkh:eip155:1:0x84065697A1CA955f42DB935EBb64Df396Ff30a58"
  },
  "type": [
    "VerifiableCredential",
    "Example"
  ],
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "issuanceDate": "2023-03-02T17:38:16.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRXhhbXBsZSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiQWxpY2UifX0sInN1YiI6ImRpZDpleGFtcGxlOnN1YmplY3QiLCJuYmYiOjE2Nzc3Nzg2OTYsImlzcyI6ImRpZDpwa2g6ZWlwMTU1OjE6MHg4NDA2NTY5N0ExQ0E5NTVmNDJEQjkzNUVCYjY0RGYzOTZGZjMwYTU4In0.873_93-Eid9bZjDFdMf0BPJqS7Z4ClXjev-K1Ge_GeisyEiHHnQep3zYxj1mTJ2jzw7nLi2Jz2IHzPRet_N6PA"
  }
}
 */