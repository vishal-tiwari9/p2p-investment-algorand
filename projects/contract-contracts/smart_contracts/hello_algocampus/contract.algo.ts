import { Contract } from '@algorandfoundation/algorand-typescript'

export class HelloAlgocampus extends Contract {
  hello(name: string): string {
    return `Hello, ${name}`
  }
}
