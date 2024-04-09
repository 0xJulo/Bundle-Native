import React, { createContext, useContext, ReactNode, useState } from 'react';

// Example data for bundles
export const ExampleDataStore = [
    {
        id: 1,
        name: 'Swap ETH to USDC',
        type: 'My Bundle',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'This is a description for the bundle',
        tags: ['NFT', 'Art', 'Music'],
        steps: [
            {
                step: 1,
                subheading: 'Step 01',
                title: 'Network & Amount',
                description: 'Input the token that you want to swap and the amount',
                components: [
                    {
                        type: 'button',
                        text: 'Create Woop Payment Link',
                    }
                ],
            }
        ],
    },{
        id: 2,
        name: 'Bridge to Gnosis Pay',
        type: 'Pre-defined',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'This is a description for the bundle',
        tags: ['NFT', 'Art', 'Music'],
        steps: [
            {
                step: 1,
                subheading: 'Step 01',
                title: 'Create Woop Payment Link',
                description: 'This is a description for step 1',
                components: [
                    {
                        type: 'button',
                        text: 'Create Woop Payment Link',
                    }
                ],
            }
        ],
    },
    {
        id: 3,
        name: 'Create Woop Fundraiser',
        type: 'Pre-defined',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'This is a description for the bundle',
        tags: ['NFT', 'Art', 'Music'],
        steps: [
            {
                step: 1,
                subheading: 'Step 01',
                title: 'Create Woop Payment Link',
                description: 'This is a description for step 1',
                components: [
                    {
                        type: 'button',
                        text: 'Create Woop Payment Link',
                    }
                ],
            }
        ],
    },
    {
        id: 4,
        name: 'Arbitrum Airdrop',
        type: 'Pre-defined',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'This is a description for the bundle',
        tags: ['NFT', 'Art', 'Music'],
        steps: [
            {
                step: 1,
                subheading: 'Step 01',
                title: 'Create Woop Payment Link',
                description: 'This is a description for step 1',
                components: [
                    {
                        type: 'button',
                        text: 'Create Woop Payment Link',
                    }
                ],
            }
        ],
    },
    {
        id: 5,
        name: 'Create NFT and deploy to chain',
        type: 'Pre-defined',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'This is a description for the bundle',
        tags: ['NFT', 'Art', 'Music'],
        steps: [
            {
                step: 1,
                subheading: 'Step 01',
                title: 'Create Woop Payment Link',
                description: 'This is a description for step 1',
                components: [
                    {
                        type: 'button',
                        text: 'Create Woop Payment Link',
                    }
                ],
            }
        ],
    },
    {
        id: 6,
        name: 'Create something else',
        type: 'Pre-defined',
        created: 'Bundle',
        owner: 'Julo.eth',
        description: 'This is a description for the bundle',
        tags: ['NFT', 'Art', 'Music'],
        steps: [
            {
                step: 1,
                subheading: 'Step 01',
                title: 'Create Woop Payment Link',
                description: 'This is a description for step 1',
                components: [
                    {
                        type: 'button',
                        text: 'Create Woop Payment Link',
                    }
                ],
            }
        ],
    },
];

// Define the shape of a Bundle
export interface Item {
    id: number;
    name: string;
    type: string;
    created: string;
    owner: string;
    description: string;
    tags?: string[];
    steps: {
        step: number;
        subheading: string;
        title: string;
        description: string;
        components?: {
            type: string;
            text: string;
        }[];
    }[];
};

// Define the data and functions
export interface ExampleDataContextType {
    items: Item[];
    //addItem: (newItem: Item) => void;
    //removeItem: (itemId: string) => void;
};

export const ExampleDataContext = createContext<ExampleDataContextType | undefined>(undefined);

interface ExampleDataProviderProps {
    children: ReactNode;
};

export const ExampleDataProvider = ({ children }: ExampleDataProviderProps) => {
    const [items, setItems] = useState<Item[]>(ExampleDataStore); // put path to actual items
    
    {/* 
    const addItem = (newItem: Item) => {
        setItems([...items, newItem]);
      };
    
      const removeItem = (itemId: string) => {
        setItems(items.filter((item) => item.id !== itemId));
      };
      */}
      
      return (
        <ExampleDataContext.Provider value={{ items }}>
            {children}
        </ExampleDataContext.Provider>
      );
};

export const useExampleData = () => {
    const context = useContext(ExampleDataContext);
    if (context === undefined){
        throw new Error('useExampleData must be used within a ExampleDataProvider');
    }
    return context;
};


