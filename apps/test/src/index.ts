// import NodeRSA from "node-rsa";
// import {} from "fs";

import {
  sign,
  verify,
  generateKeyPairSync,
  type KeyType,
  type KeyFormat,
  generateKeyPair,
  publicEncrypt,
  privateDecrypt,
  createSign,
  createVerify,
} from "node:crypto";

type RSAParam = {
  publicKey: Buffer | string;
  privateKey: Buffer | string;
};
class RSA {
  private privateKey: Buffer;
  private publicKey: Buffer;
  constructor(param?: RSAParam) {
    const { privateKey, publicKey } = param ? param : this.generateRSAPair();
    this.privateKey = param
      ? privateKey instanceof Buffer
        ? privateKey
        : Buffer.from(privateKey, "base64")
      : Buffer.from(privateKey);
    this.publicKey = param
      ? publicKey instanceof Buffer
        ? publicKey
        : Buffer.from(publicKey, "base64")
      : Buffer.from(publicKey);
  }

  private generateRSAPair() {
    return generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
      },
    });
  }

  public message(message: string) {
    return `${message}\n\nSigniture: ${this.sign(message).toString("hex")}`;
  }

  public sign(message: Buffer | string) {
    return RSA.sign(message, this.privateKey);
  }

  public verify(signiture: string | Buffer, message: string | Buffer) {
    return RSA.verify(signiture, message, this.publicKey);
  }

  public encrypt(message: Buffer | string) {
    return RSA.encrypt(message, this.publicKey);
  }

  public decrypt(message: Buffer | string) {
    return privateDecrypt(this.privateKey, Buffer.from(message));
  }

  public static verify(
    signiture: string | Buffer,
    message: string | Buffer,
    publicKey: Buffer | string
  ) {
    const verifier = createVerify("rsa-sha256");
    verifier.update(message);

    return verifier.verify(
      publicKey,
      signiture instanceof Buffer ? signiture.toString("hex") : signiture,
      "hex"
    );
  }

  public static sign(message: Buffer | string, privateKey: Buffer | string) {
    const signer = createSign("rsa-sha256");

    signer.update(message);

    return Buffer.from(signer.sign(privateKey, "base64"), "base64");
  }

  public static encrypt(message: Buffer | string, publicKey: string | Buffer) {
    return publicEncrypt(
      publicKey instanceof Buffer
        ? publicKey
        : Buffer.from(publicKey, "base64"),
      Buffer.from(message)
    );
  }

  public static decrypt(privateKey: string | Buffer, message: Buffer | string) {
    return privateDecrypt(
      privateKey instanceof Buffer
        ? privateKey
        : Buffer.from(privateKey, "base64"),
      Buffer.from(message)
    );
  }
}

// const { pub, priv } = RSAGenerator.generateRSAPair();

const rsa = new RSA();

// rsa.save();

const text = "hello there!";

const msg = rsa.encrypt(text);

const sig = rsa.sign(text);
const ver = rsa.verify(sig, text);

Bun.write("./test.enc", msg);
Bun.write("./test.txt", text);
Bun.write("./test.sig", sig);
Bun.write("./test.ver", ver ? "True" : "False");

console.log(rsa.message(text));
