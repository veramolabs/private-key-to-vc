import { createAgent, IDIDManager, IKeyManager, MinimalImportableKey, TKeyType } from '@veramo/core'
import { DIDManager, MemoryDIDStore } from '@veramo/did-manager'
import { KeyManager, MemoryKeyStore, MemoryPrivateKeyStore } from '@veramo/key-manager'
import { KeyManagementSystem } from '@veramo/kms-local'
import { EthrDIDProvider } from '@veramo/did-provider-ethr'
import { PkhDIDProvider } from '@veramo/did-provider-pkh'
import { CredentialPlugin, ICredentialIssuer, ICredentialVerifier } from '@veramo/credential-w3c'

export const agent = createAgent<IKeyManager & IDIDManager & ICredentialIssuer & ICredentialVerifier>({
  plugins: [
    new KeyManager({
      store: new MemoryKeyStore(),
      kms: {
        mem: new KeyManagementSystem(new MemoryPrivateKeyStore()),
      },
    }),
    new DIDManager({
      providers: {
        'did:ethr': new EthrDIDProvider({ defaultKms: 'mem' }),
        'did:pkh': new PkhDIDProvider({ defaultKms: 'mem' }),
      },
      defaultProvider: 'did:ethr',
      store: new MemoryDIDStore(),
    }),
    new CredentialPlugin()
  ],
})
