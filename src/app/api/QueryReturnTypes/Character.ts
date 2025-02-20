type Character = {
    id: number 
    name: string 
    status: string
    species: string
    type: string
    gender: string 
    origin: {
        name: string 
        url: string
    }
    location: {
        name: string 
        url: string
    }
    image: string
    episdode: string[]
    url: string 
    created: string
}
export default Character