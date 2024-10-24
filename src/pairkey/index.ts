import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
import { hash256, hashAddress } from "../utils";
import { bech32 } from "bech32";

const EC = require("elliptic").ec;

type network = "mainnet" | "testenet"

export class PairKey 
{
    private network = "mainnet"
    private curve = "secp256k1"
    private elliptic = new EC(this.curve)
    private pair = this.elliptic.genKeyPair()

    public constructor(hex?: string, network: network = "mainnet")
    {
        if(hex) this.pair = this.elliptic.keyFromPrivate(hex, "hex")

        this.network = network
    }

    public getPrivate(): string { 
        return this.pair.getPrivate("hex")
    }

    public static fromWif(hex: string): PairKey
    {
        return new PairKey()
    }

    public sign(message: string): string 
    {
        return this.pair.sign(message, "hex").toDER("hex")
    }

    public verify(message: string, signature: string): boolean
    {
        return this.pair.verify(message, signature, "hex")
    }

    public getAddress(): string 
    {
        // const pubkey = this.pair.getPublic()
        // const condinateX = pubkey.getX().toString("hex")

        // const prefix = "02" // the prefix 0x02 to X position
        // const address = prefix + condinateX;
        //const hash = hashAddress(address)
        const hashbytes = hexToBytes("751e76e8199196d454941c45d1b3a323f1433bd6")

        const bech = bech32.toWords(hashbytes)

        //const hex = "00" + bytesToHex(new Uint8Array(bech))

        const bechAddress = bech32.encode("bc", bech)

        //const checksum = hash256("33" + hex, true)

        // console.log("pubkey hash:", hex)
        // console.log("checksum:", checksum)

        console.log(bechAddress)

        return ""
    }
}
