Example project demonstrating how to issue credentials using only a private key

## Setup

```bash
pnpm i
```

## Running

Issue Verifiable Credential using `did:pkh` and `JwtProof2020` proof type

```
pnpm issue-vc-pkh
```

```json
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
```

Issue Verifiable Credential using `did:ethr`  and `JwtProof2020` proof type

```
pnpm issue-vc-ethr
```

```json
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
```

Issue Verifiable Credential using `did:web`  and `JwtProof2020` proof type

```
pnpm issue-vc-web
```

```json
{
  "credentialSubject": {
    "name": "Alice",
    "id": "did:example:subject"
  },
  "issuer": {
    "id": "did:web:example.com"
  },
  "type": [
    "VerifiableCredential",
    "Example"
  ],
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "issuanceDate": "2023-04-10T18:16:15.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRXhhbXBsZSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiQWxpY2UifX0sInN1YiI6ImRpZDpleGFtcGxlOnN1YmplY3QiLCJuYmYiOjE2ODExNTA1NzUsImlzcyI6ImRpZDp3ZWI6ZXhhbXBsZS5jb20ifQ.OcH2gRwIVymDePNR8mtLUL3GcZac0-0ohDHR39HarVsz4D62xCCWpNPai5nJqtyZIHrvbvmd236PQgLMnKc8VQ"
  }
}
```
