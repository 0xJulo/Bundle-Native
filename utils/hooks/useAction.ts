import { useState, useEffect } from 'react';
import { ExampleDataStore } from '../../ExampleDataStore';

interface Action {
    type: string;
    source: string;
}

export default function useAction(bundleId: number) {
    const [action, setAction] = useState<Action | null>(null);

    useEffect(() => {
        const bundle = ExampleDataStore.find(bundle => bundle.id === bundleId);
        if (bundle) {
            setAction(bundle.action);
        }
    }, [bundleId]);

    return { action };
}

