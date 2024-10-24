import { PairKey } from "."

describe("pairkey tests", () => {
    it("ignition", () => {        
        const pair = new PairKey()

        pair.sign("ffff")

        expect(true).toBe(true)
    })
    it("export private key", () => {
        const pair = new PairKey()

        let privKey = pair.getPrivate()

        expect(privKey).toBeDefined()
    })
    it("import from private key", () => {
        const privKey = "b73bb069d56160f67e690493ac13300551bed7a006538c47dbed00d3ebc6a86d"

        const pairkey = new PairKey(privKey)

        expect(privKey).toBe(pairkey.getPrivate())
    })
    it("sign message", () => {
        const keypair = new PairKey()

        const signature = keypair.sign("fff16567")

        expect(signature).toBeDefined()
    })
    it("verify signature", () => {
        const keypair = new PairKey()

        const signature = keypair.sign("fff16567")

        expect(keypair.verify("fff16567", signature)).toBe(true)
    })
    it("generate a bitcoin address", () => {
        const keypair = new PairKey()

        const address = keypair.getAddress()

        expect(address).toBeDefined()
    })

})
