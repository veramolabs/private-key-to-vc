import { computePublicKey } from '@ethersproject/signing-key'
import { agent } from './agent.js'
import { importableKeyFromPrivateKey } from './utils.js'

// should come from ENV
const privateKeyHex = '31d1ec15ff8110442012fef0d1af918c0e09b2e2ab821bba52ecc85f8655ec63'

const key = importableKeyFromPrivateKey(privateKeyHex, 'mem')

const compressedPublicKey = computePublicKey(`0x${key.publicKeyHex}`, true)

const identifier = await agent.didManagerImport({
    did: `did:ethr:${compressedPublicKey}`,
    provider: 'did:ethr',
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
    "id": "did:ethr:0x03155ee0cbefeecd80de63a62b4ed8f0f97ac22a58f76a265903b9acab79bf018c"
  },
  "type": [
    "VerifiableCredential",
    "Example"
  ],
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "issuanceDate": "2023-03-02T17:37:40.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRXhhbXBsZSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiQWxpY2UifX0sInN1YiI6ImRpZDpleGFtcGxlOnN1YmplY3QiLCJuYmYiOjE2Nzc3Nzg2NjAsImlzcyI6ImRpZDpldGhyOjB4MDMxNTVlZTBjYmVmZWVjZDgwZGU2M2E2MmI0ZWQ4ZjBmOTdhYzIyYTU4Zjc2YTI2NTkwM2I5YWNhYjc5YmYwMThjIn0.C_xvmoIfKfKDDY-Kg6ncVjEizQALhj13QQxXe5iXMP1aJFwZMJYAkCfogSLmhomJ11KekkR3DhZJmgK8W1cJkQ"
  }
}

 */