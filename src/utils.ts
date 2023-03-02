import { SigningKey } from "@ethersproject/signing-key"
import { MinimalImportableKey } from "@veramo/core"
import * as u8a from 'uint8arrays'

export function importableKeyFromPrivateKey(privateKeyHex: string, kms: string): MinimalImportableKey {
    const privateBytes = u8a.fromString(privateKeyHex.toLowerCase(), 'base16')
    const keyPair = new SigningKey(privateBytes)
    const publicKeyHex = keyPair.publicKey.substring(2)
    return  {
      type: 'Secp256k1',
      kid: publicKeyHex,
      privateKeyHex,
      publicKeyHex,
      kms,
      meta: {
        algorithms: [
          'ES256K',
          'ES256K-R',
          'eth_signTransaction',
          'eth_signTypedData',
          'eth_signMessage',
          'eth_rawSign',
        ],
      },
    }

}