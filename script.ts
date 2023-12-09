import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

// import readline from 'readline'

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

rl.question('Enter your reg no: ', (answer: string) => {
    const regno: string = answer

    // extract the first two index
    const regnoInit: string = regno.substring(0, 2)

    // convert to integer
    const regnoInit2: number = parseInt(regnoInit)

    checkRegno(regno, regnoInit2)

    rl.close()
})

const checkRegno: (regno: string, regnoInit2: number) => void = (regno: string, regnoInit2: number) => {
    if (regno.length == 7) {
        if (regnoInit2 >= 10 && regnoInit2 <= 24) {
            console.log(`Your reg no (${regno}) is valid!`);
        } else {
            console.log(`Your reg no (${regno}) is invalid!`);
        }
    } else if (regno.length == 8) {
        if (regnoInit2 >= 25) {
            console.log(`Your reg no (${regno}) is valid!`);
        } else {
            console.log(`Your reg no (${regno}) is invalid!`);
        }
    } else {
        console.log(`Your reg no (${regno}) is invalid!`);
    }
}