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
