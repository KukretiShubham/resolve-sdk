export const contractAbi = [
    {
      "inputs": [],
      "name": "NotAuthorised",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "currWallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "firDel",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "secDel",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "thirDel",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "fourDel",
          "type": "address"
        }
      ],
      "name": "RegistryCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldWallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newWallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "delegateVoter",
          "type": "address"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oldWallet",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newWallet",
          "type": "address"
        }
      ],
      "name": "WalletMapped",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "currWallet",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "firDel",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "secDel",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "thirDel",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "fourDel",
              "type": "address"
            }
          ],
          "internalType": "struct Registry.Registery",
          "name": "delegates",
          "type": "tuple"
        }
      ],
      "name": "createNewRegistry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "oldWallet",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "newWallet",
              "type": "address"
            }
          ],
          "internalType": "struct Registry.Pair",
          "name": "pair",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "deleGateVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "delegateVoteCount",
      "outputs": [
        {
          "internalType": "address",
          "name": "oldWallet",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newWallet",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "register",
      "outputs": [
        {
          "internalType": "address",
          "name": "firDel",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "secDel",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "thirDel",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "fourDel",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "currWallet",
          "type": "address"
        }
      ],
      "name": "resolver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "oldWallet",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "newWallet",
              "type": "address"
            }
          ],
          "internalType": "struct Registry.Pair",
          "name": "pair",
          "type": "tuple"
        }
      ],
      "name": "updateOldToNew",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "oldWallet",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "newWallet",
              "type": "address"
            }
          ],
          "internalType": "struct Registry.Pair",
          "name": "pair",
          "type": "tuple"
        }
      ],
      "name": "voteValidation",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "walletStatusOldToNew",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]
