export interface IUser {
    results: [
        {
            gender: string,
            name: {
                title: string,
                first: string,
                last: string
            },
            location: {
                street: {
                    number: number,
                    name: string,
                },
                city: string,
                state: string,
                country: string,
                postcode: number,
                coordinates: {
                    latitude: number,
                    longitude: number
                },
                timezone: {
                    offset: number,
                    description: string
                }
            },
            email: string,
            login: {
                uuid: string,
                username: string,
                password: string,
                salt: string,
                md5: string,
                sha1: string,
                sha256: string
            },
            dob: {
                date: number,
                age: number
            },
            registered: {
                date: number,
                age: number
            },
            phone: number,
            cell: number,
            id: {
                name: string,
                value: number
            },
            picture: {
                large: string,
                medium: string,
                thumbnail: string
            },
            nat: string
        }
    ],
    info: {
        seed: number,
        results: number,
        page: number,
        version: number
    }
}
