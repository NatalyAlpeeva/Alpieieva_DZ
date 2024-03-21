//1 використала алгоритм Тасування Фішера-Єйтса
let arr = [1,2,3,4,5,6,7,8,9];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  console.log(shuffle(arr));

  //2
  const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    const clients = company.clients;

    for (let i=0; i < clients.length; i++) {
        const client = clients[i];

        if(client.name == companyName) {
            return {
                name: client.name,
                type: client.type,
                uses: client.uses,
                sells: client.sells
            };
        } else {
            const partners = client.partners;
            for (let j=0; j < partners.length; j++) {
                const partner = partners[j];
                if (partner.name === companyName) {
                    return {
                        name: partner.name,
                        type: partner.type,
                        uses: partner.uses,
                        sells: partner.sells
                    };
                }
            }
        }
    }
    return null;

}

console.log(findValueByKey('Клієнт 1.1'));
 