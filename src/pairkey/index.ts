const EC = require("elliptic").ec;

export class PairKey 
{
    private curve = "secp256k1"
    private elliptic = new EC(this.curve)
    private pair = this.elliptic.genKeyPair()

    public constructor(hex?: string)
    {
        if(hex) this.pair = this.elliptic.keyFromPrivate(hex, "hex")
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

    public getAddress(): string {
        return ""
    }
}
