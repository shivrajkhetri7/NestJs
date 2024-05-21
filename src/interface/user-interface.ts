export interface AddressInfoINterface {
    city :string
    pincode ?: string 
    street ? : string 
    state : string
}

export interface UserInterface{
    id :string
    name : string
    sname :string 
    address :AddressInfoINterface,
    contact :number,
    email:string
}