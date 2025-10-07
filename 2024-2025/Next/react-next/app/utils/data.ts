export const users = [
    {
        id: 1,
        name: 'Jan Kowalski',
        email: 'jan.kowalski@example.com',
        details: [
            { id: 999, title: 'Produkt 1', description: 'Opis produktu 1' },
            { id: 1000, title: 'Produkt 2', description: 'Opis produktu 2' },
        ],
    },
    {
        id: 2,
        name: 'Anna Nowak',
        email: 'anna.nowak@example.com',
        details: [
            { id: 1001, title: 'Usługa 1', description: 'Opis usługi 1' },
        ],
    },
];

export const adresses = [
    {
        id: '12312333333333333333333',
        countryId: 'pl_PL',
        street: 'TMP STREET',
        buildNumber: '11',
        city: 'Bialystok',
        phoneNumber: '123456789',
        customFields: {
            vatId: '123456789',
            companyName: 'My Company',
        }
    },
    {
        id: '12312333333333333333334',
        countryId: 'pl_PL',
        street: 'TMP STREEETT',
        buildNumber: '33',
        city: 'Warsaw',
        phoneNumber: '987654321',
        customFields: {
            vatId: '',
            companyName: '',
        }
    },
    {
        id: '12312333333333333333335',
        countryId: 'us_US',
        street: 'TMP STREETT',
        buildNumber: '22',
        city: 'New York',
        phoneNumber: '876543123',
        customFields: {
            vatId: '',
            companyName: '',
        }
    },
]
export const countries = [
    {
        id: 'pl_PL',
        label: 'Poland',
    },
    {
        id: 'us_US',
        label: 'United States',
    },
    {
        id: 'de_DE',
        label: 'Germany',
    }
]