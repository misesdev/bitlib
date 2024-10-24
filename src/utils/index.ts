import { sha256 } from "@noble/hashes/sha256"
import { ripemd160 } from "@noble/hashes/ripemd160"
import { bytesToHex, hexToBytes } from "@noble/hashes/utils"


export const hash256 = (message: string, checksum: boolean = false): string => {
    
    let hash = sha256(hexToBytes(message))
    hash = sha256(hash)

    if(checksum)
        return bytesToHex(hash).substring(0, 8) // 4 firsts bytes
    
    return bytesToHex(hash)
}

export const hashAddress = (pubkey: string): string => {
    const hash = sha256(hexToBytes(pubkey))
    
    const ripemd = ripemd160(hash)

    return bytesToHex(ripemd)
}

