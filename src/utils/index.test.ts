import { bytesToHex, hexToBytes } from "@noble/hashes/utils"
import { hash256, hashAddress } from "."

describe("utillits tests", () => {
    it("convert hex string in array of number", () => {
        const bytes = hexToBytes("ff00ff")

        expect(bytes[0]).toBe(255)
        expect(bytes[1]).toBe(0)
    })
    it("convert an array of bytes in hex string", () => {
        const bytes = new Uint8Array(2)

        bytes[0] = 255
        bytes[1] = 0

        const hex = bytesToHex(bytes)

        expect(hex).toBe("ff00")
    })
    it("hash256 and checksum", () => {
        const hash =  hash256("ff00ff")
        const checksum = hash256(hash, true)

        expect(hash.length).toBe(64)
        expect(checksum.length).toBe(8)
    })
    it("hash address", () => {
        const hash = hashAddress("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")
    
        expect(hash.length).toBe(40)
    })
})
