export default {
  // technicalId: "",
  id: {
    identifierContent: "",
  },
  // issueDate: {
  //   dateContent: ""
  // },
  // issueTime: {
  //   timeContent: ""
  // },
  // status: "",
  // buyerCustomerParty: {
  //   party: {
  //     technicalId: "",
  //     partyIdentification: {
  //       id: {
  //         identifierContent: ""
  //       }
  //     },
  //     partyName: {
  //       name: {
  //         textContent: ""
  //       }
  //     }
  //   }
  // },
  sellerSupplierParty: {
    party: "",
  },
  orderLine: [
    {
      lineItem: {
        id: {
          identifierContent: ""
        },
        quantity: {
          quantityContent: 1
        },
        price: {
          priceAmount: {
            amountContent: 0
          }
        },
        item: "",
      }
    }
  ],
  anticipatedMonetaryTotal: {
    payableAmount: {
      amountContent: 0,
    },
  },
};
