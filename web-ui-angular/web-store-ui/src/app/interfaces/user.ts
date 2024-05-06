export interface User {
    email: string,
    id?: string,
    firstName: string,
    lastName: string,
    status?: string,
    password?:string,
    address?: {
        street: string,
        addressLine2?: string,
        city: string,
        state: string,
        postalCode: string
    }
}
