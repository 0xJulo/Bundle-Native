import React, { useState, useEffect } from 'react';

// Data structure
interface Transactions {
    // define how transactions come in
    id: string,
    amount: string,
    currency: string,
};

interface Tokens {
    // define how tokens come in
};

interface NFTs {
    // define how NFTs come in
};

// The hook

export default function useWallet(walletAddres: string) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    const [tokens, setTokens] = useState<Tokens[]>([]);
    const [nfts, setNFTs] = useState<NFTs[]>([]);

    // useEffect to fetch data 
    useEffect(() => {
        const transactionExample: Transactions[] = [
            {id: '1', amount: '100', currency: 'USD'},
            {id: '2', amount: '200', currency: 'USD'},
        ];

        setTransactions(transactionExample);
    }, [walletAddres]);

    return { transactions }
}

