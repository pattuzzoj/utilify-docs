# Crypto Utility Functions

Crypto utility functions provide a variety of methods for cryptographic operations. These functions help simplify common operations such as hashing, encryption, decryption, and generating random values, among others. Below is an overview of the functions available in this category, including their signatures and descriptions.

## [hash](./hash.md)
```typescript
function hash(data: string, algorithm: string): string
```
Returns the hash of the given data using the specified algorithm.

## [encrypt](./encrypt.md)
```typescript
function encrypt(data: string, key: string): string
```
Encrypts the given data using the specified key.

## [decrypt](./decrypt.md)
```typescript
function decrypt(data: string, key: string): string
```
Decrypts the given data using the specified key.

## [generateKey](./generateKey.md)
```typescript
function generateKey(length: number): string
```
Generates a random key of the specified length.

## [randomBytes](./randomBytes.md)
```typescript
function randomBytes(size: number): Uint8Array
```
Generates a random sequence of bytes of the specified size.
